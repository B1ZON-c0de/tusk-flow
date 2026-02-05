import AppSidebar from "@/components/shared/app-sidebar/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import AppHeader from "@/components/shared/AppHeader";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-col w-full">
        <AppHeader />
        <main className="px-6 py-8">
          { children }
        </main>
      </div>
    </SidebarProvider>
  )
}
export default Layout
