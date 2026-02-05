import { z } from "zod";

export const loginSchema = z.object({
  login: z.string().min(1, "Введите логин"),
  password: z.string().min(6, "Минимально должен быть 6 символов")
})

export type LoginSchemaT = z.infer<typeof loginSchema>;