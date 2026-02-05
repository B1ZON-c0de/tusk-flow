import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import React from "react";
import { typesafeValues } from "@/lib/utils/typesafe-values";

interface Props<TForm extends FieldValues = FieldValues, TItems extends Record<string, string> = Record<string, string>>{
  label: string,
  name: Path<TForm>,
  control: Control<TForm>,
  disabled?: boolean,
  items: TItems,
  itemsLabels: Record<TItems[keyof TItems], string>
}

const ToggleController = <
  TForm extends FieldValues,
  TItems extends Record<string, string>
>(
  {
    label,
    name,
    control,
    disabled=false,
    items,
    itemsLabels
  }: Props<TForm, TItems>) => {
  return (
    <Controller
      name={ name }
      control={ control }
      render={ ({ field, fieldState }) => (
        <Field>
          <FieldLabel htmlFor={ name } className="text-base">
            { label }
          </FieldLabel>
          <ToggleGroup
            id={ name }
            disabled={ disabled }
            value={ field.value }
            onValueChange={ (value) => {
              field.onChange(Array.isArray(value) ? value.join() : value);
            } }
            size="default"
            variant="outline"
            spacing={ 2 }
          >

            { typesafeValues(items).map((priority) => (
              <ToggleGroupItem
                key={ priority }
                value={ priority }
                className={ cn(
                  "text-base w-[calc(100%/3-4px)]",
                  priority === "LOW" && "focus:text-green-500 focus:border-green-500",
                  priority === "MEDIUM" && "focus:text-yellow-500 focus:border-yellow-500",
                  priority === "HIGH" && "focus:text-red-500 focus:border-red-500"
                ) }
              >{ itemsLabels[priority] }</ToggleGroupItem>
            )) }
          </ToggleGroup>
          { fieldState.invalid && (
            <FieldError errors={ [ fieldState.error ] } />
          ) }
        </Field>
      ) }
    />
  )
}
export default ToggleController
