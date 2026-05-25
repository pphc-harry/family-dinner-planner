# 今晚食咩好？

一個給家人使用的靜態晚餐抽菜 Web App。資料會留在瀏覽器的 `localStorage`，不需要登入或後端。

## 使用

直接開 `index.html` 可以使用主要功能。若想安裝成 PWA 或測試離線快取，請在這個資料夾啟動本機伺服器：

```sh
python3 -m http.server 8081
```

然後打開 `http://localhost:8081`。

## 免費上網：GitHub Pages

1. 建立一個 public GitHub repository，例如 `family-dinner-planner`。
2. 將本資料夾內所有檔案放在 repository root。
3. 到 repository 的 `Settings` -> `Pages`。
4. Source 選 `Deploy from a branch`。
5. Branch 選 `main`，folder 選 `/root`，然後 Save。
6. 等 GitHub Pages 完成部署後，網址會是：

```text
https://你的GitHub用戶名.github.io/family-dinner-planner/
```

## 功能

- App 式分頁：今晚、菜單、紀錄
- 抽取今晚一餐，不再排七日
- 支援「一餸一菜」和「快煮一餸一菜」
- 可避開最近三晚
- 標記已煮和保留最近紀錄
- 搜尋菜式庫和加入自訂菜式
- 複製今晚餐單給家人
