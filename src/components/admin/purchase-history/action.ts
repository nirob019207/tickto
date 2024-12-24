"use server";

import { Transaction, ReceiptData } from "@/types/transaction";

export async function getReceiptData(
  transaction: Transaction
): Promise<ReceiptData> {
  // In a real application, you might fetch additional data from a database here
  return {
    transaction,
    companyName: "Your Company Name",
    companyAddress: "123 Business St, City, State 12345",
  };
}
