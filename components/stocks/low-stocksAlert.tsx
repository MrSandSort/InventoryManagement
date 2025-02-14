import {  Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface LowStockItem {
  name: string
  sku: string
  remaining: number
}

export function LowStockAlert({ items }: { items: LowStockItem[] }) {
  return (
    <Card className="border rounded-md shadow-none">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">Low Stock Alert</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <div key={item.sku} className="flex items-center justify-between space-x-4 rounded-md border p-4">
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.sku}</p>
              </div>
              <div className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                {item.remaining} left
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

