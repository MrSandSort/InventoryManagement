import { InventorySidebar } from "@/components/ui/Sidebar/Sidebar";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";

export const metadata = {
  title: "Inventory Management System",
  description: "An advanced inventory management system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex">
        <SidebarProvider>

        <InventorySidebar />


        </SidebarProvider>

        <main className="flex-1 p-4">{children}</main>
      </body>
    </html>
  );
}
