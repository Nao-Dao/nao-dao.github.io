# Questionnaire Node <!-- {docsify-ignore-all} -->
[Quick Guide to Creating Questionnaires](https://mp.weixin.qq.com/s/oDAG0d8gqY6vE-_FRvO17w)

[How to Use Questionnaires_bilibili](https://www.bilibili.com/video/BV1g14y147ZT?p=5)

## Previous Content
> Most of the following content is outdated
>

<font style="color:rgb(38, 38, 38);"></font>

![](../images/2022/1647583369114-1886224a-c6d0-459e-a82b-f4f0569a4b88.gif)

![](../images/2022/1647583362060-8b85c2e1-bb4d-4ab0-9d2f-260279085466.png)

![](../images/2022/1647583365604-3971b7d7-12d8-4ac5-abb5-ccb5d6e665c2.png)

You can modify the basic information of the current node (node name, node prompt) through the [Node Information] button.

![](../images/2022/1647583365746-10b3286a-33f1-46a2-9d2f-391c95a07e9e.png)

You can select common question types from the [Question Type Selection] panel on the left side of the page. You can add question types from the [Question Type Selection] panel to the **question preview area** in the middle of the page by **clicking and dragging with your mouse**.

![](../images/2022/1647583365837-755f8db2-18ed-491e-b635-fe7a26a84ad5.gif)

After adding questions to the **question preview area**, you can edit **individual questions** in the [Settings] panel on the right.

![](../images/2022/1647583366061-801df376-bffb-4d23-9b7e-d78705875c66.png)

##### Required Question Settings
_**Required Question**_: You can use [*Required Question] to set whether a question must be answered.

![](../images/2022/1647583366143-b4b4265f-539b-4d2c-b8b1-debea842298d.png)

##### Edit Question Number
_**Question Number**_: You can modify the question number for each question in [*Question Number]. Under normal circumstances, the platform will generate a default question number for each question in the question preview area. When you manually modify a question's number, the platform will **automatically update** the sorting position of all questions based on the new number.

![](../images/2022/1647583366224-577408b4-ead2-497e-abfc-5ec21a1a831b.gif)

Additionally, when you directly drag to modify the sorting position of questions in the **question preview area**, the platform will automatically update the question numbers.

![](../images/2022/1647583366304-31c81230-b8d5-449e-b1ca-8cd99b27f419.gif)

 ##### Edit Question Text
_**Question or Title**_: You can modify the **question text** of each question in [*Question or Title]. Question text editing supports rich text format.

![](../images/2022/1647583366394-9c4891b1-a91e-41a4-8649-b8f305cc069a.gif)

##### Edit Options
_**Options and Scores**_: You can add question options in [*Options and Scores].

![](../images/2022/1647583366483-230d13c9-ccd7-4c51-a6b8-64f2514159ed.gif)

You can use the [Batch Add] function to add multiple options at once.

![](../images/2022/1647583366644-666c4fa1-8982-4357-9fbf-887cfdd47ab3.png)

![](../images/2022/1647583362060-8b85c2e1-bb4d-4ab0-9d2f-260279085466.png)

![](../images/2022/1647583366774-190ab2dc-5272-4136-927c-231172990d8e.png)

Click [Add Option] to add new options.

![](../images/2022/1647583366870-d19d373a-b9c5-4d81-a2b3-db9c07c1f9cf.gif)

You can also edit the specific content of options through the [Operations] function. The [Operations] function provides a **rich text editor** for formatting option content.

![](../images/2022/1647583366953-ddad79e1-c0c9-4ca0-b048-a623a81fd09b.png)

##### Wrong Answer Verification
You can set up [Wrong Answer Verification] for questions: Click [Wrong Answer Verification] in the **operations** column of the question **options** to set the current option as a _**wrong answer verification option**_.

![](../images/2022/1647583367044-2fc6c73d-155e-460f-9f34-0d461ddff0b4.png)

It's important to note that the [Wrong Answer Verification] function operates on question **options**, which means you can only set wrong answer verification for (_**one or more options**_) of the question. For example, if we set wrong answer verification for option A, it means that if the test taker selects option A when answering this question, it indicates they answered incorrectly, and their wrong answer count will +1.

![](../images/2022/1647583367120-3ac6ed6e-4d29-431c-860c-1d8d458f27b9.gif)

> 【Tips】NaoDao currently only supports wrong answer verification for **<u>single-choice questions</u>**, **<u>dropdown single-choice</u>** and **<u>matrix single-choice questions</u>**.
>

##### Display Logic
_**Show this Question**_: You can set the question's **display logic** through [*Show this Question].

![](../images/2022/1647583367224-a895be2c-1103-4b0e-b380-e6e18bf35e72.png)

**Show this Question** means displaying this question when certain conditions are met. Therefore, to set **display logic** for a question, there must be **at least one question** before it.

As shown below, if you want to set display logic for Question 3, you can choose to make judgments based on Questions 1 and 2. Specifically, you can choose to make judgments based on a particular option of a specific question.

> 【Tips】Text and image explanation questions currently do not support display logic settings. This feature is under development, stay tuned!
>

![](../images/2022/1647583367313-23bc2c1c-4de7-4b76-807b-6c484c15f220.png)

![](../images/2022/1647583362060-8b85c2e1-bb4d-4ab0-9d2f-260279085466.png)

![](../images/2022/1647583367399-2bcb5d93-117c-4e70-9b1c-a4309496b053.png)

![](../images/2022/1647583362060-8b85c2e1-bb4d-4ab0-9d2f-260279085466.png)

![](../images/2022/1647583367475-7391976f-4b76-4760-864b-12cf0d3cc084.png)

***Selected*** means Question 3 will only be displayed when the test taker selects specific options of specific questions *(in this example, Option 1)*. 
![](../images/2022/1647583367579-cc504b99-297f-43da-97e3-56c396c30e41.gif)

***Not Selected*** means Question 3 will only be displayed when the test taker has not selected specific options *(in this example, selecting Option 1 won't display Question 3, but selecting Option 2 will display Question 3)*.
![](../images/2022/1647583367662-e3204209-cbe8-4863-9bf5-633a210c5fc0.gif)

In addition to the above single judgment conditions, Naodao also allows you to set **multiple condition joint judgments**. You can click the "+" button in the [Display Logic] popup to add judgment conditions.

![](../images/2022/1647583367741-ac6ec3e2-2be1-4fff-9fd5-229f6aacd972.png)

![](../images/2022/1647583362060-8b85c2e1-bb4d-4ab0-9d2f-260279085466.png)

![](../images/2022/1647583367824-4e3a5ca3-d2ff-48ae-abaf-45a21082a785.gif)

##### Skip Logic
_**Skip to**_: You can set the question's **skip logic** through [*Skip to].

![](../images/2022/1647583367923-46f5543a-66cf-4f38-904a-2e99e7cd82eb.png)

**Skip to** means jumping to specific questions when certain conditions are met. Currently, Naodao only supports **forward skipping**, meaning you can only skip from previous questions to later questions, not from later questions to previous ones. Therefore, to set **skip logic** for a question, there must be other questions after it.

Additionally, note that **skip logic only works when the target question and the skip source question are on different pages**. This means if you want test takers to skip directly to Question 3 after selecting Option 1 of Question 1, Question 1 and Question 3 must not be on the same page.

![](../images/2022/1647583368009-2914d6d8-20ee-486e-858e-d7e5bb024c14.png)![](../images/2022/1647583368095-3f6fe351-fe4a-4863-97cf-a6428713078d.png)

![](../images/2022/1647583362060-8b85c2e1-bb4d-4ab0-9d2f-260279085466.png)

As shown below, Question 1 can skip to Questions 2 and 3, Question 2 can skip to Question 3, while Question 3 cannot set **skip logic** because it's the last question. When you set Question 1's **skip logic** to skip to Question 3, Question 2 will be automatically skipped.

![](../images/2022/1647583368233-18b0a4ec-dc02-482d-a67c-569bd5680b29.png)

For example, when setting **skip logic** for Question 1, we can choose to make judgments based on one of its options.

![](../images/2022/1647583368315-17db0c58-7a9a-4b4e-b7d1-da6acb62dca0.png)

![](../images/2022/1647583362060-8b85c2e1-bb4d-4ab0-9d2f-260279085466.png)

![](../images/2022/1647583368402-2b00320a-e3eb-4f4c-b6d0-dbab426c11a2.png)**Selected** means it will only skip to the target question when the test taker selects specific options of specific questions *(in this example, Option 1 leads to Question 3)*.
![](../images/2022/1647583368482-fa8ab4ce-230d-4ecb-b693-6d973ac55d4c.gif)

**Not Selected** means it will only skip to the target question when the test taker has not selected specific options *(in this example, selecting Option 1 won't skip to Question 3, but selecting Option 2 will skip to Question 3)*.
![](../images/2022/1647583368568-7e335ab6-da07-4663-b57d-f411392affeb.gif)

**Naodao currently only supports single condition skip logic and does not support multiple condition joint skip logic.**

##### Insert New Question
In addition to dragging questions from the [Question Type Selection] panel on the left into the **question preview area**, you can also add new questions through the [Insert New Question] button at the bottom right of each question in the **question preview area**. By default, the canvas will insert the new question after the current question.

![](../images/2022/1647583368654-5800da7e-8740-4ead-a0a3-4ff651641b31.png)

##### Change Question Type
You can change the type of the current question using the [Change Question Type] button at the bottom right of the question.

![](../images/2022/1647583368758-736f3c3d-c226-4302-b5ea-b729fcad83ad.png)

##### Batch Add
If you want to add multiple questions at once, you can batch import questions using the [Batch Add] button in the upper right corner of the page.

![](../images/2022/1647583368837-b8e5852e-ba38-48f6-a975-0ab1d07544a7.png)

Naodao currently only supports batch importing questions from txt text files. You can click the **?** button to view the text formatting requirements for different types of questions.

![](../images/2022/1647583368919-6ae9b73a-3e9c-4996-8b08-374ca6013987.png)

You can copy and paste the formatted txt file into the **text content input box**, or import the txt file using the [Upload from File] button.

![](../images/2022/1647583369007-b4ca9c70-7c7b-4778-9801-d93f509ccdc8.gif)


