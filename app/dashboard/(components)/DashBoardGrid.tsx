import Link from 'next/link';
import { LogoutButton } from './ui/Logout-icon';
import { SettingsIcon } from './ui/Setting-icon';


const DashboardGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <div className="border-r-2 border-[#990011] w-64 flex-shrink-0 ">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className='border  border-[#990011]'></div>
        </div>
        <nav className="mt-4">
          <Link href="/dashboard" className="block py-2 px-4 hover:text-[#990011] ">
            Overview
          </Link>
          <Link href="/dashboard/blog" className="block py-2 px-4 hover:text-[#990011] ">
           Blogs 
          </Link>
            <div className='mt-[70vh]'>
          <Link href="/dashboard/settings" className="block py-2 px-4 hover:text-[#990011] ">
         <SettingsIcon /> 
          </Link>
           <Link href="../../api/auth/logout" className="block py-2 px-4 hover:text-[#990011] ">
              <LogoutButton />
          </Link>
          </div>
        </nav>
      </div>
      
     {children}
    </div>
  );
};

export default DashboardGrid;
