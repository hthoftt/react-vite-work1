# 精選畫作 限量展售 | 藝術作品電商網站

畫廊風格的藝術作品展售網站，包含前台購物流程（瀏覽 → 購物車 → 結帳）與後台管理系統（商品、優惠券、訂單）。

🔗 [線上 Demo](https://hthoftt.github.io/react-vite-work1/)

<!-- 補一張截圖或後台操作 GIF：把圖片放進 repo，再取消下一行註解 -->
<!-- ![畫面截圖](./screenshot.png) -->

## 功能

**前台**
- 首頁作品分類展示、顧客回饋
- 商品列表分頁、商品詳細頁（數量增減、加入購物車）
- 購物車：修改數量、刪除單項、清空購物車，導覽列即時顯示件數
- 結帳表單：React Hook Form 驗證 Email、電話、地址，送出時防止重複下單
- 下單成功頁：顯示訂單明細

**後台**（需登入）
- 登入取得 token 存入 cookie，進入後台時驗證 token，失效即導回登入頁
- 商品管理：新增、編輯、刪除、上傳圖片、啟用 / 停用
- 優惠券管理：新增、編輯、刪除，設定折扣與到期日
- 訂單管理：查看訂單內容、修改付款狀態與配送進度、刪除訂單
- 編輯或刪除後停留在原本的分頁

## 我做的優化

- **圖片壓縮**：首頁圖片從約 15.6MB 降到約 0.8MB（依顯示尺寸縮圖、轉換壓縮），首頁載入大幅變快
- **拆分載入**：後台頁面改用 `React.lazy` 拆開，前台訪客不用下載後台程式碼
- **API 模組化**：建立 `src/api.js`，用 axios instance 統一管理 API 路徑，後台請求以 interceptor 自動帶 token，移除各元件重複的 cookie 解析
- **錯誤處理**：所有請求失敗時都會關閉 loading、顯示錯誤訊息，不會卡住畫面
- **SCSS 精簡**：Bootstrap 變數檔從 1755 行精簡為只保留自訂的間距設定，編譯結果不變

## 技術重點

- **React Router**（HashRouter）：前後台巢狀路由，`useOutletContext` 共享購物車狀態
- **Redux Toolkit**：管理全站通知訊息，用 `createAsyncThunk` 處理訊息顯示後自動移除
- **useReducer + Context**：後台的儲存成功 / 失敗提示
- **Bootstrap 5**：Modal、表單、版面；以 SCSS 覆寫變數

## 使用技術

React 19 · Vite · React Router · Redux Toolkit · React Hook Form · axios · Bootstrap 5 · SCSS · GitHub Pages

## 本機執行

```bash
npm install
npm run dev
```

需在 `.env` 設定 `VITE_APP_API_URL` 與 `VITE_APP_API_PATH`。

部署：`npm run build` 後執行 `npm run deploy`（發布到 GitHub Pages）

## 作者

洪子祥 · [GitHub](https://github.com/hthoftt) · tonyhung92568@gmail.com
