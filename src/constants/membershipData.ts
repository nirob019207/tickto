import { membershipPlan } from "@/types/membershipPlan";

export const membershipPlans: membershipPlan[] = [
  {
    title: 'Standard Membership',
    features: [
      'Access to our searchable directory',
      'Ability to create and view profiles',
      'Connect with other members and start meaningful conversations',
    ],
    price: 12,
  },
  {
    title: 'Business Membership',
    features: [
      'Everything in the Standard Membership',
      'Ability to list your business or service on your profile',
      'Great for entrepreneurs who want to promote their products or services to other members',
      'Enhanced visibility within the community, helping you connect with like-minded women who may need your services',
    ],
    price: 18,
  },
];
