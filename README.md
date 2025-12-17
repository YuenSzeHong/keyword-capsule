# 你的年度关键词 · Next.js 版

主分支已切换为 Next.js 应用；原本的静态 HTML 版在 `html-version` 分支保留。

## 技术栈

- Next.js 16（App Router）+ Tailwind CSS
- React Hook Form + Zod 表单校验
- `seedrandom` 确保关键词生成可复现

## 本地开发

```bash
# 安装依赖（任选）
npm install    # 或 pnpm / yarn / bun install

# 启动开发服
npm run dev
# 浏览器访问 http://localhost:3000
```

环境变量示例见 `.env.example`（默认无需额外配置）。

## 质量检查

- `npm run lint` 使用 Biome 进行代码检查
- `npm run format` 统一格式化

## 一键部署到 Deno Deploy

[![Deploy on Deno](https://deno.com/button)](https://console.deno.com/new?clone=https://github.com/YuenSzeHong/keyword-capsule)

Deno Deploy 会自动识别 Next.js：执行 `npm install`、`npm run build`，并用 `npm run start` 启动 SSR 服务。

### Git 连接方式（推荐）

1. 将 `main` 推送到 GitHub。
2. 在 Deno Deploy 控制台：New Project → Git → 选择本仓库，生产分支设为 `main`。
3. 构建命令 `npm run build`（自动检测）；启动命令 `npm run start`（自动）。
4. 部署后可获得生产域名；其他分支会生成预览域名。

### CLI（deployctl）方式

```bash
deno install -gArf jsr:@deno/deployctl
deployctl deploy --project=<项目名> --prod
```

若自定义入口，可通过 `--entrypoint` 指定；默认会使用自动检测到的 Next.js 服务器入口。

## 分支说明

- `main`：Next.js 版本（当前）
- `html-version`：静态 HTML 归档版
