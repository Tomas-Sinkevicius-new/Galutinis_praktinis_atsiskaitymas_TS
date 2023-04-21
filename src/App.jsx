import './reset.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import { Toaster } from 'react-hot-toast';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <div>
      <Header />
      <Toaster />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
