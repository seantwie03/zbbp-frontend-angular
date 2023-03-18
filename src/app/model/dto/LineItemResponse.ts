interface LineItemResponse {
  id: number;
  date: Date;
  name: string;
  plannedAmount: number;
  category: Category;
  description: string;
  lastModifiedAt: Date;
  totalTransactions: number;
  totalRemaining: number;
  transactions: TransactionResponse[];
}
