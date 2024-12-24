

import * as z from "zod";

export const membershipSchema = z.object({
  title: z.string().nonempty("Title is required"),
  price: z.string().min(0, "Price must be a positive number"),
  features: z
    .array(z.string().nonempty("Feature cannot be empty"))
    .min(1, "At least one feature is required"),
});

export type Membership = z.infer<typeof membershipSchema>;
