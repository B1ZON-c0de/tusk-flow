import { Priority, TaskCategory } from "@/app/generated/prisma/enums";

export const TaskCategoryLabels: Record<TaskCategory, string> = {
  WORK: "Работа",
  PERSONAL: "Личное",
  STUDY: "Учеба",
  OTHER: "Другое"
}

export const TaskPriorityLabels: Record<Priority, string> = {
  LOW: "Низкая",
  MEDIUM: "Средняя",
  HIGH: "Высокая"
}