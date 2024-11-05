// 在未新增 /dashboard/page.tsx 之前，即使 /dashboard 資料夾中有這個 React 元件
// 導航至 /dashboard 仍會轉導至 not found page，因每個資料夾內需有 page.tsx file 才會成為可訪問路由
export default function LineChart() {
  return <h1>Line chart</h1>;
}
