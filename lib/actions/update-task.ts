"use server"

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const updateStatusTask = async (newValue: boolean, taskId: string) => {
  console.log(taskId);
  try{
    await prisma.task.update({
        where: {
          id: taskId,
        },
        data: {
          completed: newValue
        }
      }
    )
  } catch (e){
    throw new Error("Не удолось изсенить статус задачи")
  }
  revalidatePath("/dashboard")

}