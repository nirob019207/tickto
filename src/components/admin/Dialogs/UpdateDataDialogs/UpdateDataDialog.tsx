"use client";

import React, { useState } from "react";
import {
  useForm,
  Controller,
  useFieldArray,
  SubmitHandler,
} from "react-hook-form";

interface UpdateDataDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: MembershipPlanType) => void;
  initialData: MembershipPlanType;
}

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MdOutlineDone } from "react-icons/md";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { LiaPlusSolid } from "react-icons/lia";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { MembershipPlanType } from "@/types/MembershipPlanType";
import { membershipSchema } from "@/schema/MembershipPlanSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const UpdateDataDialog = ({
  isOpen,
  onClose,
  initialData,
  onSubmit,
}: UpdateDataDialogProps) => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<MembershipPlanType>({
    defaultValues: initialData,
    resolver: zodResolver(membershipSchema),
  });

  const [features, setfeatures] = useState(initialData.features);
  const [show, setShow] = useState(false);

  // console.log(features);

  const handleAddFeatures = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const inputElement = document.getElementById(
      "featureInput"
    ) as HTMLInputElement | null;

    if (inputElement) {
      const data = inputElement.value;
      if (data.length <= 5) {
        return toast.error("At least 5 charcters");
      }
      setfeatures([data,...features]);
      inputElement.value = "";
    }
  };

  const handleShow = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setShow(true);
  };

  const onsubmit: SubmitHandler<MembershipPlanType> = (data) => {
    const mPandata = {
      title: data.title,
      price: data.price,
      features: features,
    };

    console.log(mPandata);
    onClose();
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <div className="absolute top-3 right-3" onClick={onClose}>
          <X className="h-4 w-4 cursor-pointer" />
        </div>
        <DialogHeader>
          <DialogTitle className="text-[30px] font-semibold mb-[18.5px]">
            Update Membership Plan
          </DialogTitle>
          <form onSubmit={handleSubmit(onsubmit)} className="space-y-5">
            {/* Title Field */}
            <div className="flex flex-col gap-1">
              <label>Title</label>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Enter title"
                    className="border p-2 rounded"
                  />
                )}
              />
              {errors.title && (
                <span className="text-red-500 text-sm">
                  {errors.title.message}
                </span>
              )}
            </div>

            {/* Features Section */}
            {/* Features */}
            <div className="flex flex-col gap-2 md:mt-0 mt-5">
              {features.map((feature, idx) => (
                <div className="flex items-center gap-1" key={idx}>
                  <div className="flex items-center justify-center bg-[#D9D9D9] rounded-full p-[2px]">
                    <MdOutlineDone className="text-sm" />
                  </div>
                  <p className="md:text-sm text-xs">{feature}</p>
                </div>
              ))}
            </div>

            {/* Add New Membership Plan Link */}
            {show && (
              <div className={`flex gap-2 items-center `}>
                <Input
                  className=""
                  placeholder="Add new feature"
                  id="featureInput"
                />
                <Button
                  onClick={(e) => handleAddFeatures(e)}
                  className="px-[12px] py-[6px]"
                >
                  <LiaPlusSolid/>
                </Button>
              </div>
            )}
            <Button
              variant={"ghost"}
              className="flex items-center gap-2 mt-5 text-[#0872BA]"
              onClick={(e) => handleShow(e)}
            >
              <LiaPlusSolid className="" /> Add new membership plan
            </Button>

            {/* Price Field */}
            <div className="flex flex-col gap-1 mt-3">
              <label>Price</label>
              <Controller
                name="price"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="number"
                    placeholder="Enter price"
                    className="border p-2 rounded"
                  />
                )}
              />
              {errors.price && (
                <span className="text-red-500 text-sm">
                  {errors.price.message}
                </span>
              )}
            </div>

            {/* Submit and Cancel Buttons */}
            <div className="flex justify-center items-center gap-4 mt-5">
              <Button
                type="button"
                onClick={onClose}
                className="bg-gray-500 text-white px-6 py-2 rounded-full"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-full"
              >
                Submit
              </Button>
            </div>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateDataDialog;
