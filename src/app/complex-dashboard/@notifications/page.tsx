import Card from '@/components/cards';
import Link from 'next/link';

// 點擊 Link 時會轉變 url 到 /complex-dashboard/archived，並將 ArchivedNotifications 元件 render 到 notifications slot
export default function Notifications() {
  return (
    <Card>
      <div>Notifaction</div>
      {/* 分區導航，當導航到 /archived時，其他 slot 處於未匹配的情況 */}
      <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  );
}
