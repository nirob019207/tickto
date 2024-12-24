import React from 'react';
import { DollarSignIcon,MoveIcon,UserCheck, UserIcon  } from "@/components/home/WhyChoose/CustomIcont";
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import whyChoosecenter from  '@/assets/home/whyChoosCenter.jpg'

interface FeatureCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string
  description: string
}

export const WhyChooseCard = () => {
  const AffordableHousingCard: FeatureCardProps = {
    icon: DollarSignIcon,
    title: "Affordable Housing",
    description: "Save money and travel smarter by sharing accommodations with fellow members."
  };

  const FlexibleOptionsCard: FeatureCardProps = {
    icon: MoveIcon,
    title: "Flexible Options",
    description: "From memberships to travel & lifestyle preferences – you have the power to choose."
  };

  const VerifiedProfilesCard: FeatureCardProps = {
    icon: UserCheck,
    title: "Verified Profiles",
    description: "A reliable community with verified profiles for added safety and peace of mind."
  };

  const WomenOnlySpacesCard: FeatureCardProps = {
    icon: UserIcon,
    title: "Women-Only Spaces",
    description: "Safe, supportive spaces for women to connect and thrive period."
  };

  // Render the cards individually
  return (
    <div className='mt-16 font-sans '>
      <div className="grid md:grid-cols-2 lg:gap-24 gap-16 mx-auto relative">
        <Card key="affordable-housing" className="md:rounded-br-[50px] border shadow-sm">
          <CardContent className="pt-6">
            <div className=" items-start">
              <div className="rounded-sm bg-slate-100 inline-block  p-2">
                <AffordableHousingCard.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="space-y-1">
                <h3 className="lg:text-xl text-lg font-semibold">{AffordableHousingCard.title}</h3>
                <p className="lg:text-lg text-sm">
                  {AffordableHousingCard.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card key="flexible-options"  className="md:rounded-bl-[50px] border shadow-sm">
          <CardContent className="pt-6">
            <div className="items-start">
            <div className="rounded-sm bg-slate-100 inline-block  p-2">
                <FlexibleOptionsCard.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="space-y-1">
                <h3 className="lg:text-xl text-lg font-semibold">{FlexibleOptionsCard.title}</h3>
                <p className="lg:text-lg text-sm">
                  {FlexibleOptionsCard.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card key="verified-profiles"  className="md:rounded-tr-[50px] border shadow-sm">
          <CardContent className="pt-6">
            <div className="  items-start">
            <div className="rounded-sm bg-slate-100 inline-block  p-2">
                <VerifiedProfilesCard.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="space-y-1">
                <h3 className="lg:text-xl text-lg font-semibold">{VerifiedProfilesCard.title}</h3>
                <p className="lg:text-lg text-sm">
                  {VerifiedProfilesCard.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card key="women-only-spaces"  className="md:rounded-tl-[50px] border shadow-sm">
          <CardContent className="pt-6">
            <div className="items-start">
            <div className="rounded-sm bg-slate-100 inline-block  p-2">
                <WomenOnlySpacesCard.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="space-y-1">
                <h3 className="lg:text-xl text-lg font-semibold">{WomenOnlySpacesCard.title}</h3>
                <p className="lg:text-lg text-sm">
                  {WomenOnlySpacesCard.description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Center Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 hidden md:block">
          <Image
            src={whyChoosecenter}
            alt="Expat Global Girls Logo"
            width={80}
            height={80}
            className="lg:w-full lg:h-full  object-contain"
          />
        </div>
      </div>

     
      
    </div>
  );
};
