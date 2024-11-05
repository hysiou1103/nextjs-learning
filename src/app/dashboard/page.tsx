// 若註解掉下方 Dashboard 元件，並導航至 /dashboard，會收到 error，
// 因 page.tsx 必須是一個 export default 的元件
function BarChart() {
  return <h1>Bar chart</h1>;
}

export default function Dashboard() {
  return <h1>Dashboard</h1>;
}
