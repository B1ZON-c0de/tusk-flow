import { z } from "zod";

export const schemaRegister = z.object({
  login: z.string().min(1, "Логин не должен быть пустой"),
  email: z.email("Невалидный Email"),
  password: z.string().min(6, "Минимальная длина пароля 6"),
  repeatPassword: z.string().min(6, "Минимальная длина пароля 6"),
}).refine((data) => data.password === data.repeatPassword, {
  message: "Пароли не совпадают",
  path: [ "repeatPassword" ],
});

export type SchemaRegisterT = z.infer<typeof schemaRegister>