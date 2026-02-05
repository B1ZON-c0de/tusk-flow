import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const UserCred = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  if (!session) return null;
  return (
    <>
      <h2 className="text-right">{ session?.user.name }</h2>
      <p className="text-muted-foreground">{ session?.user.email }</p>
    </>
  )
}
export default UserCred
