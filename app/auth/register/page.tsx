import { Metadata } from "next";
import RegisterForm from "@/components/shared/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Регистрация"
}

const Page = () => {
  return (
    <RegisterForm />
  )
}
export default Page
