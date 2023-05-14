import React, { useEffect } from 'react';
import {
  addExpense,
  addIncome,
  getAllExpenses,
  getAllIncome,
} from '../datastores/core_localstorage';
import { formatRp } from '../utils';

function Pengeluaran() {
  const [input, setInput] = React.useState({
    date: '',
    amount: '',
    description: '',
  });

  const [data, setData] = React.useState([]);

  useEffect(() => {
    const expense = getAllExpenses();
    setData(expense);
  }, []);

  const store = () => {
    if (input.amount === '' || input.description === '') {
      alert('Mohon isi semua field');
      return;
    }

    const isValid = !isNaN(input.amount) && parseFloat(input.amount) >= 0;
    if (!isValid) {
      alert('Mohon isi field jumlah dengan angka');
      return;
    }

    input.date = new Date();
    addExpense({
      date: input.date,
      amount: input.amount,
      description: input.description,
    });

    // refresh page
    window.location.reload();
  };

  return (
    <div className='grid grid-cols-2 gap-x-5'>
      <div>
        <div className='flex flex-col max-w-md rounded-md border-gray-400/20'>
          <div className='space-y-12 ng-untouched ng-pristine ng-valid'>
            <div className='space-y-4'>
              <div>
                <label htmlFor='amount' className='block mb-2 text-sm'>
                  Total
                </label>
                <input
                  value={input.amount}
                  onChange={(e) =>
                    setInput({ ...input, amount: e.target.value })
                  }
                  type='number'
                  name='amount'
                  id='amount'
                  placeholder='100000'
                  className='w-full px-3 py-2 text-black border rounded-md'
                />
              </div>
              <div>
                <div className='flex justify-between mb-2'>
                  <label htmlFor='password' className='text-sm'>
                    Deskripsi
                  </label>
                </div>
                <label className='block'>
                  <textarea
                    value={input.description}
                    onChange={(e) =>
                      setInput({ ...input, description: e.target.value })
                    }
                    rows='3'
                    className='block w-full text-black rounded-md focus:ring focus:ring-opacity-75'
                  ></textarea>
                </label>
              </div>
            </div>
            <div className='space-y-2'>
              <div>
                <button
                  onClick={store}
                  type='button'
                  className='w-full px-8 py-3 font-semibold border rounded-md hover:border-sky-600 border-gray-500/30 '
                >
                  Tambah Pengeluaran
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='container p-2 mx-auto sm:p-4 dark:text-gray-100'>
          <div className='overflow-x-auto'>
            <table className='w-full p-6 text-sm text-left whitespace-nowrap'>
              <colgroup>
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr className='dark:bg-gray-700'>
                  <th className='p-3'>Tanggal</th>
                  <th className='p-3'>Total</th>
                  <th className='p-3'>Deskripsi</th>
                </tr>
              </thead>
              <tbody className=' dark:bg-gray-900 dark:border-gray-700'>
                {data.map((item) => (
                  <tr>
                    <td className='px-3 py-2'>
                      <span>
                        {new Date(item.date).toLocaleDateString('id-ID')}
                      </span>
                    </td>

                    <td className='px-3 py-2 text-red-300'>
                      <span>{formatRp(item.amount)}</span>
                    </td>

                    <td className='px-3 py-2'>
                      <span>{item.description}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pengeluaran;
