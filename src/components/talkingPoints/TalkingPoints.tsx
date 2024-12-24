"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { SelectField } from "../form/SelectField";
import { TextareaField } from "../form/TextAreaField";
import talkingPointsSchema from "@/schema/talkingPointsSchema";
import { talkingPointsData } from "@/constants/talkingPointsData";
import { useDispatch } from "react-redux";
import { saveStep5Data } from "@/redux/formSlice";
import { useRouter } from "next/navigation";



export default function TalkingPoints() {
  const form = useForm<z.infer<typeof talkingPointsSchema>>({
    resolver: zodResolver(talkingPointsSchema),
  });
  const dispatch = useDispatch();
  const router = useRouter();






  const onSubmit = (values: z.infer<typeof talkingPointsSchema>) => {
    dispatch(saveStep5Data({ ...values, completed: true })); 
    router.push("/"); 

  };

  return (
    <div className="mx-auto p-4 lg:p-8 font-sans ">
      <div className="border-b-2 pb-4 mb-6">
        <h2 className="text-[#1D2939] text-2xl lg:text-[48px] font-semibold">Talking Points</h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {talkingPointsData     .map((field) => (
            <div key={field.name} className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
              <p className="text-[#263238] text-[17px] font-[600] ">{field.question}</p>
              <SelectField
                name={field.name}
                label=""
                placeholder={field.placeholder}
                form={form}
                options={[field.placeholder]}
              />
            </div>
          ))}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            <p className="text-[#263238] text-[17px] font-[600] ">How would you describe your Religious/Spiritual beliefs and practices?</p>
            <TextareaField
              name="religious_beliefs"
              label=""
              placeholder="Please share here..."
              form={form}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            <p className="text-[#263238] text-[17px] font-[600]">Do you have any allergies? If so, please list them here: (Ex. Airborne allergies, Foods, Nuts, Latex, Pets/Animals, insects, etc.)</p>
            <TextareaField
              name="allergies"
              label=""
              placeholder="Please share here..."
              form={form}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
            <p className="text-[#263238] text-[17px] font-[600] ">Anything Else?</p>
            <TextareaField
              name="additional_info"
              label=""
              placeholder="Please share any other details such as: must haves, dealbreakers, etc."
              form={form}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#0872BA] text-white py-3 rounded-lg hover:bg-[#065a92] transition"
          >
            Save my profile
          </Button>
        </form>
      </Form>

      <div className="mt-4 text-left">
        <p className="text-sm text-gray-600">
          Need help? Click{" "}
          <a href="#" className="text-[#0872BA] hover:underline">
            Help & Support
          </a>
        </p>
      </div>
    </div>
  );
}

