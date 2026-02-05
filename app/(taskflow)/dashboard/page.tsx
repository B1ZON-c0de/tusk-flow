import BaseAppHeader from "@/components/shared/base/BaseAppHeader";
import { Metadata } from "next";
import TaskTable from "@/app/(taskflow)/dashboard/task-table";
import { getAllTasks } from "@/lib/tasks/gettAllTasks";
import { columns } from "./columns";


export const metadata: Metadata = {
  title: "Главная"
}

export default async function Page(){
  const tasks = await getAllTasks()
  return <div className="flex flex-col gap-8">
    <BaseAppHeader label="Dashboard" span=".Log" />
    <TaskTable columns={ columns } data={ tasks } />
  </div>
}