import React, { useEffect, useState } from 'react';
import {
  getAllExpenses,
  getAllIncome,
  getBalance,
  totalExpense,
  totalIncome,
} from '../datastores/core_localstorage';
import { formatRp } from '../utils';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

function Dashboard() {
  const [balance, setBalance] = React.useState(0);
  const [expense, setExpense] = React.useState(0);
  const [income, setIncome] = React.useState(0);

  const [parsedIncomes, setParsedIncome] = useState([]);
  const [parsedExpenses, setParsedExpenses] = useState([]);

  useEffect(() => {
    const incomes = JSON.parse(localStorage.getItem('income')) || [];
    const parsedIncomesData = incomes.map((income, index) => ({
      ...income,
      id: index + 1,
    }));
    setParsedIncome(parsedIncomesData);

    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const parsedExpensesData = expenses.map((expense, index) => ({
      ...expense,
      id: index + 1,
    }));
    setParsedExpenses(parsedExpensesData);
  }, []);

  useEffect(() => {
    setBalance(getBalance());
    setIncome(totalIncome());
    setExpense(totalExpense());
  }, []);

  return (
    <div className='flex flex-col gap-y-2'>
      <section className=''>
        <div className='container grid grid-cols-3 gap-6 mx-auto rounded-xl border-gray-400/20'>
          <div className='flex p-4 space-x-4 rounded-lg md:space-x-6'>
            <div className='flex justify-center p-2 align-middle rounded-lg sm:p-4'></div>
            <div className='flex flex-col justify-center align-middle'>
              <p className='text-3xl font-semibold leading-none text-sky-500'>
                {formatRp(balance)}
              </p>
              <p className='mt-2 capitalize'>Total Saldo</p>
            </div>
          </div>
          <div className='flex p-4 space-x-4 rounded-lg md:space-x-6'>
            <div className='flex justify-center p-2 align-middle rounded-lg sm:p-4'></div>
            <div className='flex flex-col justify-center align-middle'>
              <p className='text-3xl font-semibold leading-none text-green-500'>
                {formatRp(income)}
              </p>
              <p className='mt-2 capitalize'>Total Pemasukan</p>
            </div>
          </div>
          <div className='flex p-4 space-x-4 rounded-lg md:space-x-6'>
            <div className='flex justify-center p-2 align-middle rounded-lg sm:p-4'></div>
            <div className='flex flex-col justify-center align-middle'>
              <p className='text-3xl font-semibold leading-none text-red-500'>
                {formatRp(expense)}
              </p>
              <p className='mt-2 capitalize'>Total Pengeluaran</p>
            </div>
          </div>
        </div>
      </section>
      <div className='flex flex-col p-12 gap-y-2'>
        <div>
          <div className='flex flex-col flex-1 p-4 border-l-8border-violet-400'>
            <span className='text-2xl text-emerald-500'>Grafik Pemasukan</span>
          </div>
          <LineChart width={700} height={300} data={parsedIncomes}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='id' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type='monotone'
              dataKey='amount'
              stroke='#8884d8'
              activeDot={{ r: 15 }}
            />
          </LineChart>
        </div>{' '}
        <div>
          <div className='flex flex-col flex-1 p-4 border-l-8border-violet-400'>
            <span className='text-2xl text-red-500'>Grafik Pengeluaran</span>
          </div>
          <LineChart width={700} height={300} data={parsedExpenses}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='id' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type='monotone'
              dataKey='amount'
              stroke='#8884d8'
              activeDot={{ r: 15 }}
            />
          </LineChart>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
