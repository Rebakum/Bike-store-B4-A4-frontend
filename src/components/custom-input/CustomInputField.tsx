import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";

//  FormInput component
interface FormInputProps<T extends FieldValues> {
  fieldName: Path<T>;
  labelText: string;
  placeholderText?: string;
  inputType?: string;
  formControl: Control<T>;
}

// Generic functional component for a form input
const FormInput = <T extends FieldValues>({
  fieldName,
  labelText,
  placeholderText,
  inputType,
  formControl,
}: FormInputProps<T>) => {
  return (
    <FormField
      control={formControl}
      name={fieldName}
      render={({ field, fieldState }) => (
        <FormItem className="grid gap-2">
          {/* Label for the input */}
          <FormLabel htmlFor={fieldName}>{labelText}</FormLabel>

          <FormControl>
            {inputType === "password" ? (
              <PasswordInput
                id={fieldName}
                placeholder={placeholderText}
                autoComplete="current-password"
                {...field}
              />
            ) : (
              <Input
                id={fieldName}
                placeholder={placeholderText}
                type={inputType}
                autoComplete={inputType === "email" ? "email" : "off"}
                {...field}
              />
            )}
          </FormControl>

          {fieldState.error && (
            <FormMessage>{fieldState.error.message}</FormMessage>
          )}
        </FormItem>
      )}
    />
  );
};

export default FormInput;
