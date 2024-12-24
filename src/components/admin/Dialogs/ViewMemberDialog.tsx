"use client";

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Member } from "@/types/Member";

interface ViewMemberDialogProps {
  isOpen: boolean;
  onClose: () => void;
  member: Member;
}

const ViewMemberDialog: React.FC<ViewMemberDialogProps> = ({ isOpen, onClose, member }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose} >
      <DialogContent className="w-[94%] max-w-none md:max-w-lg lg:max-w-xl ">
        <DialogHeader>
          <DialogTitle>Member Details</DialogTitle>
          <DialogDescription>Here are the details for {member.name}.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <p><strong>Name:</strong> {member.name}</p>
          <p><strong>Country:</strong> {member.country}</p>
          <p><strong>Age:</strong> {member.age}</p>
          <p><strong>Capital:</strong> {member.capital}</p>
          <p><strong>Membership:</strong> {member.membership}</p>
          <p><strong>Summit Member:</strong> {member.summit_member ? "Yes" : "No"}</p>
        </div>
        <Button onClick={onClose} className="mt-4">Close</Button>
      </DialogContent>
    </Dialog>
  );
};

export default ViewMemberDialog;
