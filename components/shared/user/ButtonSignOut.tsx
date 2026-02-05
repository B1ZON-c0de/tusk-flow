"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";

const ButtonSignOut = () => {
  const router = useRouter();
  return (
    <Button
      size="lg"
      variant="destructive"
      className="text-sm"
      onClick={ () => signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/auth/login")
          }
        }
      }) }
    >Выйти</Button>
  )
}
export default ButtonSignOut
