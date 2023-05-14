import React, { useEffect, useState } from 'react';

function Notification() {
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    const now = new Date();
    let allIncomesToday = JSON.parse(localStorage.getItem('income'));
    if (!allIncomesToday) {
      allIncomesToday = [];
    }

    allIncomesToday.filter((income) => {
      const incomeDate = new Date(income.date);
      return (
        incomeDate.getDate() === now.getDate() &&
        incomeDate.getMonth() === now.getMonth() &&
        incomeDate.getFullYear() === now.getFullYear()
      );
    });
    if (allIncomesToday.length == 0) {
      setNotification(true);
    }
  }, []);

  return (
    <div className='flex items-center p-6 space-x-4 text-gray-100 bg-gray-900 rounded-md'>
      <div className='flex items-center self-stretch justify-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='w-10 h-10'
        >
          <path
            fillRule='evenodd'
            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
            clipRule='evenodd'
          ></path>
        </svg>
      </div>
      {notification ? (
        <span>Ups hari ini kamu belum ada pemasukan :)</span>
      ) : (
        <span>Tidak ada notifikasi</span>
      )}
    </div>
  );
}

export default Notification;
