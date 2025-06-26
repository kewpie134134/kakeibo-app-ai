import { useState, useEffect } from 'react';
import { Transaction } from '@/types';
import { TransactionForm } from '@/components/TransactionForm';
import { TransactionList } from '@/components/TransactionList';
import { Summary } from '@/components/Summary';

const HomePage = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const storedTransactions = localStorage.getItem('transactions');
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction: Omit<Transaction, 'id'>) => {
    const newTransaction = { ...transaction, id: new Date().toISOString() };
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Kakeibo App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <TransactionForm onAddTransaction={addTransaction} />
        </div>
        <div>
          <Summary transactions={transactions} />
          <TransactionList transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;