"use client"

import React, { Dispatch, SetStateAction, useState } from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { FieldGroup } from "@/components/ui/field";
import { Priority, TaskCategory } from "@/app/generated/prisma/enums";
import { TaskCategoryLabels, TaskPriorityLabels } from "@/lib/data/enum-labels";
import { Button } from "@/components/ui/button";
import { useForm, UseFormReset } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  schemaCreateTask,
  schemaCreateTaskT
} from "@/lib/shema/schema-create-task";
import FieldController from "@/components/shared/auth/FieldController";
import SelectController from "@/components/shared/create-task/SelectController";
import ToggleController from "@/components/shared/create-task/ToggleController";
import TextAreaController
  from "@/components/shared/create-task/TextAreaController";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import { createNewTaskAction } from "@/lib/actions/create-new-task-action";

const handleCreateTask = async (formData: schemaCreateTaskT, reset: UseFormReset<schemaCreateTaskT>, setLoading: Dispatch<SetStateAction<boolean>>) => {
  setLoading(true)
  try{
    await createNewTaskAction(formData);
    reset()
    toast.success("Задача успешно добавлена")
  } catch (e){
    toast.error("Ошибка добалвения задачи");
  } finally{
    setLoading(false);
  }
}

const FormCreateTask = () => {

  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  const { handleSubmit, control, reset } = useForm<schemaCreateTaskT>({
    resolver: zodResolver(schemaCreateTask),
    defaultValues: {
      title: "",
      category: "OTHER",
      priority: "LOW",
      description: ""
    }
  })
  return (
    <Card>
      <CardContent>
        <form
          id="create-task-form"
          onSubmit={ handleSubmit((formData) => handleCreateTask(formData, reset, setIsLoading)) }
        >
          <FieldGroup className="flex flex-col gap-6">
            <FieldController
              label="Имя задачи"
              name="title"
              placeholder="Заголовок задачи"
              disabled={ isLoading }
              control={ control }
            />
            <div className="flex items-center gap-4 justify-between">
              <SelectController
                label="Категория"
                name="category"
                disabled={ isLoading }
                control={ control }
                items={ TaskCategory }
                itemsLabels={ TaskCategoryLabels }
              />
              <ToggleController
                label="Приоритет"
                name="priority"
                disabled={ isLoading }
                control={ control }
                items={ Priority }
                itemsLabels={ TaskPriorityLabels }
              />
            </div>
            <TextAreaController
              label="Описание задачи"
              disabled={ isLoading }
              name="description"
              control={ control }
              placeholder="Описание задачи"
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button
          size="lg"
          form="create-task-form"
          disabled={ isLoading }
          className="text-base ml-auto"
          type="submit"
        >{ isLoading && (<Spinner data-icon="inline-start" />) }
          Создать задачу
        </Button>
      </CardFooter>
    </Card>
  )
}
export default FormCreateTask
