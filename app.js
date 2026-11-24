"use strict";

const profile = window.profile;
const labels = {
  en: {
    pageTitle: "Academic Homepage", skip: "Skip to content", navigation: "Main navigation",
    profile: "Profile", home: "Home", news: "News", research: "Research", publications: "Publications",
    sample: "(Examples)", cv: "CV", paper: "Paper", code: "Code", otherLanguage: "中文",
  },
  zh: {
    pageTitle: "学术个人主页", skip: "跳到正文", navigation: "主导航",
    profile: "个人资料", home: "首页", news: "最新动态", research: "研究", publications: "论文",
    sample: "（示例）", cv: "个人简历", paper: "论文", code: "代码", otherLanguage: "English",
  },
};

const languageKey = "academic-homepage.language";
const sections = Array.from(document.querySelectorAll("[data-page]"));
const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const get = (id) => document.getElementById(id);
let language = profile.defaultLanguage === "zh" ? "zh" : "en";
let currentPage;

function localized(value) {
  if (typeof value === "string" || Array.isArray(value)) return value;
  return value?.[language] ?? value?.[language === "en" ? "zh" : "en"] ?? "";
}

function element(tag, content, className) {
  const node = document.createElement(tag);
  if (content) node.textContent = content;
  if (className) node.className = className;
  return node;
}

function webUrl(value) {
  if (!value) return "";
  try {
    const url = new URL(value, document.baseURI);
    if (["http:", "https:"].includes(url.protocol)) return value;
    if (location.protocol === "file:" && !/^[a-z][a-z\d+.-]*:/i.test(value) && url.protocol === "file:") return value;
  } catch {
    // An incomplete entry remains plain text until a valid link is supplied.
  }
  return "";
}

function link(label, href) {
  const anchor = element("a", label);
  anchor.href = href;
  return anchor;
}

function formatDate(date) {
  const timestamp = Date.parse(date);
  if (Number.isNaN(timestamp)) return date;
  return new Intl.DateTimeFormat(document.documentElement.lang, {
    day: "numeric", month: "short", year: "numeric", timeZone: "UTC",
  }).format(timestamp);
}

function renderNews(entries) {
  return [...entries].sort((a, b) => b.date.localeCompare(a.date)).map((entry) => {
    const row = element("li");
    const date = element("time", formatDate(entry.date), "news-date");
    const title = localized(entry.title);
    const detail = localized(entry.detail);
    const url = webUrl(entry.url);
    date.dateTime = entry.date;
    row.append(date, " — ", url ? link(title, url) : title);
    if (detail) row.append(" · ", detail);
    return row;
  });
}

function renderResearch(entries) {
  return entries.map((entry) => {
    const row = element("li");
    row.append(element("strong", localized(entry.title)));
    const detail = localized(entry.detail);
    if (detail) row.append(" — ", detail);
    return row;
  });
}

function renderPublications(entries, copy) {
  return [...entries].sort((a, b) => b.year - a.year).map((entry) => {
    const row = element("li");
    const links = element("div", "", "publication-links");
    const metadata = [localized(entry.authors), localized(entry.venue), entry.year].filter(Boolean).join(" · ");
    row.append(element("strong", localized(entry.title)));
    if (metadata) row.append(element("div", metadata, "entry-meta"));
    const paperUrl = webUrl(entry.url);
    const codeUrl = webUrl(entry.code);
    if (paperUrl) links.append(link(copy.paper, paperUrl));
    if (codeUrl) links.append(link(copy.code, codeUrl));
    if (links.childElementCount) row.append(links);
    return row;
  });
}

function renderProfile(copy) {
  const photo = get("photo");
  const photoUrl = webUrl(profile.photo);
  photo.hidden = !photoUrl;
  photo.alt = localized(profile.photoAlt);
  if (photoUrl && photo.getAttribute("src") !== photoUrl) photo.src = photoUrl;

  get("position").textContent = localized(profile.position);
  get("institution").textContent = localized(profile.institution);
  const email = profile.email?.trim();
  const links = [
    [email, email ? "mailto:" + encodeURI(email).replaceAll("?", "%3F").replaceAll("#", "%23") : ""],
    ["Google Scholar", webUrl(profile.scholar)],
    ["GitHub", webUrl(profile.github)],
    [copy.cv, webUrl(profile.cv)],
  ].filter(([, href]) => href).map(([label, href]) => link(label, href));
  if (!email && profile.sampleMode) links.unshift(element("span", "your-email@example.com"));
  get("profile-links").replaceChildren(...links);
}

function showPage(moveFocus = false) {
  const activeLink = navLinks.find((anchor) => !anchor.hidden && anchor.hash === location.hash) ?? navLinks[0];
  const page = activeLink.hash.slice(1);
  sections.forEach((section) => { section.hidden = section.id !== page; });
  navLinks.forEach((anchor) => {
    if (anchor === activeLink) anchor.setAttribute("aria-current", "page");
    else anchor.removeAttribute("aria-current");
  });
  const copy = labels[language];
  const name = localized(profile.name);
  document.title = page === "home" ? name + " · " + copy.pageTitle : copy[page] + " · " + name;

  if (moveFocus && currentPage !== page) {
    if (location.hash === "#news" && !get("news").hidden) get("news").scrollIntoView();
    else window.scrollTo(0, 0);
    get("main").focus({ preventScroll: true });
  }
  currentPage = page;
}

function render() {
  const copy = labels[language];
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-label]").forEach((node) => { node.textContent = copy[node.dataset.label]; });
  document.querySelectorAll("[data-aria]").forEach((node) => node.setAttribute("aria-label", copy[node.dataset.aria]));
  document.querySelectorAll("[data-name]").forEach((node) => { node.textContent = localized(profile.name); });
  document.querySelectorAll("[data-sample]").forEach((node) => { node.hidden = !profile.sampleMode; });

  const bio = localized(profile.bio);
  const paragraphs = Array.isArray(bio) ? bio : [bio];
  get("biography").replaceChildren(...paragraphs.filter(Boolean).map((text) => element("p", text)));

  const news = renderNews(profile.news ?? []);
  get("news").hidden = news.length === 0;
  get("news-list").replaceChildren(...news);
  const publications = renderPublications(profile.publications ?? [], copy);
  const research = renderResearch(profile.research ?? []);
  get("publication-list").replaceChildren(...publications);
  get("research-list").replaceChildren(...research);
  navLinks[1].hidden = publications.length === 0;
  navLinks[2].hidden = research.length === 0;

  renderProfile(copy);
  get("language-switch").textContent = copy.otherLanguage;
  get("language-switch").lang = language === "zh" ? "en" : "zh-CN";
  showPage();
}

try {
  const savedLanguage = localStorage.getItem(languageKey);
  if (savedLanguage === "en" || savedLanguage === "zh") language = savedLanguage;
} catch {
  // Language switching still works without storage, including for local files.
}

get("language-switch").addEventListener("click", () => {
  language = language === "en" ? "zh" : "en";
  try {
    localStorage.setItem(languageKey, language);
  } catch {
    // Some browser settings block storage.
  }
  render();
});

get("photo").addEventListener("error", (event) => { event.target.hidden = true; });
window.addEventListener("hashchange", () => showPage(true));
render();
