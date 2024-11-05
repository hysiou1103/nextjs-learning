// 資料夾名稱前面加上下底線代表是 Private Folder，將不會被包含在路由系統中（即使有page.tsx)
// 當路由有底線需求時，只要將底線寫成 ％5F，該資料夾就會被包含在路由系統
export default function PrivateRoute() {
  return <h1>Private Route</h1>;
}
