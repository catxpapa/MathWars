mkdir mathwars
cd mathwars
sudo chown -R 502:20 "/Users/aeros/.npm
npm install react react-dom next typescript @types/react @types/node
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p

**配置 Tailwind CSS**：
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
   - 在浏览器中访问 `http://localhost:3000` 查看项目