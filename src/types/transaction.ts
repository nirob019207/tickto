export interface Transaction {
  id: string;
  date: string;
  membership: string;
  amount: number;
  customerName: string;
  customerEmail: string;
}

export interface ReceiptData {
  transaction: Transaction;
  companyName: string;
  companyAddress: string;
}

