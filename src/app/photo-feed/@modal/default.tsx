// 由於 Modal 與其他路由平行存在的，因此它需要一個單獨的入口點，獨立於主應用的佈局來渲染模態框，避免 404 error。
// return null 這樣的設計確保 Modal 只在特定條件（如/photo-feed/2）下才會顯示，而不干擾 /photo-feed 的主頁面內容。

export default function Default() {
  return null;
}
