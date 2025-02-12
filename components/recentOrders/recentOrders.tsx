import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

interface Order {
  id: string
  customer: string
  product: string
  amount: number
  status: "delivered" | "pending" | "processing"
}

export function RecentOrdersTable({ orders }: { orders: Order[] }) {
  return (
    <div className="rounded-md border">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-lg font-semibold">Recent Orders</h2>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Product</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.product}</TableCell>
              <TableCell>${order.amount}</TableCell>
              <TableCell>
                <div
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                  ${order.status === "delivered" ? "bg-green-100 text-green-800" : ""}
                  ${order.status === "pending" ? "bg-yellow-100 text-yellow-800" : ""}
                  ${order.status === "processing" ? "bg-blue-100 text-blue-800" : ""}
                `}
                >
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

