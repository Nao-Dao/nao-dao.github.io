# PsychoPy实验 <!-- {docsify-ignore-all} -->
PsychoPy 是流行的创建心理学行为实验的工具。脑岛提供了对于 PsychoPy [**2021.2.3**](https://github.com/psychopy/psychopy/releases/tag/2021.2.3)<font style="color:rgb(38, 38, 38);"> 和 </font>[**2020.1.3**](https://github.com/psychopy/psychopy/releases/tag/2020.1.3)<font style="color:rgb(38, 38, 38);"> 生成的在线实验的支持。需要注意，PsychoPy </font>**<font style="color:rgb(38, 38, 38);">使用 Builder 编写</font>**<font style="color:rgb(38, 38, 38);">的实验才能自动转换成在线实验，使用 coder 编写的Python（本地）实验无法转换为在线实验。</font>

<font style="color:rgb(38, 38, 38);"></font>

:::color2
PsychoPy 新手？我们也为你整理了一些学习资源

+ [PsychoPy 官网](https://www.psychopy.org/)（英文）
+ [PsychoPy 支持中心](https://psychopyhelp.notion.site/PsychoPy-Help-Center-d517aee9e57749c6b766a005fd34646e) by 闲事与尘游



如果你希望求助或与人交流 PsychoPy 心得，欢迎关注[脑岛论坛 PsychoPy 版块](https://forum.naodao.com/postingInfo?id=1500138031221575682)

:::

![](https://cdn.nlark.com/yuque/0/2022/gif/26719757/1647583369297-64ad9466-6a4c-4886-8d72-0a64cd874e16.gif)

双击 PsychoPy 节点可以打开编辑界面。

![](https://cdn.nlark.com/yuque/0/2022/png/26719757/1656576790018-3b7de9ed-f2e3-441e-83b3-91a1fe0ca12f.png)

## <font style="color:rgb(51, 51, 51);">允许每个被试打开该实验程序的次数</font>


您可以设置当前实验的名称以及规定**允许每个被试打开该实验程序的次数**。此处的次数限制是指在一个项目中允许被试打开实验的次数，**只能在一次项目项目作答中起到次数限制的作用**，与项目级别的控制「[允许用户重复作答](https://www.yuque.com/naodao/researcher-manual/cd165t#iAm3a)<font style="color:rgb(51, 51, 51);">」不同</font>。

<font style="color:rgb(38, 38, 38);"></font>

<font style="color:rgb(38, 38, 38);">例如我们希望被试在一次作答中只能打开一次实验，那么将次数</font>设为`1`；但如果您项目发布设置中允许了被试重复参与当前的研究项目，那么被试放弃作答后重新进入这个项目，仍然可以打开这个实验。

## 上传实验包


您可以点击【点击上传】按钮上传通过**PsychoPy**软件编写的心理学实验。



> 脑岛Tips
>
> 1. 请注意务必在PsychoPy Builder中将所有Python实验转换为合适的在线实验，即选择 `File` - `Export to HTML` 导出HTML文件后才能进行上传压缩包
> 2. 上传的压缩包中的文件（夹）命名中带有中文或其他非 ASCII 字符可能导致执行出错
> 3. 请确保上传的压缩包<font style="color:rgb(38, 38, 38);">体积小于 100 MB，并且没有数量非常多的子目录或和文件。尽量不要包含多个 html 文件</font>
>

![](https://cdn.nlark.com/yuque/0/2022/gif/26719757/1647583369504-ad105975-437d-4471-b0b9-57c5d2821e53.gif)



### 实验预览
当实验上传完成后，在**实验地址**右侧会出现一个【预览】的功能按钮，您可点击此按钮预览刚才上传的实验。

![](https://cdn.nlark.com/yuque/0/2022/png/26719757/1647583369606-56f4f698-d6c1-4282-b5b7-e33e30f3b16a.png)

![](https://cdn.nlark.com/yuque/0/2022/png/26719757/1647583362060-8b85c2e1-bb4d-4ab0-9d2f-260279085466.png)

![](https://cdn.nlark.com/yuque/0/2022/gif/26719757/1647583369721-4de9d395-d498-4fc3-860c-47f4c03a51bb.gif)

预览结束后，浏览器会下载本次预览生成的数据文件以供检查。

## 实验计分
主条目：[行为分组](https://www.yuque.com/naodao/researcher-manual/ih2gp8#YIS9r)



在上传实验包之后，用户**可选**上传代码解析实验生成的 CSV 数据文件，从而得到一个数值结果。这个结果能在后续的行为分组节点中使用。

![① ② ③ 需要依次上传，上传前一个会出现后一个的选框](https://cdn.nlark.com/yuque/0/2022/png/26719757/1656158078427-75dc81dc-f6ef-4098-9ba1-cdc61684d470.png)



## 其他教程
[脑岛使用小妙招05丨带你在脑岛轻松使用PsychoPy实验程序！](https://mp.weixin.qq.com/s/ZYxCI99Ug_wlVvKLkWdEFA)

[PsychoPy节点_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1g14y147ZT?p=7)

