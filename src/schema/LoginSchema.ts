import { z } from "zod";

// Zod validation schema for login
const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Enter a valid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })

});

// Type inference from schema
export type LoginFormData = z.infer<typeof LoginSchema>;
export default LoginSchema;