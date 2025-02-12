import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Package2, ShoppingCart, Users, Store, LucideIcon } from "lucide-react";

interface StatItem {
  title: string;
  value: number;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

const StatCard = ({ title, value, icon: Icon, color, bgColor }: StatItem) => (
  <Card className="p-4 shadow-none border-md">
    <CardContent className="flex items-center space-x-4">
      <div className={`p-3 rounded-full ${bgColor}`}>
        <Icon className={`w-6 h-6 ${color}`} />
      </div>

      <div>
        <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
        <div className="text-2xl font-bold">{value.toLocaleString()}</div>
      </div>
    </CardContent>
  </Card>
);

interface StatsData {
  totalProducts: number;
  totalOrders: number;
  totalUsers: number;
  totalSuppliers: number;
}

export function StatsCards({ data }: { data: StatsData }) {
  const stats: StatItem[] = [
    { title: "Total Products", value: data.totalProducts, icon: Package2, color: "text-blue-600", bgColor: "bg-blue-100" },
    { title: "Total Orders", value: data.totalOrders, icon: ShoppingCart, color: "text-green-600", bgColor: "bg-green-100" },
    { title: "Total Users", value: data.totalUsers, icon: Users, color: "text-purple-600", bgColor: "bg-purple-100" },
    { title: "Total Suppliers", value: data.totalSuppliers, icon: Store, color: "text-orange-600", bgColor: "bg-orange-100" },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}
