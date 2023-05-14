import { getDataFromLocalStorage, setDataToLocalStorage } from './localstorage';

export function login(username, password) {
  const user = getDataFromLocalStorage('user');
  if (user.username === username && user.password === password) {
    setDataToLocalStorage('loggedInUser', true);
    return 'Berhasil login';
  }
  return 'Username atau password salah';
}

export function isLoggedIn() {
  const data = getDataFromLocalStorage('loggedInUser');
  console.log(data);
  return data;
}

// Fungsi untuk logout
export function logout() {
  localStorage.removeItem('loggedInUser');
}

// Fungsi untuk melakukan registrasi
export function register(username, password) {
  const user = getDataFromLocalStorage('user');
  if (user.username === username) {
    return 'Username sudah digunakan';
  }
  setDataToLocalStorage('user', {
    username,
    password,
    register_at: new Date(),
  });

  return 'Registrasi berhasil';
}

// Fungsi untuk mengubah password pengguna
export function updatePassword(username, newPassword) {
  const users = getDataFromLocalStorage('users');
  const updatedUsers = users.map((user) => {
    if (user.username === username) {
      user.password = newPassword;
    }
    return user;
  });
  setDataToLocalStorage('users', updatedUsers);
}
