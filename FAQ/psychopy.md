# PsychoPy <!-- {docsify-ignore-all} -->

> 更多请在[Github Issue](https://github.com/psychopy/psychopy/issues)查看

### 支持的版本

截止2022.06.27，支持2021.2.3和2020.1.3，详见[PsychoPy实验](../researcher-manual/project1-2-5.md)

### PsychoPy code 涉及到import等语法

线上没有numpy等库，不支持import语法（需要使用替代的函数）

### 资源库BART实验 线下运行只有一个试次

PsychoPy资源是线上下线下兼容的，但是有一些例外，这里就是其中一个例子：使用了声音组件。在线上实验中，PsychoJS会根据声音文件的时间长短来决定Routine的时间，因此Audio组件的时间会设置为无限长；而在线下则是根据其时间设置来。

详细[参考这篇文章](https://forum.naodao.com/postingInfo?id=1499255336811630593)

### 复杂按键判断

详见[文章](https://forum.naodao.com/postingInfo?id=1501126060505567233)

### 上传后打不开，显示 unknown resource

* 方案1

> 版本为2021.2.3，请删除导出路径的html。依次点击 `Edit experiment settings` > `Online`，找到`Output Path`，清空文本框的内容即可

* 方案2

> 请检查文件命名和路径是否正确，路径分割以`/`为主，而不是`\`，也就是把反斜杠改成斜杠

### 字体支持

* Arial (sans-serif)
* Verdana (sans-serif)
* Helvetica (sans-serif)
* Tahoma (sans-serif)
* Trebuchet MS (sans-serif)
* Times New Roman (serif)
* Georgia (serif)
* Garamond (serif)
* Courier New (monospace)
* Brush Script MT(cursive)

### 部分图片材料不能正确读取

请手动添加资源文件，方式如下:

依次点击 `Edit experiment settings` > `Online`, 找到`Additional Resources`，这里面进行增减即可。

### 数据乱码

在线实验，采用的是UTF-8，一般采用的是gbk，乱码情况下，用excel导入功能以UTF8导入csv文件即可正常显示

### 定义的变量不能够按照预期执行

请确保变量名称与各个Routine名称、loop名称、循环条件名称均不相等，不然会造成JavaScript重定义问题

[案例1](https://forum.naodao.com/postingInfo?id=1522061951159767041)
[案例2]()

### 条件的变量为空，造成undefined

![](imgs/1523602447262945281.png)

比如上面的表格，`stim_sportsall1` 在时间线下某些循环中为空值，需要进行填充

详细参考[论坛](https://forum.naodao.com/postingInfo?id=1523567902115237890)

### loop循环出问题，用了thisN函数

`.thisN`这个属性在线是用不了的，你可以用其他的方式

### 在线录音问题

目前暂不支持麦克风的数据存储，后续会考虑加入的~

### new core.Clock()报错

请在js这边改成 new util.Clock()

### 版本语法问题

![](https://forum-pub.oss-cn-chengdu.aliyuncs.com/20220531/1531577623778824193.png)

主要案例为上面图片，将*\$\'right\'*改为 *right* 即可

