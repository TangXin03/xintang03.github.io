// 中英文资料分别填写。留空的可选栏目会自动隐藏。
window.profile = {
  defaultLanguage: "zh",
  sampleMode: false,
  name: { en: "Xin Tang", zh: "唐鑫" },
  position: { en: "Master’s Student", zh: "硕士研究生" },
  institution: { en: "Shanxi University", zh: "山西大学" },
  photo: "",
  email: "",
  scholar: "",
  github: "",
  cv: "",
  bio: {
    en: ["I am a master’s student in Computer Technology at Shanxi University. My research interests include evolutionary computation, multimodal machine learning, and signal processing."],
    zh: ["我是山西大学计算机技术专业的硕士研究生，研究方向包括进化计算、多模态机器学习和信号处理。"],
  },
  advisor: {
    name: { en: "Dr. Xinyan Liang", zh: "梁新彦老师" },
    url: "https://xinyanliang.github.io/",
  },
  education: {
    en: [
      "2025–2028 · Master’s studies in Computer Technology, Shanxi University",
      "2021–2025 · Undergraduate studies in Data Science and Big Data Technology, Shanxi University",
    ],
    zh: [
      "2025–2028 · 山西大学，计算机技术（硕士）",
      "2021–2025 · 山西大学，数据科学与大数据技术（本科）",
    ],
  },
  // 动态使用 YYYY-MM-DD，页面按日期从新到旧排列。
  news: [],
  research: [
    { title: { en: "Evolutionary Computation", zh: "进化计算" } },
    { title: { en: "Multimodal Machine Learning", zh: "多模态机器学习" } },
    { title: { en: "Signal Processing", zh: "信号处理" } },
  ],
  publications: [
    {
      year: 2026,
      title: "EvoAMC: Evolutionary Fusion with Knowledge Learning for Automatic Modulation Classification",
      authors: "Xinyan Liang, Xin Tang, Dongning Li, Yuhua Qian, Jinpeng Yuan, Ke Tang, Linjie Zhang, Yaohui Zheng",
      venue: "IEEE Transactions on Evolutionary Computation (TEVC)",
      url: "https://doi.org/10.1109/TEVC.2026.3745119",
      code: "https://github.com/TangXin03/EvoAMC",
    },
  ],
  publicationStatus: {
    en: "One additional manuscript is currently under submission to IEEE Transactions on Evolutionary Computation (TEVC).",
    zh: "另有一篇稿件正在向 IEEE Transactions on Evolutionary Computation（TEVC）投稿。",
  },
};
