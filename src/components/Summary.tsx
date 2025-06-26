
import { Transaction } from '@/types';

type SummaryProps = {
  transactions: Transaction[];
};

export const Summary = ({ transactions }: SummaryProps) => {
  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Summary</h2>
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-medium">Total Income</h3>
          <p className="text-green-500">{totalIncome}</p>
        </div>
        <div>
          <h3 className="text-lg font-medium">Total Expense</h3>
          <p className="text-red-500">{totalExpense}</p>
        </div>
        <div>
          <h3 className="text-lg font-medium">Balance</h3>
          <p>{balance}</p>
        </div>
      </div>
    </div>
  );
};
