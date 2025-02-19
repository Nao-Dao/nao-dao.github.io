import{_ as e,c as o,a0 as a,G as n,w as r,B as p,o as s,a as l}from"./chunks/framework.CMtr6uOw.js";const c="/assets/1653822001584-1ac70324-679f-4f3f-9e8b-9fb139fcd551.BcjcBEIy.png",d="/assets/1653822041314-00d0475f-6d88-47f5-ab11-fd7351ca5e7e.cbIEBvVy.png",h="/assets/1653822066903-bcd22b03-ae0b-486a-94cd-898f8dbff5d8.0X5mgUm_.png",g="/assets/1653822125113-f7662c2c-2aaf-41fb-9f72-62ce0e0e7380.CVmNlhIi.png",u="/assets/1656088323851-133ba7dc-49aa-483c-be2a-4d6750d9ef92.8FF-gwJG.png",q=JSON.parse('{"title":"Participant Pool","description":"","frontmatter":{},"headers":[],"relativePath":"en/2-researcher-manual/2-participants.md","filePath":"en/2-researcher-manual/2-participants.md"}'),m={name:"en/2-researcher-manual/2-participants.md"};function b(f,t,x,P,w,y){const i=p("font");return s(),o("div",null,[t[1]||(t[1]=a('<h1 id="participant-pool" tabindex="-1">Participant Pool <a class="header-anchor" href="#participant-pool" aria-label="Permalink to &quot;Participant Pool &lt;!-- {docsify-ignore-all} --&gt;&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Participant pools can only be used in projects published on the Naodao platform</p></div><p>A participant pool is a means to control who can access published [projects]. Using participant pools, researchers can selectively publish projects to specific participants.</p><p>Simply put, a participant pool is a subset of registered participants on Naodao. When publishing a project, researchers can select created participant pools to publish projects to specific participant groups. Participants cannot see/answer projects they are not designated for.</p><p>Participant pools can contain fixed groups (static pools) or all participants meeting certain criteria (dynamic pools). Flexible use of participant pools enables features like participant tracking within the Naodao platform.</p><p><img src="'+c+'" alt=""></p><h2 id="adding-new-participant-pools" tabindex="-1">Adding New Participant Pools <a class="header-anchor" href="#adding-new-participant-pools" aria-label="Permalink to &quot;Adding New Participant Pools&quot;">​</a></h2><p>Researchers can add participant pools in 3 ways:</p><ul><li>Platform Pool</li></ul><p>A participant pool obtained by setting filtering conditions (demographic information). The data used for filtering participants comes from participants&#39; personal center - basic information.</p><p>This type of pool is a <strong>dynamic pool</strong> - all platform participants meeting the filtering criteria are included. Newly registered participants meeting the criteria will be added, while participants who modify their personal information and no longer meet criteria will be removed.</p><p><img src="'+d+'" alt=""></p><ul><li>Project Pool</li></ul><p>Static participant pools containing fixed participants can be created by importing participants from: 1. Past completed projects&#39; participants 2. Participant ID lists</p><p>Importing via participant IDs requires an Excel file (xlsx) with &quot;USERID&quot; as the header (see example below, note case sensitivity). Participant IDs can be obtained by:</p><ul><li>Exporting from project (participant) pools</li><li>Downloading data from past projects</li><li>Having participants copy and report their IDs to researchers from their personal centers</li></ul><table tabindex="0"><thead><tr><th><strong>USERID</strong></th></tr></thead><tbody><tr><td>xxxxxxxxxxxxxxxxxx</td></tr><tr><td>xxxxxxxxxxxxxxxxxx</td></tr></tbody></table><ul><li>Computation Pool</li></ul><p>Generate a new participant pool by performing set operations (intersection, union, complement) on 2 <strong>static pools</strong>.</p><p><img src="'+h+'" alt=""></p><h2 id="selecting-participant-pools-when-publishing" tabindex="-1">Selecting Participant Pools When Publishing <a class="header-anchor" href="#selecting-participant-pools-when-publishing" aria-label="Permalink to &quot;Selecting Participant Pools When Publishing&quot;">​</a></h2><p>When the project&#39;s publication channel is &quot;Naodao Platform&quot;, participant pools can be used to <strong>specify publication targets</strong> in the target settings. After selecting a participant pool, you can <strong>include</strong> or <strong>exclude</strong> that pool (from all platform participants). This allows defining specific participant ranges.</p>',22)),n(i,{style:{color:"rgb(38, 38, 38)"}},{default:r(()=>t[0]||(t[0]=[l("Users not selected cannot see the project on their homepage and cannot answer it (even with the link).")])),_:1}),t[2]||(t[2]=a('<blockquote><p>About the relationship between publication numbers and participant pools</p><p>There are no strict requirements between publication numbers and participant pool size, but typically <strong>the participant pool size should ≥ publication numbers</strong>. If the pool size is insufficient, the project cannot be filled and can only be manually cancelled by the researcher. Project publication fees are calculated as ![equation].</p></blockquote><p><img src="'+g+'" alt=""><img src="'+u+'" alt=""></p><h2 id="managing-participant-pools" tabindex="-1">Managing Participant Pools <a class="header-anchor" href="#managing-participant-pools" aria-label="Permalink to &quot;Managing Participant Pools&quot;">​</a></h2><p>Participant pools can be modified and deleted in the participant pool list. However, pools associated with currently published projects cannot be modified or deleted.</p><h2 id="other-tutorials" tabindex="-1">Other Tutorials <a class="header-anchor" href="#other-tutorials" aria-label="Permalink to &quot;Other Tutorials&quot;">​</a></h2><p><a href="https://mp.weixin.qq.com/s/m5qv1BBj4wmgN8kBGxi_bg" target="_blank" rel="noreferrer">Naodao Participant Pools—A Magic Tool for Ensuring Participant Quality and Quantity!</a></p><p><a href="https://www.bilibili.com/video/BV1g14y147ZT?p=14" target="_blank" rel="noreferrer">Participant Pools_Bilibili</a></p>',7))])}const j=e(m,[["render",b]]);export{q as __pageData,j as default};
