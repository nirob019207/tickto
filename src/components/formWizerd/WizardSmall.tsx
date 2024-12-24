import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { WizardNavSmall } from "./WizardNavSmall";

export default function WizardSmall() {
  const [currentStep, setCurrentStep] = useState("basics");

  // Access Redux state
  const { step1, step2, step3, step4, step5 } = useSelector(
    (state: RootState) => state.formData
  );

  // Steps with routes
  const steps = [
    { id: "basics", label: "Basics", route: "/basic", isCompleted: true},
    { id: "destinations", label: "Destinations", route: "/destination", isCompleted: !!step2?.completed },
    { id: "lifestyle", label: "Lifestyle", route: "/lifestyle", isCompleted: !!step3?.completed },
    { id: "mytop3", label: "MyTop3", route: "/mytop", isCompleted: !!step4?.completed },
    { id: "talking-points", label: "Talking Points", route: "/talking-points", isCompleted: !!step5?.completed },
  ];

  return (
    <div className="flex items-center justify-center w-full h-full mt-36">
      <div className="w-full max-w-[620px]">
        <WizardNavSmall steps={steps} currentStep={currentStep} />
      </div>
    </div>
  );
}
