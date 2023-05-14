import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from './pages/Dashboard';
import SideBar from './components/SideBar';
import Pemasukan from './pages/Pemasukan';
import Pengeluaran from './pages/Pengeluaran';
import Pembelajaran from './pages/Pembelajaran';
import Profile from './pages/Profile';
import Notification from './pages/Notification';

export function App() {
  return (
    <div className='w-full py-2 mx-auto antialiased max-w-7xl'>
      <main>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route
            path='/dashboard'
            element={
              <ProtectedRoute>
                <SideBar>
                  <Dashboard />
                </SideBar>
              </ProtectedRoute>
            }
          />
          <Route
            path='/pemasukan'
            element={
              <ProtectedRoute>
                <SideBar>
                  <Pemasukan />
                </SideBar>
              </ProtectedRoute>
            }
          />
          <Route
            path='/pengeluaran'
            element={
              <ProtectedRoute>
                <SideBar>
                  <Pengeluaran />
                </SideBar>
              </ProtectedRoute>
            }
          />
          <Route
            path='/pembelajaran'
            element={
              <ProtectedRoute>
                <SideBar>
                  <Pembelajaran />
                </SideBar>
              </ProtectedRoute>
            }
          />{' '}
          <Route
            path='/profile'
            element={
              <ProtectedRoute>
                <SideBar>
                  <Profile />
                </SideBar>
              </ProtectedRoute>
            }
          />
          <Route
            path='/notification'
            element={
              <ProtectedRoute>
                <SideBar>
                  <Notification />
                </SideBar>
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<p>Page not found hehe</p>} />
        </Routes>
      </main>
    </div>
  );
}
