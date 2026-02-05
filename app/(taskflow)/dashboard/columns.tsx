"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Task } from "@/app/generated/prisma/client";
import { truncateText } from "@/lib/utils/truncate-text";
import { formatDate } from "@/lib/utils/format-date-time";
import { cn } from "@/lib/utils";
import { TaskCategoryLabels, TaskPriorityLabels } from "@/lib/data/enum-labels";
import { Checkbox } from "@/components/ui/checkbox";
import { updateStatusTask } from "@/lib/actions/update-task";
import { toast } from "sonner";

export const columns: ColumnDef<Task>[] = [
  {
    id: "taskInfo",
    header: "Задача",
    cell: ({ row }) => (
      <div className="text-base">
        <div className="dark:text-app-accent-dark text-app-accent-light">{ row.original.title }</div>
        <div className="text-muted-foreground text-sm">{ row.original.description && truncateText(row.original.description, 35) }</div>
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: "Категория",
    cell: ({ row }) => (
      <p className="text-base text-center uppercase ">{ TaskCategoryLabels[row.original.category] }</p>
    )
  },
  {
    accessorKey: "priority",
    header: "Приоритет",
    cell: ({ row }) => (
      <p
        className={
          cn(
            "text-base text-center",
            row.original.priority === "HIGH" && "text-red-500",
            row.original.priority === "MEDIUM" && "text-yellow-500",
            row.original.priority === "LOW" && "text-green-500")
        }
      >{ TaskPriorityLabels[row.original.priority] }</p>
    )
  },
  {
    accessorKey: "createdAt",
    header: "Дата создания",
    cell: ({ row }) => (
      <p className="text-muted-foreground text-center">{ formatDate(row.original.createdAt.toISOString()) }</p>
    )
  },
  {
    accessorKey: "completed",
    header: "Статус",
    cell: ({ row }) => (
      <div className="flex flex-col justify-center items-center gap-2">
        <Checkbox
          disabled={ row.original.completed }
          checked={ row.original.completed }
          onCheckedChange={ async (newValue) => {
            try{
              await updateStatusTask(newValue, row.original.id)
              toast.success("Статус задачи успешно изменен")
            } catch (e){
              toast.warning("Не удаось изменить статус задачи")
              console.error(e)
            }
          } }
        />
        <p
          className={ cn(row.original.completed ? "text-app-accent-light dark:text-app-accent-dark" : "text-muted-foreground") }
        >{ row.original.completed ? "Завершено" : "Не завершено" }</p>
      </div>
    )
  },
]


