import { Poppins } from "next/font/google";
import SidebarNav from "@/components/Sidebar/Sidebar";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins", 
});

export const metadata = {
  title: "Inventory Management System",
  description: "An advanced inventory management system.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased flex font-poppins">
        <SidebarProvider>
          <SidebarNav />
          <main className="flex-1 p-4">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
