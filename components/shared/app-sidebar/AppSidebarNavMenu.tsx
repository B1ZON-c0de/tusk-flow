"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { sidebarNavMenu } from "@/lib/data/sidebar-data";


const AppSidebarNavMenu = () => {
  const pathname = usePathname()
  return (
    <div>
      <ul className="flex flex-col gap-2">
        { sidebarNavMenu.map(({ icon: Icon, label, href }) => (
          <li key={ href }>
            <Link
              href={ href }
              className={ cn("nav-item", href === pathname && "active-nav-item") }
            >
              <Icon />
              <p

                className="uppercase font-semibold "
              >{ label }</p>
            </Link>
          </li>
        )) }
      </ul>
    </div>
  )
}
export default AppSidebarNavMenu
