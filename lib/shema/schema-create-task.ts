import { z } from "zod";
import { Priority, TaskCategory } from "@/app/generated/prisma/enums";

export const schemaCreateTask = z.object({
  title: z.string().min(1, "Заголовок не должен быть пустой"),
  category: z.enum(TaskCategory, "Категория оябязательна для выбора"),
  priority: z.enum(Priority, "Приоритет обязателен для выбора"),
  description: z.string().optional()
})

export type schemaCreateTaskT = z.infer<typeof schemaCreateTask>