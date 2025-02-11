// app/dashboard/layout.tsx
import DashboardGrid from './(components)/DashBoardGrid';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <DashboardGrid>
        {children}
      </DashboardGrid>
    </div>
  );
}
