import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "脑岛手册",
  description: "脑岛平台使用手册",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '常见问题', link: '/1-FAQ' },
      { text: '研究者手册', link: '/2-researcher-manual' },
      { text: '用户手册', link: '/3-user-manual' },
      { text: '简单云手册', link: '/6-simple-cloud' },
      { text: '开发日志', link: '/4-develop' },
    ],

    sidebar: {
      "1-FAQ": [
        {
          text: '常见问题',
          link: "/1-FAQ",
          items: [
            { text: '在线研究速答', link: '/1-FAQ/1_normal' },
            { text: '费用与报销', link: '/1-FAQ/2_expenses' },
            { text: '项目、画布和节点', link: '/1-FAQ/3_project' },
            { text: '项目发布和数据收集', link: '/1-FAQ/4_data' },
            { text: '项目作答常见问题', link: '/1-FAQ/5_user' },
          ]
        }
      ],
      "2-researcher-manual": [
        {
          text: "研究者须知",
          link: "/2-researcher-manual/0-must-read"
        },
        {
          text: "项目",
          link: "/2-researcher-manual/1-project.md",
          items: [
            {
              text: "从零开始创建项目",
              link: "/2-researcher-manual/1-1-start-from-0",
              items: [
                {
                  text: "新建项目",
                  link: "/2-researcher-manual/1-1-1-create-project"
                },
                {
                  text: "画布和节点",
                  link: "/2-researcher-manual/1-1-2-Canvas-and-nodes",
                  items: [
                    { text: "问卷节点", link: "/2-researcher-manual/1-1-2-1-questionnaire" },
                    { text: "个人信息节点", link: "/2-researcher-manual/1-1-2-2-personal-info" },
                    { text: "测试环境", link: "/2-researcher-manual/1-1-2-3-env" },
                    { text: "简单云", link: "/2-researcher-manual/1-1-2-4-simple-cloud" },
                    { text: "PsychoPy实验", link: "/2-researcher-manual/1-1-2-5-psychopy" },
                    { text: "jsPsych实验", link: "/2-researcher-manual/1-1-2-6-jspsych" },
                    { text: "随机分组", link: "/2-researcher-manual/1-1-2-7-Random-grouping" },
                    { text: "行为分组", link: "/2-researcher-manual/1-1-2-8-behavior-grouping" },
                    { text: "结束", link: "/2-researcher-manual/1-1-2-9-end" },
                    { text: "资源库", link: "/2-researcher-manual/1-1-2-10-resource" },
                  ]
                },
                {
                  text: "测试和发布",
                  link: "/2-researcher-manual/1-1-5-test-project",
                  items: [
                    { text: "发布项目", link: "/2-researcher-manual/1-1-6-publish-project" }
                  ]
                },
                {
                  text: "分享项目",
                  link: "/2-researcher-manual/1-1-4-share-project"
                }
              ]
            },
            {
              text: "项目发布管理",
              link: "/2-researcher-manual/1-2-release-manage-projects"
            },
            {
              text: "项目管理",
              link: "/2-researcher-manual/1-3-manage-projects"
            },
            {
              text: "项目数据管理",
              link: "/2-researcher-manual/1-4-data-manage-projects"
            }
          ]
        },
        {
          text: "被试库",
          link: "/2-researcher-manual/2-participants"
        },
        {
          text: "资源库",
          link: "/2-researcher-manual/3-resource"
        },
        {
          text: "个人中心",
          link: "/2-researcher-manual/4-personal",
          items: [
            { text: "充值与报销", link: "/2-researcher-manual/4-1-recharge" }
          ]
        },
        {
          text: "进阶技巧",
          link: "/2-researcher-manual/5-advance",
        }
      ],
      "3-user-manual": [
        {
          text: "个人中心",
          link: "/3-user-manual/1-personal",
          items: [
            { text: "注册与登录", link: "/3-user-manual/1-1-login_register" }
          ]
        },
        {
          text: "必读",
          link: "/3-user-manual/2-required"
        }
      ],
      "6-simple-cloud": [
        {
          text: "基本功能",
          link: "/6-simple-cloud/1-basic"
        },
        {
          text: "导出数据",
          link: "/6-simple-cloud/2-data-output"
        },
        {
          text: "案例展示",
          link: "/6-simple-cloud/3-case"
        }
      ],
      "4-develop": [
        {
          text: "开发日志",
          link: "/4-develop"
        },
        {
          text: "版权声明",
          link: "/4-develop/2-copyright"
        },
        {
          text: "问题反馈",
          link: "/4-develop/3-feedback"
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nao-dao' }
    ]
  },
  locales: {
    root: {
      label: "中文",
      lang: "zh-cn"
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
      title: "NaoDao Manual",
      description: "Naodao Platform User Manual",
      themeConfig: {
        nav: [
          { text: 'FAQ', link: '/en/1-FAQ' },
          { text: 'Research Manual', link: '/en/2-researcher-manual' },
          { text: 'User Manual', link: '/en/3-user-manual' },
          { text: 'Simple Cloud Manual', link: '/en/6-simple-cloud' },
          { text: 'Development', link: '/en/4-develop' },
        ],
        sidebar: {
          "/en/1-FAQ": [
            {
              text: 'FAQ',
              link: "/en/1-FAQ",
              items: [
                { text: 'Online Research Quick Answers', link: '/en/1-FAQ/1_normal' },
                { text: 'Expenses and Reimbursement', link: '/en/1-FAQ/2_expenses' },
                { text: 'Projects, Canvas, and Nodes', link: '/en/1-FAQ/3_project' },
                { text: 'Project Publishing and Data Collection', link: '/en/1-FAQ/4_data' },
                { text: 'Common Questions About Project Responses', link: '/en/1-FAQ/5_user' },
              ]
            }
          ],
          "/en/2-researcher-manual": [
            {
              text: "Researcher Guidelines",
              link: "/en/2-researcher-manual/0-must-read"
            },
            {
              text: "Projects",
              link: "/en/2-researcher-manual/1-project.md",
              items: [
                {
                  text: "Creating a Project from Scratch",
                  link: "/en/2-researcher-manual/1-1-start-from-0",
                  items: [
                    {
                      text: "Creating a New Project",
                      link: "/en/2-researcher-manual/1-1-1-create-project"
                    },
                    {
                      text: "Canvas and Nodes",
                      link: "/en/2-researcher-manual/1-1-2-Canvas-and-nodes",
                      items: [
                        { text: "Questionnaire Node", link: "/en/2-researcher-manual/1-1-2-1-questionnaire" },
                        { text: "Personal Information Node", link: "/en/2-researcher-manual/1-1-2-2-personal-info" },
                        { text: "Testing Environment", link: "/en/2-researcher-manual/1-1-2-3-env" },
                        { text: "Simple Cloud", link: "/en/2-researcher-manual/1-1-2-4-simple-cloud" },
                        { text: "PsychoPy Experiments", link: "/en/2-researcher-manual/1-1-2-5-psychopy" },
                        { text: "jsPsych Experiments", link: "/en/2-researcher-manual/1-1-2-6-jspsych" },
                        { text: "Random Grouping", link: "/en/2-researcher-manual/1-1-2-7-Random-grouping" },
                        { text: "Behavior Grouping", link: "/en/2-researcher-manual/1-1-2-8-behavior-grouping" },
                        { text: "End", link: "/en/2-researcher-manual/1-1-2-9-end" },
                        { text: "Resource Library", link: "/en/2-researcher-manual/1-1-2-10-resource" },
                      ]
                    },
                    {
                      text: "Testing and Publishing",
                      link: "/en/2-researcher-manual/1-1-5-test-project",
                      items: [
                        { text: "Publishing a Project", link: "/en/2-researcher-manual/1-1-6-publish-project" }
                      ]
                    },
                    {
                      text: "Sharing Projects",
                      link: "/en/2-researcher-manual/1-1-4-share-project"
                    }
                  ]
                },
                {
                  text: "Project Release Management",
                  link: "/en/2-researcher-manual/1-2-release-manage-projects"
                },
                {
                  text: "Project Management",
                  link: "/en/2-researcher-manual/1-3-manage-projects"
                },
                {
                  text: "Project Data Management",
                  link: "/en/2-researcher-manual/1-4-data-manage-projects"
                }
              ]
            },
            {
              text: "Participant Pool",
              link: "/en/2-researcher-manual/2-participants"
            },
            {
              text: "Resource Library",
              link: "/en/2-researcher-manual/3-resource"
            },
            {
              text: "Personal Center",
              link: "/en/2-researcher-manual/4-personal",
              items: [
                { text: "Recharge and Reimbursement", link: "/en/2-researcher-manual/4-1-recharge" }
              ]
            }
          ],
          "/en/3-user-manual": [
            {
              text: "Personal Center",
              link: "/en/3-user-manual/1-personal",
              items: [
                { text: "Registration and Login", link: "/en/3-user-manual/1-1-login_register" }
              ]
            },
            {
              text: "Required Reading",
              link: "/en/3-user-manual/2-required"
            }
          ],
          "/en/6-simple-cloud": [
            {
              text: "Basic Functions",
              link: "/en/6-simple-cloud/1-basic"
            },
            {
              text: "Export Data",
              link: "/en/6-simple-cloud/2-data-output"
            },
            {
              text: "Case Studies",
              link: "/en/6-simple-cloud/3-case"
            }
          ],
          "/en/4-develop": [
            {
              text: "Development Log",
              link: "/en/4-develop"
            },
            {
              text: "Copyright Statement",
              link: "/en/4-develop/2-copyright"
            },
            {
              text: "Feedback",
              link: "/en/4-develop/3-feedback"
            }
          ]
        },
      }
    }
  }
})
