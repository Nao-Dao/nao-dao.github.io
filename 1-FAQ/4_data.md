# 项目发布和数据收集

## Q: 发布项目中各个选项的作用是什么？  
  A: 请查阅[发布项目](/2-researcher-manual/1-1-6-publish-project.md)内容，需要重点关注、谨慎填写的内容包括**发布渠道**、**项目人数**、**被试答题时长限制**、**是否允许重复作答**。

## Q: 如何取消发布项目？  
  A: 点击「创建项目」按钮旁边的「发布管理」，可以在发布管理页取消和查看发布  
![](imgs/2024-12-03-09-54-01.png)

## Q: 为什么项目取消之后不能再修改、发布？  
  A: 修改后再发布会带来数据和订单上的混乱，因此我们禁止了这种操作。可以采用复制项目的方式

## Q: 为什么实验预览时会下载数据，发布之后，被试作答完成没有下载数据？  
  A: 预览后下载的数据是为了让研究者查看数据结构，以便进行调试、数据分析等操作。发布后被试作答产生的数据均会上传至脑岛服务器，被试无法拿到他们的数据。研究者可以点击项目的「下载数据」按钮查看数据情况。  

## Q：被试完成作答后我可以直接拿到他们的数据吗？
  A：根据发布渠道不同，获取被试数据的方式也有所不同
  - 「平台发布」的项目，被试作答后研究者可以进行审核，并有拒绝被试该次作答的权利。只有通过审核的被试才会拿到报酬、占据项目名额等，研究者也只会拿到这部分被试的数据；
  - 「匿名发布」的项目，任何作答都会占据名额，研究者会下载到所有作答的数据。

## Q：审核作答数据的机制是什么？
  A：审核可以分为手动审核和系统审核。数据提交后 **72 h** 后如果研究者还没有手动审核，则会触发系统自动审核。

## Q：手动审核与系统审核的标准是什么？
  A：手动审核与系统审核目前都是依靠验证检查题的错误数量做出判断，详情参照发布设置中的[相关设置](/2-researcher-manual/1-1-6-publish-project.md#验证错题数)。我们日后会为手动审核带来更多的判断维度。

## Q：遭到了被试的申诉该怎么办？
  A：申诉机制是为了保护被试提供的通道，被试有且仅有一次申诉机会，可以针对「已放弃」和「被拒绝」的作答进行申诉。申诉中研究者和被试可以通过对话框交流。
  - 研究者首先需要明确被试的作答状态，并询问清楚被试作答中出现的状况；
  - 在确保双方沟通成立之后，研究者可以选择驳回或通过申诉。通过申诉需要支付费用，费用的金额应该由双方协商。

  研究者在拒绝被试数据和拒绝被试申诉时都应该有足够理由，如果申诉沟通无法成立，平台有可能介入调解。

## Q: 什么情况下测试记录中被试的作答状态为「进行中」？  
  A: 被试作答状态为「进行中」可能的情况为：
  - 被试正在作答中；
  - 被试作答中途退出，未进行最后的提交。  

  被试因为意外退出作答的情况可以通过断点续答机制补救。 

## Q: 什么情况下测试记录中被试的作答状态为「放弃」？  
  A: 被试作答状态为「放弃」可能的情况为：
  - 被试在作答中主动点击「放弃本次作答」按钮；
  - 被试的作答时长超过了设置的时长限制（在发布项目时设置），即作答超时。作答超时不一定是被试真正在作答，被试（未触发断点续答）处于进行中的状态，持续时间超过时长限制，以及被试超过断点续答 12 h 的限制都会导致作答状态为「放弃」。

## Q: 项目有被试作答后之后为何下载的数据是不完整 / 无法下载 / 为空？  
  A: 最常见的原因在于有些被试可能还未完成作答或脱离了项目作答流程，处于「作答中」或「放弃」状态，因此没有真正收集到他们的数据。 

## Q: 为什么收集到的数据量和人数不一致？  
  A: 首先需要确认人数指的是哪里的人数，项目页面的参与人数中可能包括未产生数据的被试和被拒绝的被试，因此参与人数总是大于有效作答（即审核通过）的人数。下载到的数据均为有效作答的数据。 

## Q: 下载数据的形式是怎样的？  
  A: 平台的数据统一以 CSV 格式储存，选择下载所有数据会得到一个压缩包。
  - 项目中的所有问卷类型数据会储存在同一张 CSV 的表中；
  - 实验类型数据会以文件夹的形式储存，文件夹中每个被试的实验数据以独立文件储存，以节点名称作为文件名前缀用于区分。

  此外，压缩包中还包含一个 `BasicInformation` 文件夹，其中储存了所有被试的作答信息。

## Q: 实验数据似乎和预期的不一样？  
  A: 对于实验类型，平台只会保存接收到的数据文件，数据文件的产生与平台无关，请核实实验程序文件的问题。 

## Q: 问卷数据中出现很多 -888，-999 的字样。  
  A: `-999`表示被试没有作答该题。`-888` 表示一个块的子题没有回答或多选题的可选项没有选择（因此对于矩阵多选会有很多 `-888`）。由于多个问卷节点的数据显示在一起，没有被作答的节点数据也表示为 `-999`。 

## Q: 数据中能不能显示被试进入的分支？  
  A: 这项功能我们正在开发中。 

## Q: 屏幕宽度 400 左右时指手机用户么？  
  A: 屏幕宽度显示的是经过缩放后的逻辑像素值，该值特别小的通常是手机用户，可以通过宽高比进行判断。

## Q: 为什么项目页面有的项目消失了？  
  A: 已完成、已取消的项目将在终止后一个月以后自动加入回收站。回收站的项目可以手动恢复至项目列表中，若 进入回收站一个月未恢复，则会被清除。建议研究者注意数据情况，及时保存数据到本地。 
