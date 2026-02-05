import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

interface Props<T extends FieldValues = FieldValues>{
  label: string
  name: Path<T>,
  control: Control<T>,
  placeholder?: string,
  disabled?: boolean
}

const TextAreaController = <T extends FieldValues>(
  {
    label,
    name,
    control,
    placeholder = "",
    disabled = false,
  }: Props<T>) => {
  return (
    <Controller
      name={ name }
      control={ control }
      render={ ({ field,fieldState }) => (
        <Field>
          <FieldLabel
            htmlFor={ name }
            className="text-base"
          >{ label }</FieldLabel>
          <Textarea
            id={ name }
            disabled={ disabled }
            { ...field }
            placeholder={ placeholder }
            className="resize-none"
            aria-invalid={fieldState.invalid}
          />
          { fieldState.invalid && (
            <FieldError errors={ [ fieldState.error ] } />
          ) }
        </Field>
      ) }
    />
  )
}
export default TextAreaController
