"use client"

import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { schemaRegister, SchemaRegisterT } from "@/lib/shema/shema-register";
import { zodResolver } from "@hookform/resolvers/zod";
import FieldController from "@/components/shared/auth/FieldController";
import { signUp } from "@/lib/auth-client";
import { redirect, unstable_rethrow } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";


const handleRegisterForm = async (formData: SchemaRegisterT, setLoading: Dispatch<SetStateAction<boolean>>) => {
  setLoading(true)
  try{
    const { error } = await signUp.email({
      name: formData.login,
      email: formData.email,
      password: formData.password,
    }, {
      onSuccess: async () => {
        redirect('/dashboard')
      }
    })
    if (error){
      toast.error(error.message);
    }
  } catch (e){
    unstable_rethrow(e)
  } finally{
    setLoading(false)
  }
}

const RegisterForm = () => {

  const [ isLoading, setIsLoading ] = useState(false);
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
          handleRegisterForm(formData, setIsLoading);
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
            disabled={ isLoading }
            placeholder="user"
          />
          <FieldController
            label="Email"
            name="email"
            control={ control }
            disabled={ isLoading }
            placeholder="user@mail.com"
          />
          <FieldController
            label="Пароль"
            name="password"
            control={ control }
            disabled={ isLoading }
            type="password"
          />
          <FieldController
            label="Повторите пароль"
            name="repeatPassword"
            type="password"
            control={ control }
            disabled={ isLoading }
          />
          <Field>
            <Button
              type="submit"
              className="text-base"
              disabled={ isLoading }
            >
              { isLoading && (<Spinner data-icon="inline-start" />) }
              Зарегестрироваться
            </Button>
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
