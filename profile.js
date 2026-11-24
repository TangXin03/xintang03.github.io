// 将示例替换成你的资料。中英文可以分别填写，也可以只保留其中一种。
window.profile = {
  defaultLanguage: "en",
  sampleMode: true,
  name: { en: "Your Name", zh: "你的姓名" },
  position: { en: "Your position", zh: "你的身份或职务" },
  institution: { en: "Your institution", zh: "你的学校或机构" },
  photo: "",
  // 联系链接可留空。简历也可以指向站内文件，例如 "assets/cv.pdf"。
  email: "",
  scholar: "",
  github: "",
  cv: "",
  bio: {
    en: ["I’m a [position] at [institution]. My research interests include [research area] and [specific topics]."],
    zh: ["我目前在［学校或机构］担任［身份或职务］，研究方向包括［研究领域］和［具体主题］。"],
  },
  // 动态使用 YYYY-MM-DD，页面会自动按日期从新到旧排列。
  news: [
    {
      date: "2026-06-18",
      title: { en: "Paper accepted at [conference or journal].", zh: "论文获［会议或期刊］接收。" },
      detail: { en: "", zh: "" },
      url: "",
    },
    {
      date: "2026-04-07",
      title: { en: "Started a new project on [research topic].", zh: "启动了一个关于［研究主题］的新项目。" },
      detail: { en: "", zh: "" },
      url: "",
    },
    {
      date: "2026-02-24",
      title: { en: "Gave a talk on [topic] at [event].", zh: "在［活动］上作了关于［主题］的报告。" },
      detail: { en: "", zh: "" },
      url: "",
    },
  ],
  research: [
    {
      title: { en: "Research methods", zh: "研究方法" },
      detail: { en: "The theories, methods, or tools you work with.", zh: "介绍你的工作涉及的理论、方法或工具。" },
    },
    {
      title: { en: "Applications", zh: "应用方向" },
      detail: { en: "The problems or settings where you apply your research.", zh: "说明你的研究适用于哪些问题或实际场景。" },
    },
    {
      title: { en: "Open questions", zh: "开放问题" },
      detail: { en: "The questions you’re exploring and where they might lead.", zh: "介绍你正在探索的问题和未来感兴趣的方向。" },
    },
  ],
  // url 和 code 可以留空，也可以填写论文、DOI 或代码仓库的完整链接。
  publications: [
    {
      year: 2026,
      title: { en: "A Study of [Research Topic]", zh: "关于［研究主题］的研究" },
      authors: { en: "Your Name, Coauthor Name", zh: "你的姓名，合作者姓名" },
      venue: { en: "Conference or Journal", zh: "会议或期刊名称" },
      url: "",
      code: "",
    },
    {
      year: 2025,
      title: { en: "An Approach to [Research Problem]", zh: "面向［研究问题］的一种方法" },
      authors: { en: "Coauthor Name, Your Name", zh: "合作者姓名，你的姓名" },
      venue: { en: "Conference or Journal", zh: "会议或期刊名称" },
      url: "",
      code: "",
    },
  ],
};
