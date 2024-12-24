"use client";

import { Button } from "@/components/ui/button";
import { MembershipPlanType } from "@/types/MembershipPlanType";
import React, { useState } from "react";
import { LiaEdit } from "react-icons/lia";
import { MdOutlineDone } from "react-icons/md";
import UpdateDataDialog from "../Dialogs/UpdateDataDialogs/UpdateDataDialog";
import NewMembershipPlanDialog from "../Dialogs/UpdateDataDialogs/NewMembershipPlanDialog";

interface props {
  membership: MembershipPlanType;
}

const MembershipCard = ({ membership }: props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Handle opening and closing of the dialog
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const handleUpdateSubmit = (updatedData: any) => {
    console.log("Updated Data:", updatedData);
    closeDialog();
  };





  return (
    <div className="card border rounded-lg mt-4 p-3">
      <div className="flex gap-2 justify-between flex-shrink-0">
        <p className="md:text-[20px] text-lg">{membership.title}</p>
        <Button
          variant={"outline"}
          className="flex items-center gap-2"
          onClick={openDialog}
        >
          <LiaEdit />
          Update
        </Button>
      </div>

      {/* Features */}
      <div className="flex flex-col gap-2 md:mt-0 mt-5">
        {membership.features.map((feature, idx) => (
          <div className="flex items-center gap-1" key={idx}>
            <div className="flex items-center justify-center bg-[#D9D9D9] rounded-full p-[2px]">
              <MdOutlineDone className="text-sm" />
            </div>
            <p className="md:text-sm text-xs">{feature}</p>
          </div>
        ))}
      </div>

      {/* Price */}
      <p className="pt-5 text-[24px] flex items-center gap-1">
        #{membership.price}{" "}
        <span className="text-[16px] content-center"> /month</span>
      </p>

      {/* Update Membership Plan Dialog */}
      <UpdateDataDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        onSubmit={handleUpdateSubmit}
        initialData={{
          id: membership.id,
          title: membership.title,
          features: membership.features,
          price: membership.price,
        }}
      />

    
    </div>
  );
};

export default MembershipCard;
