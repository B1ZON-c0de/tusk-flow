import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader
} from "@/components/ui/sidebar";
import ToggleTheme from "@/components/shared/ToggleTheme";
import AppSidebarHeader from "@/components/shared/app-sidebar/AppSidebarHeader";
import AppSidebarNavMenu
  from "@/components/shared/app-sidebar/AppSidebarNavMenu";


const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <AppSidebarHeader />
      </SidebarHeader>
      <SidebarContent>
        <div className="my-6 px-2">
          <AppSidebarNavMenu />
        </div>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <div className="my-6 px-2">
          <ToggleTheme />
        </div>
      </SidebarFooter>

    </Sidebar>
  )
}
export default AppSidebar
