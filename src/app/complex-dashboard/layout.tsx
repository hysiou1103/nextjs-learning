// 使用Parallel Routes，Users, Revenue, Notifications 三元件不必使用傳統的方始引入，而是透過 props 的方式傳入給 layout.tsx

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      {/* 這個children component 等同於complex-dashboard/@children/page.tsx  */}
      <div>{children}</div>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>{notifications}</div>
      </div>
    </>
  );
}
