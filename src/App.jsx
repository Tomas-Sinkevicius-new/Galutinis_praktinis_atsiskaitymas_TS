import './reset.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import { Toaster } from 'react-hot-toast';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';
import { useAuthCtx } from './store/AuthProvider';
import AddShop from './pages/AddShop';
import Loader from './components/loader/Loader';
import Footer from './components/layout/Footer';
import NotFound from './pages/NotFound';

function App() {
  const { isLoggedIn } = useAuthCtx();

  return (
    <div>
      <Header />
      {/* feedback */}
      <Toaster />
      <Loader />
      <Routes>
        <Route path='/' element={isLoggedIn ? <ShopPage /> : <LoginPage />} />
        <Route
          path='/login'
          element={isLoggedIn ? <Navigate to={'/shops'} /> : <LoginPage />}
        />
        <Route
          path='/register'
          element={isLoggedIn ? <Navigate to={'/shops'} /> : <RegisterPage />}
        />
        <Route
          path='/shops'
          element={isLoggedIn ? <ShopPage /> : <Navigate to={'/login'} />}
        />
        <Route
          path='/shops/new'
          element={isLoggedIn ? <AddShop /> : <Navigate to={'/login'} />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
