
export type TTransaction = {
  id: string;
  type: string;
  amount: string;
  currency: string;
};
export type TStat = { id: string; label: string; percentage: number };
export type TPerson = {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number;
};
