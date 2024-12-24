import jsPDF from "jspdf";
import { ReceiptData } from "@/types/transaction";
import { formatDate, formatCurrency } from "./format";

export function generatePDF(data: ReceiptData): string {
  const { transaction, companyName, companyAddress } = data;
  const doc = new jsPDF();

  // Set font
  doc.setFont("helvetica");

  // Add company info
  doc.setFontSize(18);
  doc.text(companyName, 105, 20, { align: "center" });
  doc.setFontSize(12);
  doc.text(companyAddress, 105, 30, { align: "center" });

  // Add receipt title
  doc.setFontSize(16);
  doc.text("Receipt", 105, 50, { align: "center" });

  // Add transaction details
  doc.setFontSize(12);
  let y = 70;
  doc.text(`Transaction ID: ${transaction.id}`, 20, y);
  y += 10;
  doc.text(`Date: ${formatDate(transaction.date)}`, 20, y);
  y += 10;
  doc.text(`Customer: ${transaction.customerName}`, 20, y);
  y += 10;
  doc.text(`Email: ${transaction.customerEmail}`, 20, y);
  y += 10;
  doc.text(`Membership: ${transaction.membership}`, 20, y);
  y += 10;
  doc.text(`Amount: ${formatCurrency(transaction.amount)}`, 20, y);

  // Return the PDF as a data URL
  return doc.output("dataurlstring");
}
