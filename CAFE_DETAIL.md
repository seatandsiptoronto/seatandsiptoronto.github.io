# Dynamic Cafe Detail Page

這個動態咖啡廳詳情頁面可以根據 URL 參數中的 ID 顯示不同咖啡廳的資料。

## 檔案結構

1. **`cafes/cafe_detail/index.html`** - 動態咖啡廳詳情頁面
2. **`data/cafes.json`** - 咖啡廳資料庫
3. **`CAFE_DETAIL.md`** - 此說明文件

## 使用方式

### URL 格式
```
/cafes/cafe_detail/index.html?id=CAFE_ID
```

### 範例 URLs
- `cafes/cafe_detail/index.html?id=bloom` - 顯示 Bloom Cafe
- `cafes/cafe_detail/index.html?id=balzac` - 顯示 Balzac's Coffee Roasters  
- `cafes/cafe_detail/index.html?id=fusettes` - 顯示 Fusettes Cafe
- `cafes/cafe_detail/index.html` - 預設顯示 Bloom Cafe（沒有指定 ID 時）

## 資料結構

`data/cafes.json` 包含所有咖啡廳的資料：

```json
{
  "cafe_id": {
    "id": "cafe_id",
    "name": "咖啡廳名稱",
    "address": "地址",
    "phone": "電話",
    "hours": "營業時間",
    "website": "網站",
    "about": "關於我們",
    "amenities": "設施",
    "status": {
      "seats": { "available": 8, "total": 15 },
      "outlets": { "available": 5, "total": 8 },
      "noise": "Moderate|Quiet|Loud",
      "lastUpdated": "更新時間"
    },
    "images": [
      { "src": "圖片檔名", "alt": "圖片描述" }
    ]
  }
}
```

## 功能特色

### 1. 動態載入
- 從 URL 參數獲取咖啡廳 ID
- 載入對應的咖啡廳資料
- 如果 ID 不存在，顯示錯誤訊息

### 2. 動態內容更新
- 頁面標題
- 咖啡廳名稱和所有資訊
- 即時狀態（座位、插座、噪音）
- 圖片輪播

### 3. 錯誤處理
- 咖啡廳不存在
- 資料載入失敗
- 網路連線問題

### 4. 圖片系統
- 支援多張圖片輪播
- 點擊放大功能
- 自動適應不同咖啡廳的圖片

## 新增咖啡廳

### 步驟 1: 更新 JSON 資料
在 `data/cafes.json` 中添加新的咖啡廳資料：

```json
"new_cafe_id": {
  "id": "new_cafe_id",
  "name": "新咖啡廳名稱",
  // ... 其他資料
}
```

### 步驟 2: 準備圖片
在 `cafes/cafe_detail/` 資料夾中放置圖片檔案，或使用相對路徑指向其他位置的圖片。

### 步驟 3: 測試
訪問 `cafes/cafe_detail/index.html?id=new_cafe_id` 確認新咖啡廳顯示正常。

## 狀態顏色

噪音級別會自動套用不同顏色：
- **Quiet** - 綠色 (#28a745)
- **Moderate** - 黃色 (#ffc107)  
- **Loud** - 紅色 (#dc3545)

## 技術特色

- 使用 Fetch API 載入 JSON 資料
- URLSearchParams 解析 URL 參數
- 動態 DOM 操作
- 錯誤處理和載入狀態
- 響應式設計
- 無需重新載入頁面

## 維護

- 更新咖啡廳資料：編輯 `data/cafes.json`
- 修改頁面樣式：編輯 `index.html` 中的 CSS
- 添加新功能：修改 JavaScript 程式碼

這個系統讓你可以輕鬆管理多個咖啡廳的資訊，並透過簡單的 URL 參數切換顯示不同的咖啡廳詳情。