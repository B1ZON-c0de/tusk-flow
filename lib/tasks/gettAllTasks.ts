import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";

export const getAllTasks = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  if (session?.user.id){
    return prisma.task.findMany({
      where: { userId: session.user.id },
    });
  } else{
    throw new Error("Не удалось получить задачи")
  }
}