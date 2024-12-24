"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { SelectField } from "../form/SelectField";
import MinusIcon from "../icon/MinusIcon";
import { useDispatch } from "react-redux";
import { saveStep2Data } from "@/redux/formSlice";
import { useRouter } from "next/navigation";


const formSchema = z.object({
  destinations: z.array(
    z.object({
      travelType: z.string().min(2, "Please select a travel type"),
      month: z.string().min(2, "Month is required"),
      year: z.string().min(2, "Year is required"),
      destinationCountry: z.string().min(1, "Destination country is required"),
      destinationCity: z.string().min(1, "Destination city is required"),
    })
  ),
});



export default function Destination() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destinations: [
        {
          travelType: "",
          month: "",
          year: "",
          destinationCountry: "",
          destinationCity: "",
        },
      ],
    },
  });
  const router = useRouter();


  

  const { fields, append, remove } = useFieldArray({
    name: "destinations",
    control: form.control,
  });

  const dispatch = useDispatch();

  




  const onSubmit = (values: z.infer<typeof formSchema>) => {
    dispatch(saveStep2Data({ ...values, completed: true })); 
    router.push("/lifestyle"); 


  };

  return (
    <div className="mx-auto p-4 lg:p-8 font-sans">
      <div className="grid grid-cols-12">
        <h2 className="lg:text-[48px] text-[24px] font-[600] border-b-2 py-2 col-span-12 text-[#1D2939]">
          Destinations
        </h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
          {fields.map((field, index) => (
            <div key={field.id} className="space-y-4 rounded-lg ">
              {/* Travel Type Field */}
              <SelectField
                name={`destinations.${index}.travelType`}
                label="Travel Type (Lease Duration)"
                placeholder="Select travel type"
                form={form}
                options={["Scouting Trip (1-8 wks)"]}
              />

              {/* Travel Begins */}
              <p className="text-[#263238] text-[15px] font-[700]">Travel Begins</p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <SelectField
                  name={`destinations.${index}.month`}
                  label=""
                  placeholder="Month"
                  form={form}
                  options={[
                    "01",
                    "02",
                    "03",
                    "04",
                    "05",
                    "06",
                    "07",
                    "08",
                    "09",
                    "10",
                    "11",
                    "12",
                  ]}
                />
                <SelectField
                  name={`destinations.${index}.year`}
                  label=""
                  placeholder="Year"
                  form={form}
                  options={[
                    "2024",
                    "2025",
                    "2026",
                   
                  ]}
                />
             
              </div>

              {/* Destination Fields */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <SelectField
                  name={`destinations.${index}.destinationCountry`}
                  label="Destination Country"
                  placeholder="Select country"
                  form={form}
                  options={["Dubai"]}
                />
                <SelectField
                  name={`destinations.${index}.destinationCity`}
                  label="Destination City"
                  placeholder="Select city"
                  form={form}
                  options={["Dubai"]}
                />
              </div>

              {/* Remove Button */}
              <Button
                type="button"
                variant="ghost"
                className="text-[#E00000] text-[18px] font-[700] px-0 h-auto"
                onClick={() => remove(index)}
              >
               <MinusIcon/>
                Delete this destination
              </Button>
            </div>
          ))}

          {/* Add Another Destination Button */}
          <Button
            type="button"
            className="text-[#000000] text-[18px] font-[700] px-0 h-auto"
            variant="ghost"
            onClick={() =>
              append({
                travelType: "",
                month: "",
                year: "",
                destinationCountry: "",
                destinationCity: "",
              })
            }
          >
          

            <Plus className="text-[#000000] border-2 rounded border-black" />
            Add Another Destination
          </Button>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[#0872BA] text-white rounded-lg hover:bg-[#065a92] transition"
          >
            Continue
          </Button>
          <div>
            <span className="text-[98A2B3] text-[17px]">Need help? Click </span><span className="text-[17px] text-[#0872BA] font-[500]"> Help & Support</span>
          </div>
        </form>
      </Form>
    </div>
  );
}
