import { RecentOrdersTable } from '@/components/recentOrders/recentOrders'
import { StatsCards } from '@/components/StatsCard'
import { LowStockAlert } from '@/components/stocks/low-stocksAlert'
import React from 'react'



export default function dashboard() {

  const data={
    totalProducts:100,
    totalOrders:20,
    totalUsers:10,
    totalSuppliers:50

  }

  const recentOrders = [
    {
      id: "#ORD-1234",
      customer: "John Smith",
      product: "iPhone 15 Pro",
      amount: 999,
      status: "delivered" as const,
    },
    {
      id: "#ORD-1235",
      customer: "Sarah Johnson",
      product: "MacBook Air",
      amount: 1299,
      status: "pending" as const,
    },
    {
      id: "#ORD-1236",
      customer: "Mike Brown",
      product: "AirPods Pro",
      amount: 249,
      status: "processing" as const,
    },
  ]

  const lowStockItems = [
    {
      name: "iPhone 15 Pro",
      sku: "SKU-IPH-15-PRO",
      remaining: 5,
    },
    {
      name: "MacBook Pro",
      sku: "SKU-MBP-14-M2",
      remaining: 3,
    },
    {
      name: "iPad Air",
      sku: "SKU-IPA-2023",
      remaining: 7,
    },
  ]
  return (
    <div className='flex flex-col gap-4'>

      <h1 className='text-lg font-semibold'>Dashboard</h1>

      <div>
      <StatsCards data={data}/>
      </div>

      <div>
      <RecentOrdersTable orders={recentOrders}/>
      </div>

      <div>
        <LowStockAlert items={lowStockItems}/>
      </div>



    </div>
  )
}
