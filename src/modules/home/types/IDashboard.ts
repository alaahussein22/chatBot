import {IUser} from './IUser'

export type IAmount = {
  quantity: string | any;
  currency: string;
};

export type IDashboard = {
  users: IUser;
  amount: IAmount,
  total_wallets: string;
  total_transactions: string;
  total_revenue:string,
  total_assets:string
};
