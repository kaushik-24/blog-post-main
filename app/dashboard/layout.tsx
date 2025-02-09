// app/dashboard/layout.tsx
import { getSession } from '@auth0/nextjs-auth0';
import DashboardGrid from './(components)/DashBoardGrid';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <div className="container">
      <DashboardGrid>
        {children}
      </DashboardGrid>
    </div>
  );
}
