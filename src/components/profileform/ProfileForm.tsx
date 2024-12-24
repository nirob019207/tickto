"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { InputField } from "../form/InputField";
import { SelectField } from "../form/SelectField";
import { CheckboxField } from "../form/CheckboxField";
import avtarImage from '@/assets/form/prof.png'
import { useEffect, useState } from "react";
import { FileUploadField } from "../form/FileUploadField";
import { useDispatch } from "react-redux";
import { saveStep1Data } from "@/redux/formSlice";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  summitMemberId: z.string().optional(),
  month: z.string().min(1), 
  day:z.string().min(1),
  year: z.string().min(1), 
  zodiacSign: z.string(),
  country: z.string(),
  province: z.string(),
  city: z.string().min(2),
  hasRoom: z.boolean().default(false),
  avatar: z
    .instanceof(File)
    .refine((file) => file.size <= 256000, {
      message: "File must be less than 256 KB",
    })
    .refine((file) => ['image/jpeg', 'image/png'].includes(file.type), {
      message: "File must be JPEG or PNG format",
    })
    .optional(),
});


export default function ProfileForm() {

  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    return () => {
      if (avatarPreview) {
        URL.revokeObjectURL(avatarPreview); 
      }
    };
  }, [avatarPreview]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: any) => {
    dispatch(saveStep1Data({ ...values, completed: true })); 
    router.push("/destination"); 
  };
  return (
    <div className="mx-auto p-4  font-sans">
        <div className=" grid grid-cols-12">
           <h2 className="lg:text-[48px] text-[24px] font-[600] border-b-2 py-2 col-span-12 text-[#1D2939]"> My Profile</h2>
         </div>
  

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
         
        <div className="flex lg:flex-row gap-4 flex-col items-center">
  <div className="mb-4 h-[68px] w-[68px] rounded-full">
  <Image
  src={avatarPreview || avtarImage.src}
  alt="Avatar"
  width={68}
  height={68}
  className="rounded-full object-cover border-2 h-[68px] w-[68px] border-gray-300"
/>

  </div>
  <FileUploadField
    name="avatar"
    label=""
    setPreview={setAvatarPreview} 
    placeholder="You can upload images up to 256×256. Your avatar shows up in your public profile and your team notifications."
    form={form}
  />
</div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField name="firstName" label="First Name" placeholder="First Name" form={form} />
            <InputField name="lastName" label="Last Name" placeholder="Last Name" form={form} />
          </div>

          <InputField
            name="summitMemberId"
            label="Summit Member ID"
            placeholder="Type your FB name here"
            form={form}
          />

          {/* Date of Birth */}
          <p className="text-[#263238] text-[15px] font-[700]">Date of Birth</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <SelectField
              name="month"
              label=""
              placeholder="Month"
              form={form}
              options={[
                "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"
              ]}
            />
            <InputField name="day" label="" placeholder="Day" form={form} />
            <InputField name="year" label="" placeholder="Year" form={form} />
          </div>

          <SelectField
            name="zodiacSign"
            label="Zodiac Sign"
            placeholder="Select your zodiac sign"
            form={form}
            options={[
              "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius",
              "Capricorn", "Aquarius", "Pisces"
            ]}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SelectField
              name="country"
              label="Country"
              placeholder="Select country"
              form={form}
              options={["UAE"]}
            />
            <SelectField
              name="province"
              label="Province"
              placeholder="Select province"
              form={form}
              options={["Dubai"]}
            />
          </div>

          <InputField name="city" label="City" placeholder="Enter your city" form={form} />
          <CheckboxField name="hasRoom" label="I have a room available" form={form} />

          <Button
            type="submit"
            className="w-full bg-[#0872BA] text-white py-3 rounded-lg hover:bg-[#065a92] transition"
          >
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
}
