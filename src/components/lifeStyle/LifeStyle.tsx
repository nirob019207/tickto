"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { InputField } from "../form/InputField";
import { SelectField } from "../form/SelectField";
import { CheckboxField } from "../form/CheckboxField";
import { Plus, Trash2 } from 'lucide-react';
import { TextareaField } from "../form/TextAreaField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveStep3Data } from "@/redux/formSlice";
import { useRouter } from "next/navigation";
import PlusIcon from "../icon/PlusIcon";


const formSchema = z.object({
  maximum_monthly_rent: z.string().min(1, "Maximum monthly rent is required"),
  marital_status: z.string().min(1, "Marital status is required"),
  ethnicity: z.string().min(1, "Ethnicity is required"),
  religion: z.string().min(1, "Religion is required"),
  children: z.string().min(1, "Please select an option"),
  pets: z.string().min(1, "Please select an option"),
  education: z.string().min(1, "Education is required"),
  employment_status: z.string().min(1, "Employment status is required"),
  has_business: z.boolean().default(false),
  industry: z.string().optional(),
  company_name: z.string().optional(),
  description_of_services: z.string().optional(),
  facebook: z.string().optional().or(z.literal("")),
  instagram: z.string().optional().or(z.literal("")),
  youtube: z.string().optional().or(z.literal("")),
  website: z.string().optional().or(z.literal("")),
  linkedin: z.string().optional().or(z.literal("")),
});


export default function LifeStyle(){
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      has_business: false,
    }
  });
  const router = useRouter();

  const dispatch=useDispatch()

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    dispatch(saveStep3Data({ ...values, completed: true })); 
       router.push("/mytop"); 

  };
  const [socialLinks, setSocialLinks] = useState<{
    facebook: boolean;
    instagram: boolean;
    website: boolean;
    linkedin: boolean;
    youtube: boolean;
  }>({
    facebook: false,
    instagram: false,
    website: false,
    linkedin: false,
    youtube: false,
  });
 
  const toggleLinkVisibility = (link: keyof typeof socialLinks) => {
    setSocialLinks(prev => ({ ...prev, [link]: !prev[link] }));
  };

  const hasBusiness = form.watch("has_business");
  const renderSocialLink = (label: string, name: keyof typeof socialLinks) => {
    return (
      <div className="relative">
        <div className="flex items-center gap-2 mb-2">
          
          <span     onClick={() => toggleLinkVisibility(name)}>
          <PlusIcon
            className="text-[#0872BA] border-2 border-[#0872BA] rounded-full  cursor-pointer"
        
          />

          </span>
          <div className="text-black">{label}</div>
        </div>

        {socialLinks[name] && (
          <div className="grid grid-cols-12 gap-4 d-flex justify-center">
            <div className="col-span-6">
              <InputField
                name={name}
                label=""
                placeholder={`${label} link`}
                form={form}
              />
            </div>
            <div className="col-span-6 flex justify-start items-center">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => toggleLinkVisibility(name)}
                className="border-[#D0D5DD] border-[1px] text-red-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M11.6673 5.83333H16.334C16.334 5.21449 16.0882 4.621 15.6506 4.18342C15.213 3.74583 14.6195 3.5 14.0007 3.5C13.3818 3.5 12.7883 3.74583 12.3507 4.18342C11.9132 4.621 11.6673 5.21449 11.6673 5.83333ZM9.91732 5.83333C9.91732 5.2971 10.0229 4.76612 10.2281 4.27071C10.4333 3.7753 10.7341 3.32515 11.1133 2.94598C11.4925 2.56681 11.9426 2.26603 12.438 2.06083C12.9334 1.85562 13.4644 1.75 14.0007 1.75C14.5369 1.75 15.0679 1.85562 15.5633 2.06083C16.0587 2.26603 16.5088 2.56681 16.888 2.94598C17.2672 3.32515 17.568 3.7753 17.7732 4.27071C17.9784 4.76612 18.084 5.2971 18.084 5.83333H24.7923C25.0244 5.83333 25.2469 5.92552 25.411 6.08961C25.5751 6.25371 25.6673 6.47627 25.6673 6.70833C25.6673 6.9404 25.5751 7.16296 25.411 7.32705C25.2469 7.49115 25.0244 7.58333 24.7923 7.58333H23.2523L21.8873 21.7128C21.7826 22.7955 21.2784 23.8003 20.4729 24.5313C19.6675 25.2623 18.6187 25.6671 17.531 25.6667H10.4703C9.38283 25.6668 8.33427 25.2619 7.52909 24.5309C6.72392 23.7999 6.21984 22.7953 6.11515 21.7128L4.74898 7.58333H3.20898C2.97692 7.58333 2.75436 7.49115 2.59027 7.32705C2.42617 7.16296 2.33398 6.9404 2.33398 6.70833C2.33398 6.47627 2.42617 6.25371 2.59027 6.08961C2.75436 5.92552 2.97692 5.83333 3.20898 5.83333H9.91732ZM12.2507 11.375C12.2507 11.1429 12.1585 10.9204 11.9944 10.7563C11.8303 10.5922 11.6077 10.5 11.3757 10.5C11.1436 10.5 10.921 10.5922 10.7569 10.7563C10.5928 10.9204 10.5007 11.1429 10.5007 11.375V20.125C10.5007 20.3571 10.5928 20.5796 10.7569 20.7437C10.921 20.9078 11.1436 21 11.3757 21C11.6077 21 11.8303 20.9078 11.9944 20.7437C12.1585 20.5796 12.2507 20.3571 12.2507 20.125V11.375ZM16.6257 10.5C16.8577 10.5 17.0803 10.5922 17.2444 10.7563C17.4085 10.9204 17.5007 11.1429 17.5007 11.375V20.125C17.5007 20.3571 17.4085 20.5796 17.2444 20.7437C17.0803 20.9078 16.8577 21 16.6257 21C16.3936 21 16.171 20.9078 16.0069 20.7437C15.8428 20.5796 15.7507 20.3571 15.7507 20.125V11.375C15.7507 11.1429 15.8428 10.9204 16.0069 10.7563C16.171 10.5922 16.3936 10.5 16.6257 10.5ZM7.85699 21.5448C7.91991 22.1943 8.22244 22.797 8.70558 23.2355C9.18872 23.674 9.81786 23.9168 10.4703 23.9167H17.531C18.1834 23.9168 18.8126 23.674 19.2957 23.2355C19.7789 22.797 20.0814 22.1943 20.1443 21.5448L21.4953 7.58333H6.50598L7.85699 21.5448Z" fill="#FF0000"/>
</svg>
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="mx-auto p-4 lg:p-8 font-sans ">
      <div className="border-b-2 pb-4 mb-6">
        <h2 className="text-[#1D2939] text-2xl lg:text-[48px] font-semibold">Lifestyle</h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Basic Information */}
          <InputField
            name="maximum_monthly_rent"
            label="Maximum monthly rent"
            placeholder="Enter your monthly budget"
            form={form}
          />

          <SelectField
            name="marital_status"
            label="Marital Status"
            placeholder="Select"
            form={form}
            options={["Unmarried", "Married", "Divorced"]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <SelectField
              name="ethnicity"
              label="Ethnicity"
              placeholder="Chinese"
              form={form}
              options={["Chinese", "Bangladesh", "Pakistan"]}
            />
            <SelectField
              name="religion"
              label="Religion/Spirituality"
              placeholder="Select"
              form={form}
              options={["Christianity", "Islam", "Buddhism", "Hinduism"]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <SelectField
              name="children"
              label="Children"
              placeholder="Select"
              form={form}
              options={["No", "Yes"]}
            />
            <div>
              <div className="flex items-center gap-1">
                <span className="text-[#263238] font-semibold">Pets</span>
                <span className="text-blue-600 cursor-help" title="Information about pets">ⓘ</span>
              </div>
              <SelectField
                name="pets"
                label=""
                placeholder="Select"
                form={form}
                options={["No", "Yes"]}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <SelectField
              name="education"
              label="Education"
              placeholder="Some high school"
              form={form}
              options={["Some high school", "High school", "College", "University"]}
            />
            <SelectField
              name="employment_status"
              label="Employment Status"
              placeholder="Full time"
              form={form}
              options={["Full time", "Part time", "Self-employed", "Unemployed"]}
            />
          </div>

          <CheckboxField
            name="has_business"
            label="Do you own or operate a business?"
            form={form}
          />

          {/* Business Details */}
          {hasBusiness && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
              <SelectField
                  name="industry"
                  label="Industry"
                  placeholder="IT"
                  form={form}
                  options={["IT", "Healthcare", "Education", "Other"]}
                />
                <p className="text-[14px] text-[#263238] font-[500] mt-1">
                    <a href="mailto:admin@example.com" className="text-[#0872BA]">Email Admin</a> to request an unlisted industry
                  </p>
              </div>
                  
                <div>
                  <InputField
                    name="company_name"
                    label="Company Name"
                    placeholder="IT Meta Solution"
                    form={form}
                  />
                
                </div>
              </div>

              <TextareaField
                name="description_of_services"
                label="Description of Services"
                placeholder="Describe your services..."
                form={form}
              />

              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  <span className="text-[#263238] font-semibold">Visit Us Online</span>
                  <span className="text-blue-600 cursor-help" title="Your online presence">ⓘ</span>
                </div>

                {/* Facebook Section */}
             
                {/* Render social media link sections */}
                {renderSocialLink("Facebook", "facebook")}
                {renderSocialLink("Instagram", "instagram")}
                {renderSocialLink("Website", "website")}
                {renderSocialLink("LinkedIn", "linkedin")}
                {renderSocialLink("YouTube", "youtube")}

              

             

               
              </div>

            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[#0872BA] text-white py-6 rounded-lg hover:bg-[#065a92] transition"
          >
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
}
