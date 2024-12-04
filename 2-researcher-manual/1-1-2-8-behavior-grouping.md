# Behavioral Grouping <!-- {docsify-ignore-all} -->
The behavioral grouping node can establish multiple project branches based on scores from the **previous node**. 

<font style="color:rgb(38, 38, 38);"></font>

<font style="color:rgb(38, 38, 38);">As shown in the example below, the node preceding behavioral grouping must be a node type that generates scores (supports questionnaires and experiments). Behavioral grouping can determine which branch a participant follows based on their questionnaire scores.</font>

![](../images/2022/1649314243725-3ab808a4-ba5a-405e-bcd5-0a00585e433d.png)

> Note: <font style="color:rgb(38, 38, 38);">Branches created after grouping cannot be merged, meaning the entire project must maintain a tree structure</font>
>

## Questionnaire Scoring

In questionnaire nodes, three types of questions can be scored: single-choice, Likert-scale, and matrix single-choice questions.

![](../images/2022/1656155581803-bb5fa54a-b740-4866-8408-29b32bf14945.png)

When placing a behavioral grouping node directly after a questionnaire node, double-click the behavioral grouping node to open the grouping settings interface. Here you can select scoring questions from the questionnaire node and obtain their score ranges.

![](../images/2022/1649170016378-26c16bc8-8c28-4eb1-9a9d-d940734ee015.png)![](../images/2022/1649170550409-b4cbe915-02eb-4caa-8fbb-157b4943a61b.png)

## Experiment Scoring

Experiment type nodes (currently supporting PsychoPy and jsPsych) can analyze each participant's data file online during response and generate a numerical result as the experiment node's score.

After **uploading the experiment package**, you can upload a Python script file (**analysis code**). This script should contain a function called `handler` that takes the data file (CSV) generated after experiment completion as a parameter. After code analysis, it should return an `int` or `float` value, which serves as the experiment node's score.


The Python code runs in Python 3.6 environment, with access to `numpy`, `scipy`, `pandas`, `sklearn`, and their dependencies. Detailed information about the `handler` function's parameters and return values can be found in the node template.

![① ② ③ Need to be uploaded in sequence, the next checkbox appears after uploading the previous one](../images/2022/1656158078427-75dc81dc-f6ef-4098-9ba1-cdc61684d470.png)

Experiment nodes without analysis code have a score of `0`. After uploading analysis code, researchers still need to **define possible score ranges** and **verify the analysis code's validity**. Verification requires uploading a sample CSV data file for the experiment (obtainable through preview; note that PsychoPy online and offline data files differ, **please write analysis code based on online data files**). After uploading the sample data file, the system will attempt to run the analysis code with that CSV as input parameter; verification passes if a valid return value is obtained.

> Upload verification may fail if filenames contain spaces or non-ASCII characters (including Chinese characters)
>

![](../images/2022/1656160979246-1b67996e-1b20-4f2c-b8f1-7069df7d5c5e.png)![](../images/2022/1656161576342-6fb890ea-0bcd-40e0-bff0-56ae6c89365d.png)

## Setting Groups Based on Scores
Once the previous node has valid scores, behavioral grouping can assign participants to different groups based on these scores. 

Here's an example using questionnaire-based behavioral grouping:

![](../images/2022/1649171243514-8c20aea0-c807-4128-a8f5-013eea5efc77.png)

> Score ranges for groups can be discontinuous. Participants with scores not falling within specified ranges will be assigned to the **<font style="color:#FA541C;">default group</font>**
>

If the content of the previous node is modified, subsequent behavioral grouping becomes invalid and requires regrouping and reconnecting.

![](../images/2022/1649169845908-3d795485-c323-492c-9314-7c52c90ab595.png)

## 其他教程
[Master Behavioral Grouping Nodes Easily](https://mp.weixin.qq.com/s/mClgFJ2WhynXXnwXhQytUw)

[Behavioral Grouping_Bilibili_bilibili](https://www.bilibili.com/video/BV1g14y147ZT?p=10)

