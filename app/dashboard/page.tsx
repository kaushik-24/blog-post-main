import { getSession } from '@auth0/nextjs-auth0';
import DashboardGrid from './(components)/DashBoardGrid';
import { Component } from './(components)/ui/chart';

export default async function Dashboard() {

  return (
    <div className='container m-3 text-white'>
      <h1 className='text-5xl'>Overview</h1>
      <p>Welcome back! This is the overall view of your account.</p>
      <Component />
    </div>
  );
}
