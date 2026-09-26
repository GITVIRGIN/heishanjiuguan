# 钢翼盟约 · Steel-Wing Covenant

一部以机甲战争、舰上生活和伙伴羁绊为主题的分支视觉小说。

[在线游玩](https://gitvirgin.github.io/heishanjiuguan/steel-wing-covenant/) ·
[下载 v1.0.0](https://github.com/GITVIRGIN/heishanjiuguan/releases/tag/steel-wing-covenant-v1.0.0)

## 游戏内容

- 九章剧情，90 个选择点、256 个选项。
- 八个普通结局、一个隐藏结局，以及一个额外的代价结局。
- 场景插画、透明人物立绘与分镜随剧情切换。
- 对话分页、自动播放、历史记录、人物档案与浏览器存档。

点击对话区域或按空格、回车推进。文字正在出现时，第一次操作会补全当前页，再次操作继续。菜单中的自动、存档、档案和记录可通过 A、S、D、L 快捷键打开。

剧情与素材均随游戏提供，游玩过程不调用 AI 模型，无须配置 API 密钥。

## 存档

存档保存在当前浏览器的本地存储中。请保持相同网址、浏览器和用户配置游玩；清除网站数据会删除本地存档。原私密站点、GitHub Pages 与本地预览使用不同的网站来源，存档不会自动互通。

## 下载后在本机游玩

解压发行包，进入包含 `index.html` 的 `steel-wing-covenant` 文件夹。有 Python 3 时，在该文件夹打开终端：

```powershell
py -m http.server 8000 --bind 127.0.0.1
```

macOS / Linux 可使用 `python3 -m http.server 8000 --bind 127.0.0.1`。

然后在浏览器打开 <http://127.0.0.1:8000/>。结束时在终端按 Ctrl+C 关闭服务。浏览器需要通过 HTTP 加载模块，直接双击 `index.html` 无法正常游玩。

本版本的变更与验证范围见 [RELEASE_NOTES.md](RELEASE_NOTES.md)。本目录未附加新的开源许可证。
