
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type InputFieldProps = {
  name: string;
  label: string;
  placeholder: string;
  form: any; // Form methods passed from the parent
  type?: string;
};

export const InputField = ({ name, label, placeholder, form, type = "text", ...rest }: InputFieldProps) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="text-[#263238] font-semibold">{label}</FormLabel>
        <FormControl>
          <Input
            placeholder={placeholder}
            {...field}
            type={type}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2"
            {...rest}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

