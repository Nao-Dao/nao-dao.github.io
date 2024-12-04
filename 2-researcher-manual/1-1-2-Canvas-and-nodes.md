# Canvas and Nodes <!-- {docsify-ignore-all} -->

Naodao Research Platform aims to present everything you do through a clear and intuitive interface. It provides a simple yet powerful **Canvas Tool** where you can easily edit your projects and experiments, and design complex project workflows with simple mouse dragging.

![](../images/2024/1710306962606-da0a3269-4726-420c-82be-bdc8d61f7632.png)

In the initial **inactive state**, the canvas menu bar only contains a "Start" node. You need to drag the "Start" node onto the canvas to activate the canvas's **editing state**.

![](../images/2024/1710255862105-fba17430-857e-482b-a9f3-c36905caeecb.png)
<font style="color:rgb(38, 38, 38);"></font>

In editing state, the canvas menu bar displays several functional nodes. You can create complex project structures by dragging these **functional nodes** onto the canvas. All functional nodes on the canvas are added through **clicking and dragging with the mouse**.

<font style="color:rgb(38, 38, 38);"></font>

The node structure on the canvas typically appears as shown below. You can create connections by dragging from connection points, and nodes are linked together through **connecting arrows**.

![](../images/2024/1710259312196-8c889fbb-e71a-4ce8-b7ba-7b18fdcd8f73.png)![](../images/2024/1710258981190-c9c5deb1-4226-4d33-8ecc-4d365ccfa37d.png)

**Double-clicking** most nodes triggers their respective functions. Hovering over a node reveals additional menu options:

+ ![](../images/2024/1710257190104-a28af582-41a3-4c30-a25c-bef60ebfeda9.png) icon allows modification of node metadata (title, description)
+ ![](../images/2024/1710257334959-0b6a33cf-6e08-4bbe-9514-24a2b9c1681b.png) icon enables quick node duplication
+ ![](../images/2024/1710257255649-714d0caf-115b-43f8-aec3-a42f5c8ada57.png) icon deletes the node

## Response Flow

The **direction of arrows** on the canvas indicates the **response flow**. During testing, participants **<font style="color:#ED740C;">start from the start node, can only proceed to the next node after completing the current one, and finish at the end node</font>**. Therefore, all nodes on the canvas must be contained within the **Start -> [Various Nodes] -> End** structure.

![Two structure examples (multiple start nodes cannot exist on actual canvas)](../images/2024/1710260283415-ff1d3069-b948-4bc6-b1fb-75c3c263b614.png)

## Currently Available Nodes

+ Function Control Nodes
    - Start Node
    - [End Node](/2-researcher-manual/1-1-2-9-end.md)

+ Questionnaire Type Nodes
    - [Questionnaire Node](/2-researcher-manual/1-1-2-1-questionnaire.md)
    - [Personal Information](/2-researcher-manual/1-1-2-2-personal-info.md) (preset questionnaire for collecting personal information)
    - [Test Environment](/2-researcher-manual/1-1-2-3-env.md) (preset questionnaire for collecting participant's testing environment information)

+ Experiment Type Nodes
    - [Simple Cloud Node](/2-researcher-manual/1-1-2-4-simple-cloud.md)
    - [PsychoPy Node](/2-researcher-manual/1-1-2-5-psychopy.md)
    - [jsPsych Node](/2-researcher-manual/1-1-2-6-jspsych.md)

+ Grouping Nodes
    - [Random Grouping Node](/2-researcher-manual/1-1-2-7-Random-grouping.md)
    - [Behavioral Grouping Node](/2-researcher-manual/1-1-2-8-behavior-grouping.md)

+ [Import Nodes from Resource Library](/2-researcher-manual/1-1-2-10-resource.md)

## Other Tutorials

[How to Use the Canvas System to Implement Various "Advanced" Experimental Procedures?](https://mp.weixin.qq.com/s/a5wEEZ9g_sUXIecfxzs0iQ)

[Canvas System_Bilibili_bilibili](https://www.bilibili.com/video/BV1g14y147ZT?p=4)

