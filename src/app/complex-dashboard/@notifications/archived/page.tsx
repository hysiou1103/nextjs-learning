// 這是常規的路由 component，不是 slot，當導航至 /complex-dashboard/archived 時，會 render ArchivedNotifications 元件，並且只有這個元件是匹配的狀態，另外三個 slot component 將成為 unmatched 狀態
// 若進行當頁重整，將會看到 404 error ，因為 next.js 會去尋找 未匹配slot 的 default.tsx，解決方案為替 slot component 加上 default.tsx

import Card from '@/components/cards';
import Link from 'next/link';

export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived Notifaction</div>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
}
