"use client"

import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { schemaRegister, SchemaRegisterT } from "@/lib/shema/shema-register";
import { zodResolver } from "@hookform/resolvers/zod";
import FieldController from "@/components/shared/auth/FieldController";


const handleRegisterForm = (formData: SchemaRegisterT) => {
  console.log(formData)
}

const RegisterForm = () => {

  const { handleSubmit, reset, control } = useForm<SchemaRegisterT>({
    resolver: zodResolver(schemaRegister),
    defaultValues: {
      login: "",
      email: "",
      password: "",
      repeatPassword: ""
    }
  });

  return (
    <div className="flex flex-col gap-6">
      <form
        onSubmit={ handleSubmit((formData) => {
          handleRegisterForm(formData);
          reset();
        }) }
      >
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-5xl font-bold">Регистрация</h1>

          </div>
          <FieldController
            label="Логин"
            name="login"
            control={ control }
            placeholder="user"
          />
          <FieldController
            label="Email"
            name="email"
            control={ control }
            placeholder="user@mail.com"
          />
          <FieldController
            label="Пароль"
            name="password"
            control={ control }
            type="password"
          />
          <FieldController
            label="Повторите пароль"
            name="repeatPassword"
            type="password"
            control={ control }
          />
          <Field>
            <Button
              type="submit"
              className="text-base"
            >Зарегестрироваться</Button>
          </Field>

        </FieldGroup>
      </form>
      <FieldDescription className="px-6 text-center">
        Уже есть аккаунт? <Link href="/auth/login">Войти</Link>
      </FieldDescription>
    </div>
  )
}
export default RegisterForm
