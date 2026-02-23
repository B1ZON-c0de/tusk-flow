"use client"

import { Trash } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import { deleteTask } from "@/lib/actions/delete-task";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

interface Props{
  id: string
}

const handleTaskDelete = async (taskId: string, setLoading: Dispatch<SetStateAction<boolean>>) => {
  setLoading(true);
  try{
    await deleteTask(taskId)
    toast.success("Задача успешно удалена")
  } catch (e){
    toast.error("Не получилось удалит задачу");
  } finally{
    setLoading(false);
  }

}

const DeleteButton = ({ id }: Props,) => {
  const [ isLoading, setIsLoading ] = useState(false);
  return (
    <div className="p-2 ">
      <Dialog>
        <DialogTrigger
          render={ <Button
            variant="link"
            className="text-muted-foreground  hover:text-red-500"
            disabled={ isLoading }
          >{
            isLoading ? (<Spinner data-icon="inline-start" />) : (<Trash
              size={ 20 }
            />)
          }
          </Button> }
        />
        <DialogContent>
          <DialogTitle className="text-xl font-semibold">Вы действителльно хотите удалить?</DialogTitle>
          <div className="flex justify-between items-center gap-2">
            <DialogClose
              render={ <Button
                variant="outline"
                className="text-base"
              >Отмена</Button> }
            />
            <DialogClose
              render={ <Button
                variant="destructive"
                className="text-base"
                onClick={ () => handleTaskDelete(id, setIsLoading) }
              >Удалить</Button> }
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
export default DeleteButton
