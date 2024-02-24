export type UserLogin = {
  email: string;
  password: string;
};

export type UserRegistration = {
  name: string;
  email: string;
  password: string;
  acceptedTOC: boolean;
  subscriptionPlan: string;
};
