import BaseAppHeader from "@/components/shared/base/BaseAppHeader";
import { Metadata } from "next";
import TaskTable from "@/app/(taskflow)/dashboard/task-table";
import { getAllTasks } from "@/lib/tasks/gettAllTasks";
import { columns } from "./columns";
import { Task } from "@/app/generated/prisma/client";


export const metadata: Metadata = {
  title: "Главная"
}

export default async function Page(){
  const tasks: Task[] = await getAllTasks()
  return <div className="flex flex-col gap-8">
    <BaseAppHeader label="Dashboard" span=".Log" />
    { tasks.length > 0 ? (<TaskTable
      columns={ columns }
      data={ tasks }
    />) : (<h1>Добавьте новую заадачу в разделе "Создать"</h1>) }
  </div>
}