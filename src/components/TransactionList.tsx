
import { Transaction } from '@/types';

type TransactionListProps = {
  transactions: Transaction[];
};

export const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className={`flex justify-between p-2 rounded-md ${transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'}`}>
            <span>{transaction.description}</span>
            <span>{transaction.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
