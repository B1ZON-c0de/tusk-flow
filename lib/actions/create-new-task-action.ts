"use server"

import { schemaCreateTaskT } from "@/lib/shema/schema-create-task";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";

export const createNewTaskAction = async (formData: schemaCreateTaskT) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  if (session?.user.id){
    await prisma.task.create({
      data: {
        title: formData.title,
        description: formData.description,
        priority: formData.priority,
        category: formData.category,
        userId: session?.user.id,
      }
    })
  } else throw Error("Не удалось создать задачу")
}