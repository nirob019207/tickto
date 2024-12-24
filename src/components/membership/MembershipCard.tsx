import { membershipPlan } from '@/types/membershipPlan';
import CheckIcon from '../icon/CheckIcon';
import ArrowLeftIcon from '../icon/ArrowLeftIcon';

type MembershipCardProps = {
  plan: membershipPlan;
};

export default function MembershipCard({ plan }: MembershipCardProps) {
  return (
    <div className="border rounded-xl p-6">
      <h2 className="text-[28px] text-[#000] font-bold mb-4">{plan.title}</h2>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-center">
        <div className="lg:w-[653px]">
          <div className="space-y-4 mb-4">
            {plan.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-[#E5E7EB] p-0.5">
                  <CheckIcon />
                </div>
                <span className='text-[16px]'>{feature}</span>
              </div>
            ))}
            <div>
              <span className="text-2xl font-bold">${plan.price}</span>
              <span className="text-gray-600 ml-1">/ month</span>
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className="ml-4">
          <button className="bg-[#0077CC] text-white lg:px-4  px-2 py-2 rounded-lg hover:bg-[#0066B3] transition-colors flex items-center">
            Continue with this
            <span className="ml-2"><ArrowLeftIcon width={15} height={14} stroke={"#FFFFFF"}/>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
