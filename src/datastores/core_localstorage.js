import { getDataFromLocalStorage, setDataToLocalStorage } from './localstorage';

export function addBalance(balance) {
  // get balance first
  const currentBalance = getBalance();
  // add balance
  const newBalance = parseInt(currentBalance) + parseInt(balance);
  // save to local storage
  localStorage.setItem('balance', newBalance);
}

export function getBalance() {
  return localStorage.getItem('balance') || 0;
}

export function totalExpense() {
  const expenses = getDataFromLocalStorage('expenses');
  return expenses.reduce(
    (total, expense) => total + parseInt(expense.amount),
    0
  );
}

export function totalIncome() {
  const incomes = getDataFromLocalStorage('income');
  return incomes.reduce((total, income) => total + parseInt(income.amount), 0);
}

// Fungsi untuk menambahkan catatan pengeluaran
export function addExpense(expense) {
  const expenses = getDataFromLocalStorage('expenses');
  expenses.push(expense);
  addBalance(-expense.amount); // kurangi balance
  setDataToLocalStorage('expenses', expenses);
}

// Fungsi untuk mendapatkan semua catatan pengeluaran
export function getAllExpenses() {
  return getDataFromLocalStorage('expenses');
}

// Fungsi untuk mengupdate catatan pengeluaran
export function updateExpense(index, updatedExpense) {
  const expenses = getDataFromLocalStorage('expenses');
  expenses[index] = updatedExpense;
  setDataToLocalStorage('expenses', expenses);
}

// Fungsi untuk menghapus catatan pengeluaran
export function deleteExpense(index) {
  const expenses = getDataFromLocalStorage('expenses');
  expenses.splice(index, 1);
  setDataToLocalStorage('expenses', expenses);
}

// Fungsi untuk menambahkan catatan pemasukan
export function addIncome(income) {
  const incomes = getDataFromLocalStorage('income');
  incomes.push(income);
  addBalance(income.amount); // tambahkan balance
  setDataToLocalStorage('income', incomes);
}

// Fungsi untuk mendapatkan semua catatan pemasukan
export function getAllIncome() {
  return getDataFromLocalStorage('income');
}

// Fungsi untuk mengupdate catatan pemasukan
export function updateIncome(index, updatedIncome) {
  const incomes = getDataFromLocalStorage('income');
  incomes[index] = updatedIncome;
  setDataToLocalStorage('income', incomes);
}

// Fungsi untuk menghapus catatan pemasukan
export function deleteIncome(index) {
  const incomes = getDataFromLocalStorage('income');
  incomes.splice(index, 1);
  setDataToLocalStorage('income', incomes);
}

// Fungsi untuk mendapatkan data peringatan dari Local Storage
function getReminders() {
  const reminders = localStorage.getItem('reminders');
  return reminders ? JSON.parse(reminders) : [];
}

// Fungsi untuk menyimpan data peringatan ke Local Storage
function setReminders(reminders) {
  localStorage.setItem('reminders', JSON.stringify(reminders));
}

// Fungsi untuk menambahkan peringatan baru
export function addReminder(reminder) {
  const reminders = getReminders();
  reminders.push(reminder);
  setReminders(reminders);
}

// Fungsi untuk mendapatkan peringatan berdasarkan ID
export function getReminderById(id) {
  const reminders = getReminders();
  return reminders.find((reminder) => reminder.id === id);
}

// Fungsi untuk mengupdate peringatan
export function updateReminder(updatedReminder) {
  const reminders = getReminders();
  const index = reminders.findIndex(
    (reminder) => reminder.id === updatedReminder.id
  );
  if (index !== -1) {
    reminders[index] = updatedReminder;
    setReminders(reminders);
  }
}

// Fungsi untuk menghapus peringatan berdasarkan ID
export function deleteReminder(id) {
  const reminders = getReminders();
  const updatedReminders = reminders.filter((reminder) => reminder.id !== id);
  setReminders(updatedReminders);
}
