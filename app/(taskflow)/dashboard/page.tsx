import BaseAppHeader from "@/components/shared/base/BaseAppHeader";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Главная"
}



export default function Page(){
  return <div>
    <BaseAppHeader label="Dashboard" span=".Log" />
  </div>
}