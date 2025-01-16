# Project Publishing and Data Collection

## Q: What are the functions of different options when publishing a project?
A: Please refer to [Publishing Projects](/2-researcher-manual/1-1-6-publish-project.md). Key aspects that need careful attention include **publication channel**, **project participant count**, **time limit for participant responses**, and **whether repeat responses are allowed**.

## Q: How do I cancel a published project?
A: Click "Publication Management" next to the "Create Project" button to cancel and view publications.
![](imgs/2024-12-03-09-54-01.png)

## Q: Why can't I modify or republish a project after cancellation?
A: Modifying and republishing would cause confusion in data and orders, so we prohibit this operation. You can use the project copy feature instead.

## Q: Why does data download during experiment preview, but not when participants complete the published experiment?
A: Preview data downloads are for researchers to check data structure for debugging and analysis purposes. After publication, participant response data is uploaded to Naodao servers, and participants cannot access their data. Researchers can view data by clicking the project's "Download Data" button.

## Q: Can I get participant data immediately after they complete their responses?
A: Data access methods vary by publication channel:
- For "Platform Published" projects, researchers can review participant responses and have the right to reject them. Only approved participants receive payment and occupy project slots, and researchers only get data from these participants;
- For "Anonymous Published" projects, all responses occupy slots, and researchers download all response data.

## Q: What is the mechanism for reviewing response data?
A: Reviews can be manual or system-based. If researchers haven't manually reviewed within **72 hours** after data submission, system automatic review is triggered.

## Q: What are the standards for manual and system reviews?
A: Both manual and system reviews currently rely on the number of verification check question errors. See [Related Settings](/2-researcher-manual/1-1-6-publish-project.md#验证错题数) in publication settings. We will add more dimensions for manual review in the future.

## Q: What should I do if a participant appeals?
A: The appeal mechanism protects participants. They have one appeal opportunity for "Abandoned" or "Rejected" responses. Researchers and participants can communicate via dialogue box.
- Researchers should first clarify the participant's response status and understand issues during participation;
- After ensuring mutual communication, researchers can reject or approve the appeal. Approval requires payment, with amount negotiated between both parties.

Researchers should have sufficient reasons for rejecting data and appeals. Platform may mediate if appeal communication fails.

## Q: When does a participant's response status show as "In Progress"?
A: "In Progress" status can occur when:
- Participant is currently responding;
- Participant exits mid-response without final submission.

Unintentional exits can be remedied through checkpoint resume mechanism.

## Q: When does a participant's response status show as "Abandoned"?
A: "Abandoned" status can occur when:
- Participant actively clicks "Abandon This Response" button;
- Response time exceeds set limit (configured during project publication). Timeout doesn't necessarily mean active participation - participants (without triggering checkpoint resume) in "In Progress" status exceeding time limit or checkpoint resume 12-hour limit will show as "Abandoned".

## Q: Why is downloaded data incomplete/undownloadable/empty after participant responses?
A: Most commonly because some participants haven't completed responses or left the project flow, remaining in "In Progress" or "Abandoned" status, so their data wasn't collected.

## Q: Why do collected data amount and participant count differ?
A: First confirm which participant count you're referring to. Project page participation count may include participants without data and rejected participants, so total participation always exceeds valid responses (approved reviews). Downloaded data only includes valid responses.

## Q: What is the data download format?
A: Platform data is uniformly stored in CSV format. Downloading all data provides a compressed package.
- All questionnaire-type data is stored in one CSV table;
- Experiment-type data is stored in folders, with each participant's experimental data in separate files, prefixed with node names for distinction.

Additionally, the package includes a `BasicInformation` folder storing all participant response information.

## Q: Why does experimental data differ from expectations?
A: For experimental types, the platform only saves received data files. File generation is independent of the platform - please verify experimental program file issues.

## Q: Why do many -888, -999 appear in questionnaire data?
A: `-999` indicates participant didn't answer the question. `-888` indicates unanswered sub-questions in a block or unselected options in multiple-choice questions (hence many `-888` in matrix multiple-choice). For multiple questionnaire nodes shown together, unanswered node data shows as `-999`.

## Q: Can data show which branch participants entered?
A: This feature is under development.

## Q: Does screen width around 400 indicate mobile users?
A: Screen width shows logical pixel value after scaling. Very small values usually indicate mobile users, verified through aspect ratio.

## Q: Why have some projects disappeared from the project page?
A: Completed or cancelled projects automatically enter recycle bin one month after termination. Recycle bin projects can be manually restored to project list; if not restored within one month of entering recycle bin, they're cleared. Researchers should monitor data status and save locally promptly.
