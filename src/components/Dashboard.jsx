import React from 'react';
import { Link } from 'react-router-dom';
import DashboardStateGrid from './DashboardStatsGrid';
import TransactionChart from './TransactionChart';
import RecentOrders from './RecentOrders';
import BuyerProfilePieChart from './BuyerProfilePieChart';
import PopularProducts from './PopularProducts';

function Dashboard() {
  return (
    <div className='flex flex-col gap-4 p-4'>
      {/* Dashboard State Grid (Responsive) */}
      <DashboardStateGrid />

      {/* Charts Section - Stack on small screens and row on larger screens */}
      <div className='flex flex-col lg:flex-row gap-4 w-full'>
        {/* Transaction Chart */}
        <div className='w-full lg:w-1/2'>
          <TransactionChart />
        </div>

        {/* Buyer Profile Pie Chart */}
        <div className='w-full lg:w-1/2'>
          <BuyerProfilePieChart />
        </div>
      </div>

      {/* Orders and Popular Products Section - Stack on small screens and row on larger screens */}
      <div className='flex flex-col lg:flex-row gap-4 w-full'>
        {/* Recent Orders */}
        <div className='w-full lg:w-2/3'>
          <RecentOrders />
        </div>

        {/* Popular Products */}
        <div className='w-full lg:w-1/3'>
          <PopularProducts />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
