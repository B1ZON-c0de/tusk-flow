import { LayoutDashboard, SquarePlus } from "lucide-react";
import { SidebarNavMenuI } from "@/lib/types/site-data-types";

export const sidebarNavMenu: SidebarNavMenuI[] = [
  { icon: LayoutDashboard, label: "Главная", href: "/dashboard" },
  { icon: SquarePlus, label: "Создать", href: "/create-task" },
]