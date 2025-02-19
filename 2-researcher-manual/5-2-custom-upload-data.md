# 自定义数据上传

一般，采用Psychopy、或者是jspsych的实验程序，都可以用默认方法，将数据上传到脑岛平台。
- [PsychoPy](./1-1-2-5-psychopy.md)
- [jsPsych](./1-1-2-6-jspsych.md)

然而，随着AI技术的发展，越来越多的在线心理学实验框架被提出。所以，本教程将介绍如何自主修改各种框架，以适配脑岛。

> 下面的代码是`naodao.js`的代码，后面会随时用到
::: details 点我查看代码
```js
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Naodao = /** @class */ (function () {
    function Naodao() {
        this.__preUrl = 'https://www.naodao.com/api';
        this.__token = '';
        this.__id = '';
        this.__location = '';
        this.__itemId = '';
        this.__beginDate = '';
        this.getData = function () { return ""; };
        this.init();
    }
    Naodao.getQueryString = function (params) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == params) {
                return pair[1];
            }
        }
        return '';
    };
    Naodao.prototype.init = function () {
        var _this = this;
        var __localStorage = window.localStorage.getItem('__insula_l__');
        var __data = __localStorage ? JSON.parse(__localStorage) : {};
        _this.__beginDate = __data.user && __data.user.beginDate;
        _this.__token = Naodao.getQueryString('__token');
        _this.__id = Naodao.getQueryString('__id');
        _this.__itemId = Naodao.getQueryString('__itemId');
        _this.__location = window.location.href;
        fetch(_this.__preUrl + '/user/canvasNode/insertRecord', {
            method: "POST",
            headers: {
                "accept": "application/json, text/plain, */*",
                "content-type": "application/json",
            },
            body: JSON.stringify({
                nodeId: _this.__id,
                recordId: _this.__token,
                itemId: _this.__itemId,
                beginDate: _this.__beginDate ? _this.__beginDate : ''
            })
        }).then(function (response) { return response.json(); });
    };
    Naodao.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.__token === 'preview' || this.__location.includes('file://'))) return [3 /*break*/, 1];
                        result = this.offlineSave(this.getData());
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.onlineSave(this.getData())];
                    case 2:
                        result = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!result) {
                            this.parent_post_message(this.__token, this.__id, !1, 500, "实验作答失败，请刷新重新作答！");
                        }
                        else {
                            this.parent_post_message(this.__token, this.__id, !0, 200, "实验作答完成，感谢你的耐心等待，继续下一步？");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Naodao.prototype.offlineSave = function (str, id) {
        if (id === void 0) { id = this.__id; }
        try {
            var blobToSave = new Blob([str], {
                type: "text/plain",
            });
            var blobURL = "";
            if (typeof window.webkitURL !== "undefined") {
                blobURL = window.webkitURL.createObjectURL(blobToSave);
            }
            else {
                blobURL = window.URL.createObjectURL(blobToSave);
            }
            var link = document.createElement("a");
            link.id = "jspsych-download-as-text-link";
            link.style.display = "none";
            link.download = "".concat(id, ".csv");
            link.href = blobURL;
            link.click();
            return true;
        }
        catch (_a) {
            return false;
        }
    };
    Naodao.prototype.onlineSave = function (str_1) {
        return __awaiter(this, arguments, void 0, function (str, id, token) {
            if (id === void 0) { id = this.__id; }
            if (token === void 0) { token = this.__token; }
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(this.__preUrl + '/user/jsPsych/results', {
                        method: "POST",
                        headers: {
                            "accept": "application/json, text/plain, */*",
                            "content-type": "application/json",
                        },
                        body: JSON.stringify({
                            experimentId: id,
                            token: token,
                            key: id,
                            value: str,
                            state: 1
                        })
                    }).then(function (response) { return response.json(); })
                        .then(function (data) {
                        if (data.code == 200) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    })];
            });
        });
    };
    Naodao.prototype.parent_post_message = function (recordId, nodeId, isCompleted, code, message) {
        window.parent.postMessage({ recordId: recordId, nodeId: nodeId, isCompleted: isCompleted, code: code, message: message });
    };
    return Naodao;
}());
// export default Naodao;
```
:::

## 利用浏览器下载

对于AI生成实验，这种方案是最常见的。它们往往会生成下面的内容:
```js
const link = document.createElement('a');
link.href = url;
link.download = `exper.csv`;
```

这代表着，实验结束之后，将会生成csv数据，并利用浏览器功能，保持csv为文件。

### 修改

1. 保存`naodao.js`

在文章开头，有一段代码，将其保持到项目根目录。

> 项目根目录，一般指的是`index.html`所存在的文件夹。

2. 添加`naodao.js`到项目中

先定位到`index.html`中，将`<script src="./naodao.js"></script>`添加到`<html><head>`当中。

> 如果不清楚具体修改方法，可以参考下面的文件对比。
::: details 修改前
```html
<html>
    <head>
        ...额外代码
    </head>
</html>
```
:::

::: details 修改前
```html
<html>
    <head>
        <script src="./naodao.js"></script>
        ...额外代码
    </head>
</html>
```
:::

3. 修改核心保存代码

在`link.download`的代码位置往上翻。找到类型下面的代码:
```js
const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
```

这里面的`csvContent`是需要的内容。
接下来将`数据下载功能`替换为下面的内容:
```js
const naodao = new Naodao();
naodao.getData = () => { return csvContent };
naodao.save();
```

> 下面是具体案例

::: details 修改前
```js
function downloadData() {
    if (!gameState.participant || !gameState.trialData.length) return;

    const headers = [
        'participantId',
        'name',
        'age',
        'gender',
        'education',
        'trialNumber',
        'balloonType',
        'popThreshold',
        'numPumps',
        'earned',
        'popped',
        'trialDuration',
        'timestamp'
    ];

    const csvContent = [
        headers.join(','),
        ...gameState.trialData.map(trial => 
            headers.map(header => {
                const value = trial[header];
                return typeof value === 'string' && value.includes(',') ?
                    `"${value}"` : value;
            }).join(',')
        )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `balloon_task_${gameState.participant.name}_${gameState.participant.participantId}_${new Date().getTime()}.csv`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    const downloadButton = document.getElementById('download-button');
    if (downloadButton) {
        downloadButton.textContent = '数据已下载 📥';
        downloadButton.disabled = true;
        downloadButton.classList.add('bg-gray-400');
        downloadButton.classList.remove('hover:bg-purple-600');
    }
}
```
:::

::: details 修改后
```js
function downloadData() {
    if (!gameState.participant || !gameState.trialData.length) return;

    const headers = [
        'participantId',
        'name',
        'age',
        'gender',
        'education',
        'trialNumber',
        'balloonType',
        'popThreshold',
        'numPumps',
        'earned',
        'popped',
        'trialDuration',
        'timestamp'
    ];

    const csvContent = [
        headers.join(','),
        ...gameState.trialData.map(trial => 
            headers.map(header => {
                const value = trial[header];
                return typeof value === 'string' && value.includes(',') ?
                    `"${value}"` : value;
            }).join(',')
        )
    ].join('\n');

    const naodao = new Naodao();
    naodao.getDate = () => { return csvContent; };
    naodao.save();

    const downloadButton = document.getElementById('download-button');
    if (downloadButton) {
        downloadButton.textContent = '数据已下载 📥';
        downloadButton.disabled = true;
        downloadButton.classList.add('bg-gray-400');
        downloadButton.classList.remove('hover:bg-purple-600');
    }
}
```
:::



