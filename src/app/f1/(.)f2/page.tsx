// 攔截相同層級的路徑，只要瀏覽 f1/f2，就會攔截 f2 的畫面，顯示(.)f2的內容

export default function InterceptedF2() {
  return <h1>(.) Intercepted F2 Page</h1>;
}
