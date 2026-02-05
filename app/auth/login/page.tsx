import LoginForm from "@/components/shared/auth/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вход"
}


const Page = () => {

  return (
    <LoginForm />
  )
}
export default Page
