import BaseAppHeader from "@/components/shared/base/BaseAppHeader";
import { Metadata } from "next";
import FormCreateTask from "@/components/shared/create-task/FormCreateTask";

export const metadata: Metadata = {
  title: "Создаать новую задачу"
}

const Page = () => {
  return (
    <div className="flex flex-col gap-10">
      <BaseAppHeader label="Create New Task" span=".new" />
      <FormCreateTask />
    </div>
  )
}
export default Page
