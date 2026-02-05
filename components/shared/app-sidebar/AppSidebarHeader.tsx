import React from 'react'
import { ChartCandlestickIcon } from "lucide-react";
import Link from "next/link";

const AppSidebarHeader = () => {
  return (
    <div className="flex gap-2 items-center ">
      <ChartCandlestickIcon
        size={ 36 }
        className="text-app-accent-light dark:text-app-accent-dark"
      />
      <Link
        href="/"
        className="uppercase text-3xl px-2 py-4 hover:scale-105 transition-scale duration-150"
      >
        <h1>TuskFlow</h1>
      </Link>
    </div>
  )
}
export default AppSidebarHeader
