# 唐鑫的学术主页

基于 [AcademicPages 官方模板](https://github.com/academicpages/academicpages.github.io)。模板按 MIT 许可证分发，详见 [LICENSE](LICENSE)。

## 更新头像

将照片放进 `images/`，例如 `images/tang-xin.jpg`。在 `_config.yml` 的 `author` 下将 `avatar` 改成 `"tang-xin.jpg"`。默认文件为 `images/profile.png`。

## 更新内容

- `_pages/about.md` 和 `_pages/about-en.md` 是中、英文简介。
- `_pages/research.md` 是研究方向。
- `_publications/` 保存已发表论文。`_pages/publications.html` 记录投稿状态。
- `_data/navigation.yml` 控制顶部导航。

## 发布到 GitHub Pages

这个版本为 `TangXin03/xintang03.github.io` 配置了站点路径。将模板源码提交到仓库后，在 **Settings → Pages** 中把 **Source** 设为 **GitHub Actions**。仓库里的 `.github/workflows/jekyll.yml` 会构建和部署网站。
