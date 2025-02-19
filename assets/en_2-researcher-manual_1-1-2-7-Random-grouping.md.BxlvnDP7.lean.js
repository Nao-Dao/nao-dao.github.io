import{_ as s,c as p,a0 as a,j as n,a as t,G as r,w as i,B as l,o as d}from"./chunks/framework.CMtr6uOw.js";const u="/assets/1649171979920-66857450-f3d0-4b42-a7de-16f2ebf09b7a.DNxQoYci.png",m="/assets/1649171542364-d163abdd-9884-4492-88ef-af2eae09dbe9.BBpWPg41.png",g="/assets/1649171708153-d76b11ca-3bef-465a-9efb-d43857caa434.D8Gh_DY2.png",c="/assets/1647583370304-279af99c-60f3-4846-be1a-d0d1fa76507d.BdL_N5i4.png",_=JSON.parse('{"title":"Random Grouping","description":"","frontmatter":{},"headers":[],"relativePath":"en/2-researcher-manual/1-1-2-7-Random-grouping.md","filePath":"en/2-researcher-manual/1-1-2-7-Random-grouping.md"}'),h={name:"en/2-researcher-manual/1-1-2-7-Random-grouping.md"};function f(b,e,w,v,R,x){const o=l("font");return d(),p("div",null,[e[6]||(e[6]=a('<h1 id="random-grouping" tabindex="-1">Random Grouping <a class="header-anchor" href="#random-grouping" aria-label="Permalink to &quot;Random Grouping &lt;!-- {docsify-ignore-all} --&gt;&quot;">​</a></h1><p>Random grouping nodes can determine the number of project participants and establish multiple branches in the project workflow based on this number. Random grouping randomly assigns participants to different branches, which is suitable for situations such as random assignment of between-subjects factors.</p><p>As shown in the example below, the initial random grouping node obtains the number of participants set for the project and uses it as the basis for grouping. Subsequent random nodes on each branch will obtain the number of participants for that specific branch. <img src="'+u+'" alt=""></p><blockquote><p>Note: Branches created after grouping cannot be merged, meaning the entire project must maintain a tree structure</p></blockquote><p>The configuration interfaces for two consecutive random grouping nodes are shown below (double-click to enter):</p><p><img src="'+m+'" alt=""><img src="'+g+'" alt=""></p><p>Random grouping is based on the set number of participants, which leads to certain limitations:</p>',7)),n("ul",null,[n("li",null,[e[1]||(e[1]=t("Random grouping nodes must have upstream nodes with determined participant numbers, therefore ")),n("strong",null,[r(o,{style:{color:"#FA8C16"}},{default:i(()=>e[0]||(e[0]=[t("random grouping cannot appear downstream of behavioral grouping")])),_:1})])]),e[5]||(e[5]=n("li",null,"If the number of participants is changed, all random grouping settings on the canvas become invalid and require regrouping and reconnecting",-1)),n("li",null,[e[3]||(e[3]=t("When random grouping exists on the canvas, the number of participants cannot be changed on the ")),n("strong",null,[r(o,{style:{color:"#FA8C16"}},{default:i(()=>e[2]||(e[2]=[t("publishing page")])),_:1})]),e[4]||(e[4]=t(". To modify the number, you must return to canvas editing"))])]),e[7]||(e[7]=a('<p>The <strong>Random Grouping</strong> node implements <strong>dynamic random grouping</strong> rather than traditional fixed-probability random assignment.</p><p>Different from traditional random grouping:</p><ul><li>Each group can collect the specified number of participants, avoiding situations where one group has 30 people while another has 60</li><li>During actual data collection, participants are distributed more evenly</li><li>Compared to traditional random grouping methods, dynamic random grouping is less likely to result in consecutive assignments to the same group followed by consecutive assignments to another group</li></ul><p><strong>Random Grouping Example</strong>:</p><p><img src="'+c+'" alt=""></p><h2 id="other-tutorials" tabindex="-1">Other Tutorials <a class="header-anchor" href="#other-tutorials" aria-label="Permalink to &quot;Other Tutorials&quot;">​</a></h2><p><a href="https://mp.weixin.qq.com/s/fO6pV3J8PagHAA2hxa92HA" target="_blank" rel="noreferrer">Easy Random Grouping Implementation</a></p><p><a href="https://www.bilibili.com/video/BV1g14y147ZT?p=9" target="_blank" rel="noreferrer">Random Grouping_Bilibili_bilibili</a></p>',8))])}const k=s(h,[["render",f]]);export{_ as __pageData,k as default};
