import ButtonSignOut from "@/components/shared/user/ButtonSignOut";
import UserCred from "@/components/shared/user/UserCred";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const UserInfo = () => {
  return (
    <div className="flex items-center gap-4">
      <div>
        <Suspense fallback={ <Skeleton className="h-10 w-64" /> }>
          <UserCred />
        </Suspense>

      </div>
      <ButtonSignOut />
    </div>
  )
}
export default UserInfo
