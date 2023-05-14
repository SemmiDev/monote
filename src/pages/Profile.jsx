import React, { useEffect, useState } from 'react';

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = localStorage.getItem('user');
    setUser(JSON.parse(user));
  }, []);

  return (
    <div className='flex flex-col max-w-md p-6 text-black rounded-md sm:p-10'>
      <div className='mb-8 text-center'>
        <p className='text-white text-md'>Ubah username dan password anda</p>
      </div>
      <div className='space-y-12 ng-untouched ng-pristine ng-valid'>
        <div className='space-y-4'>
          <div>
            <label for='username' className='block mb-2 text-sm text-white'>
              Username
            </label>
            <input
              type='text'
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              name='username'
              id='username'
              placeholder='abdurahman'
              className='w-full px-3 py-2 text-black border border-gray-700 rounded-md'
            />
          </div>
          <div>
            <div className='flex justify-between mb-2'>
              <label for='password' className='text-sm text-white'>
                Password
              </label>
            </div>
            <input
              type='text'
              value={user.password}
              name='password'
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              id='password'
              placeholder='*****'
              className='w-full px-3 py-2 text-black border border-gray-700 rounded-md'
            />
          </div>
        </div>
        <div className='space-y-2'>
          <div>
            <button
              type='button'
              onClick={() => {
                localStorage.setItem('user', JSON.stringify(user));
                alert('Berhasil mengubah data');
              }}
              className='w-full px-8 py-3 font-semibold text-gray-900 rounded-md bg-violet-400'
            >
              Simpan perubahan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
