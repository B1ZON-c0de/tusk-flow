import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Невалидный Email"),
  password: z.string().min(6, "Минимально должен быть 6 символов")
})

export type LoginSchemaT = z.infer<typeof loginSchema>;