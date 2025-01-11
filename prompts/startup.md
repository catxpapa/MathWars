
# 根据附件需求，指导我要本机搭建开发环境

## 本机搭建开发环境
要在本机搭建开发环境，可以按照以下步骤进行：

1. **安装 Node.js 和 npm**：
   - 访问 [Node.js 官网](https://nodejs.org/) 下载并安装最新的 LTS 版本。安装完成后，打开终端并运行以下命令以确认安装成功：
     
```bash
     node -v
     npm -v
     ```
2. **安装 VS Code**：
   - 访问 [Visual Studio Code 官网](https://code.visualstudio.com/) 下载并安装适用于 macOS 的版本。

3. **安装必要的 VS Code 扩展**：
   - 打开 VS Code，安装以下扩展：
     - **ESLint**：用于代码质量检查。
     - **Prettier - Code formatter**：用于代码格式化。
     - **Remote - Containers**：用于开发容器。
     - **Remote - SSH**：用于远程开发。
     - **Remote - WSL**：用于 Windows Subsystem for Linux 开发。
     - **Docker**：用于 Docker 容器管理。
     - **GitLens**：用于 Git 版本控制。
     - **React**：用于 React 开发支持。
     - **TypeScript**：用于 TypeScript 开发支持。

4. **创建项目目录**：
   - 在终端中运行以下命令创建项目目录并初始化项目：
     
```bash
     mkdir math-challenge-game
     cd math-challenge-game
     npx create-next-app@latest . --typescript
     ```
5. **安装项目依赖**：
   - 在项目目录中运行以下命令安装必要的依赖：
     
```bash
     npm install react react-dom next typescript @types/react @types/node
     npm install tailwindcss postcss autoprefixer
     npx tailwindcss init -p
     ```
6. **配置 Tailwind CSS**：
   - 在 `tailwind.config.js` 文件中添加以下内容：
     
```javascript
     module.exports = {
       content: [
         './pages/**/*.{js,ts,jsx,tsx}',
         './components/**/*.{js,ts,jsx,tsx}',
       ],
       theme: {
         extend: {},
       },
       plugins: [],
     }
     ```
7. **配置 ESLint 和 Prettier**：
   - 在项目根目录创建 `.eslintrc.json` 文件并添加以下内容：
     
```json
     {
       "extends": ["next/core-web-vitals", "plugin:prettier/recommended"],
       "rules": {
         "prettier/prettier": ["error", { "endOfLine": "auto" }]
       }
     }
     ```
   - 在项目根目录创建 `.prettierrc` 文件并添加以下内容：
     
```json
     {
       "singleQuote": true,
       "semi": false
     }
     ```
8. **启动开发服务器**：
   - 在终端中运行以下命令启动开发服务器：
     
```bash
     npm run dev
     ```
9. **打开项目**：
   - 在浏览器中访问 `http://localhost:3000` 查看项目。

通过以上步骤，你可以在本机搭建一个基于 React 和 Next.js 的开发环境，并开始开发数学挑战游戏。