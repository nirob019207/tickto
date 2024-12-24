"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { SelectField } from "../form/SelectField";
import { InfoIcon } from 'lucide-react';
import { saveStep4Data } from "@/redux/formSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";


const formSchema = z.object({
  personality_1: z.string().min(1, "Please select a personality trait"),
  personality_2: z.string().min(1, "Please select a personality trait"),
  personality_3: z.string().min(1, "Please select a personality trait"),
  philosophies_1: z.string().min(1, "Please select a philosophy"),
  philosophies_2: z.string().min(1, "Please select a philosophy"),
  philosophies_3: z.string().min(1, "Please select a philosophy"),
  goals_1: z.string().min(1, "Please select a goal"),
  goals_2: z.string().min(1, "Please select a goal"),
  goals_3: z.string().min(1, "Please select a goal"),
  hobbies_1: z.string().min(1, "Please select a hobby"),
  hobbies_2: z.string().min(1, "Please select a hobby"),
  hobbies_3: z.string().min(1, "Please select a hobby"),
  social_groups_1: z.string().min(1, "Please select a social group"),
  social_groups_2: z.string().min(1, "Please select a social group"),
  social_groups_3: z.string().min(1, "Please select a social group"),
  foodie_fan_1: z.string().min(1, "Please select a food preference"),
  foodie_fan_2: z.string().min(1, "Please select a food preference"),
  foodie_fan_3: z.string().min(1, "Please select a food preference"),
  music_tastes_1: z.string().min(1, "Please select a music taste"),
  music_tastes_2: z.string().min(1, "Please select a music taste"),
  music_tastes_3: z.string().min(1, "Please select a music taste"),
});


export default function MyTop3(){
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    
  });
    const router = useRouter();
const dispatch=useDispatch()
  const onSubmit = (values: z.infer<typeof formSchema>) => {
  dispatch(saveStep4Data({ ...values, completed: true })); 
    router.push("/talking-points"); 
   
   };


  const renderSelectFields = (name: string, options: string[]) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[1, 2, 3].map((num) => (
        <SelectField
          key={`${name}_${num}`}
          name={`${name}_${num}`}
          label=""
          placeholder={options[num - 1]}
          form={form}
          options={options}
        />
      ))}
    </div>
  );

  return (
    <div className="mx-auto p-4 lg:p-8 font-sans">
      <div className="border-b-2 pb-4 mb-6">
        <h2 className="text-[#1D2939] text-2xl lg:text-[48px] font-semibold">My Top 3&aposs</h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {[
            { name: "personality", label: "Personality", options: ["Adventurous", "Easygoing", "Humorous"] },
            { name: "philosophies", label: "Philosophies", options: ["Ambitious", "Idealistic", "Impulsive"] },
            { name: "goals", label: "Goals", options: ["Career", "Community Building", "Community Service"] },
            { name: "hobbies", label: "Hobbies", options: ["Animals", "Art", "Automobiles"] },
            { name: "social_groups", label: "Social Groups", options: ["Average", "Country folks", "Creative folks"] },
            { name: "foodie_fan", label: "Foodie Fan", options: ["Asian Cuisine", "BBQ", "Caribbean Cuisine"] },
            { name: "music_tastes", label: "Music Tastes", options: ["Alternative", "Classical", "Blues"] },
          ].map(({ name, label, options }) => (
            <div key={name} className="space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="text-[#263238] text-[15px] font-bold">{label}</h3>
                <InfoIcon className="w-4 h-4 text-blue-500" />
              </div>
              {renderSelectFields(name, options)}
            </div>
          ))}

          <Button
            type="submit"
            className="w-full bg-[#0872BA] text-white py-3 rounded-lg hover:bg-[#065a92] transition"
          >
            Continue
          </Button>
        </form>
      </Form>

      <div className="mt-4 text-start">
        <a href="#" className="text-[#0872BA] hover:underline text-sm">
          Need help? Click Help & Support
        </a>
      </div>
    </div>
  );
}

