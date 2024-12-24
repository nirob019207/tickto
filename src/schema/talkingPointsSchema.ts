import { z } from "zod";

 const talkingPointsSchema = z.object({
    cleanliness: z.string().min(1, "Please select an option"),
    cohabitation: z.string().min(1, "Please select an option"),
    housemate_relationship: z.string().min(1, "Please select an option"),
    financial_habits: z.string().min(1, "Please select an option"),
    communication_style: z.string().min(1, "Please select an option"),
    pet_friendly: z.string().min(1, "Please select an option"),
    hosting_habits: z.string().min(1, "Please select an option"),
    typical_routine: z.string().min(1, "Please select an option"),
    sleep_schedule: z.string().min(1, "Please select an option"),
    alcohol_consumption: z.string().min(1, "Please select an option"),
    tobacco_usage: z.string().min(1, "Please select an option"),
    drug_usage: z.string().min(1, "Please select an option"),
    screening_reports: z.string().min(1, "Please select an option"),
    health_discussions: z.string().min(1, "Please select an option"),
    religious_beliefs: z.string().optional(),
    allergies: z.string().optional(),
    additional_info: z.string().optional(),
  });
  export default talkingPointsSchema;