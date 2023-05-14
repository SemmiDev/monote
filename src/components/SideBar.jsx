import React, { useEffect, useState } from 'react';
import {
  DashboardIcon,
  NotificationIcon,
  PemasukanIcon,
  PembelajaranIcon,
  PengeluaranIcon,
} from './Icon';
import { useNavigate } from 'react-router-dom';
import { logout } from '../datastores/user_localstorage';

function SideBar({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: '',
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
  }, []);

  const logoutHandler = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    <section className='flex md:flex-row'>
      <div className='h-full p-3 space-y-2 w-60'>
        <div className='flex items-center p-2 space-x-4'>
          <img
            src='data:image/jpeg;base64,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'
            alt=''
            className='w-12 h-12 bg-gray-500 bg-cover rounded-full'
          />
          <div>
            <h2 className='text-lg font-semibold'>{user.username}</h2>
            <span className='flex items-center space-x-1'>
              <a
                rel='noopener noreferrer'
                href='/profile'
                className='text-xs text-gray-400 hover:underline'
              >
                View profile
              </a>
            </span>
          </div>
        </div>
        <div className='divide-y divide-gray-700'>
          <ul className='pt-2 pb-4 space-y-1 text-md'>
            <li className=' text-gray-50'>
              <a
                rel='noopener noreferrer'
                href='/dashboard'
                className='flex items-center p-2 space-x-3 rounded-md'
              >
                <DashboardIcon />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a
                rel='noopener noreferrer'
                href='/pemasukan'
                className='flex items-center p-2 space-x-3 rounded-md'
              >
                <PemasukanIcon />
                <span>Pemasukan</span>
              </a>
            </li>
            <li>
              <a
                rel='noopener noreferrer'
                href='/pengeluaran'
                className='flex items-center p-2 space-x-3 rounded-md'
              >
                <PengeluaranIcon />
                <span>Pengeluaran</span>
              </a>
            </li>
            <li>
              <a
                rel='noopener noreferrer'
                href='/pembelajaran'
                className='flex items-center p-2 space-x-3 rounded-md'
              >
                <PembelajaranIcon />
                <span>Pembelajaran</span>
              </a>
            </li>
            <li>
              <a
                rel='noopener noreferrer'
                href='/notification'
                className='flex items-center p-2 space-x-3 rounded-md'
              >
                <NotificationIcon />
                <span>Notifikasi</span>
              </a>
            </li>
          </ul>
          <ul className='pt-4 pb-2 space-y-1 text-md'>
            <li>
              <a
                onClick={logoutHandler}
                rel='noopener noreferrer'
                href='#'
                className='flex items-center p-2 space-x-3 rounded-md'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                  className='w-5 h-5 text-gray-400 fill-current'
                >
                  <path d='M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z'></path>
                  <rect width='32' height='64' x='256' y='232'></rect>
                </svg>
                <span>Keluar</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='p-5'>{children}</div>
    </section>
  );
}

export default SideBar;
