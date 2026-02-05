import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { typesafeValues } from "@/lib/utils/typesafe-values";


interface Props<
  TForm extends FieldValues = FieldValues,
  TItems extends Record<string, string> = Record<string, string>
>{
  label: string
  name: Path<TForm>
  control: Control<TForm>;
  placeholder?: string;
  disabled?: boolean;
  items: TItems,
  itemsLabels: Record<TItems[keyof TItems], string>
}

const SelectController =
  <
    TForm extends FieldValues,
    TItems extends Record<string, string>
  >(
    {
      label,
      name,
      control,
      placeholder = "",
      disabled = false,
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
            <Select
              value={ field.value }
              onValueChange={ field.onChange }
              disabled={disabled}
              id={ name }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={ placeholder } />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  { typesafeValues(items).map((category) => (
                    <SelectItem
                      key={ category }
                      value={ category }
                    >{ itemsLabels[category] }</SelectItem>
                  )) }
                </SelectGroup>
              </SelectContent>
            </Select>
            { fieldState.invalid && (
              <FieldError errors={ [ fieldState.error ] } />
            ) }
          </Field>
        ) }
      />
    )
  }
export default SelectController
