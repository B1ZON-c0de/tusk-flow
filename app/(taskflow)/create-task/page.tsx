import BaseAppHeader from "@/components/shared/base/BaseAppHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Создаать новую задачу"
}

const Page = () => {
  return (
    <div>
      <BaseAppHeader label="Create New Task" span=".new" />
    </div>
  )
}
export default Page
