"use client";

import { Boxes, FileText, LineChart, Package, Settings, ShoppingCart, Truck } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LineChart,
  },
  {
    title: "Products",
    href: "/products",
    icon: Boxes,
  },
  {
    title: "Orders",
    href: "/orders",
    icon: ShoppingCart,
  },
  {
    title: "Suppliers",
    href: "/suppliers",
    icon: Truck,
  },
  {
    title: "Stock Management",
    href: "/stock-management",
    icon: Package,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: FileText,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function InventorySidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="my-4 text-md font-black">
            Inventory
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {items.map((link) => {
                const LinkIcon = link.icon;
                const isActive = pathname === link.href;

                return (
                  <SidebarMenuItem key={link.title}>
                    <SidebarMenuButton className="h-10 w-full " asChild>
                      <a
                        href={link.href}
                        className={`flex items-center gap-2 p-2 transition-colors ${
                          isActive
                            ? "hover:bg-[#9ACBD0] hover: text-[#2973B2]" 
                            : "text-gray-700 hover:bg-muted-blue hover:text-dark-green"
                        }`}
                      >
                        <LinkIcon className="w-5 h-5" />
                        <span className="font-semibold text-sm">{link.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
