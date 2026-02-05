import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface Props<T extends FieldValues = FieldValues>{
  label: string;
  name: Path<T>;
  control: Control<T>;
  type?: "text" | "password";
  placeholder?: string;
  disabled?: boolean;
}

const FieldController = <T extends FieldValues>(
  {
    name,
    label,
    control,
    placeholder = "",
    type = "text",
    disabled = false,
  }
  : Props<T>) => {
  return (
    <Controller
      name={ name }
      control={ control }
      render={ ({ field, fieldState }) => (
        <Field data-invalid={ fieldState.invalid }>
          <FieldLabel
            htmlFor={ field.name }
            className="text-base"
          >{ label }</FieldLabel>
          <Input
            id={ field.name }
            { ...field }
            type={ type }
            disabled={ disabled }
            placeholder={ placeholder }
            aria-invalid={ fieldState.invalid }
          />
          { fieldState.invalid && (
            <FieldError errors={ [ fieldState.error ] } />
          ) }
        </Field>
      ) }
    />
  )
}
export default FieldController
