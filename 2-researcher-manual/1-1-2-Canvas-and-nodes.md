# 画布和节点 <!-- {docsify-ignore-all} -->

<font style="color:rgb(38, 38, 38);">脑岛研究者平台希望您在脑岛中所做的一切都可以通过一个清晰且直观的界面来展现，因此脑岛提供了一套简单易用但又功能强大的</font>**<font style="color:rgb(38, 38, 38);">画布工具</font>**<font style="color:rgb(38, 38, 38);">，您可通过</font>**<font style="color:rgb(38, 38, 38);">画布工具</font>**<font style="color:rgb(38, 38, 38);">轻松快速地编辑自己的项目和实验，并且只需通过鼠标拖动即可设计复杂的项目流程。</font>

![](../images/2024/1710306962606-da0a3269-4726-420c-82be-bdc8d61f7632.png)

<font style="color:rgb(38, 38, 38);">在初始</font>**<font style="color:rgb(38, 38, 38);">未激活状态</font>**<font style="color:rgb(38, 38, 38);">下，【画布】的菜单栏中仅有一个【开始】节点。您需要将【开始】节点拖入【画布】才能激活画布的</font>**<font style="color:rgb(38, 38, 38);">编辑状态</font>**<font style="color:rgb(38, 38, 38);">。</font>

![](../images/2024/1710255862105-fba17430-857e-482b-a9f3-c36905caeecb.png)

<font style="color:rgb(38, 38, 38);"></font>
<font style="color:rgb(38, 38, 38);">在编辑状态下，画布的菜单栏会显示若干功能节点，您可通过将这些</font>**<font style="color:rgb(38, 38, 38);">功能节点</font>**<font style="color:rgb(38, 38, 38);">拖动到画布中以实现复杂的项目结构。画布中所有的功能节点均通过</font>**<font style="color:rgb(38, 38, 38);">鼠标点击按中并拖动</font>**<font style="color:rgb(38, 38, 38);">这一动作进入画布。</font>

<font style="color:rgb(38, 38, 38);"></font>

<font style="color:rgb(38, 38, 38);">画布上的节点结构一般如下图所示，在连接点上拖拽可以进行连线，节点之间通过</font>**<font style="color:rgb(38, 38, 38);">连线箭头</font>**<font style="color:rgb(38, 38, 38);">进行相连。</font>

![](../images/2024/1710259312196-8c889fbb-e71a-4ce8-b7ba-7b18fdcd8f73.png)![](../images/2024/1710258981190-c9c5deb1-4226-4d33-8ecc-4d365ccfa37d.png)

**双击**大部分节点都会触发相应的功能，鼠标悬浮在节点上可以触发额外的菜单

+ ![](../images/2024/1710257190104-a28af582-41a3-4c30-a25c-bef60ebfeda9.png) 图标可以修改节点元数据（标题、描述）
+ ![](../images/2024/1710257334959-0b6a33cf-6e08-4bbe-9514-24a2b9c1681b.png) 图标可以快速复制节点
+ ![](../images/2024/1710257255649-714d0caf-115b-43f8-aec3-a42f5c8ada57.png) 图标可以删除节点



## 作答流程


画布中**箭头的流向**指示着**作答时的流程**。作答中测试者**<font style="color:#ED740C;">以开始节点作为入口，每完成一个节点才能进入下一个节点，到结束节点结束</font>**。因此画布上的所有节点必须包含在**开始 -> [各类节点] -> 结束**的结构中。

![两种结构示例（实际画布中无法存在多个开始节点）](../images/2024/1710260283415-ff1d3069-b948-4bc6-b1fb-75c3c263b614.png)

## 目前可使用的节点一览


+ 功能控制节点
    - 开始节点
    - [结束节点](/2-researcher-manual/1-1-2-9-end.md)



+ 问卷类型节点
    - [问卷节点](/2-researcher-manual/1-1-2-1-questionnaire.md)
    - [个人信息](/2-researcher-manual/1-1-2-2-personal-info.md)（预设的一套用于收集个人信息的问卷）
    - [测试环境](/2-researcher-manual/1-1-2-3-env.md)<font style="color:rgb(38, 38, 38);">（预设的一套用于收集被试作答环境的问卷）</font>



+ 实验类型节点
    - [简单云节点](/2-researcher-manual/1-1-2-4-simple-cloud.md)
    - [PsychoPy 节点](/2-researcher-manual/1-1-2-5-psychopy.md)
    - [jsPsych 节点](/2-researcher-manual/1-1-2-6-jspsych.md)



+ 分组器节点
    - [随机分组节点](/2-researcher-manual/1-1-2-7-Random-grouping.md)
    - [行为分组节点](/2-researcher-manual/1-1-2-8-behavior-grouping.md)


+ [由资源库导入节点](/2-researcher-manual/1-1-2-10-resource.md)



## 其他教程
[脑岛使用小妙招03丨如何使用画布系统实现各种“高大上”的实验流程？](https://mp.weixin.qq.com/s/a5wEEZ9g_sUXIecfxzs0iQ)

[画布系统_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1g14y147ZT?p=4)

