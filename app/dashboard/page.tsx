import { Component } from './(components)/ui/chart';

export default async function Dashboard() {

  return (
    <div className='m-3 text-white'>
      <h1 className='text-5xl'>Overview</h1>
      <p>Welcome back! This is the overall view of your account.</p>
      <Component />
    </div>
  );
}
