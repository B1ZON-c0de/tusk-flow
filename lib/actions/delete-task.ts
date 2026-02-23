"use server"

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteTask = async (taskId: string) => {
  try{
    await prisma.task.delete({
      where: {
        id: taskId,
      }
    })

  } catch (e){
    throw new Error("Не удалось удалить задачау")
  }
  revalidatePath("/dashboard")
}