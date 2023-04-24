import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { toast } from 'react-hot-toast';
import SingleShopItem from '../components/shop/SingleShopItem';
import Loader from '../components/loader/Loader';
import { useAuthCtx } from '../store/AuthProvider';
import './shopPage.scss';
import PropTypes from 'prop-types';

function ShopPage() {
  const { isLoading, setIsLoading, user } = useAuthCtx();
  const [shopArr, setshopArr] = useState([]);

  let initialized = false;

  useEffect(() => {
    //apribojam useStrict is react dome, kad du kart nemestu lenteles
    if (!initialized) {
      initialized = true;

      async function getSHop() {
        setIsLoading(true);
        let docsPromise;
        try {
          if (user && user.uid) {
            let q = query(collection(db, 'shops'), orderBy('shopName'));
            docsPromise = getDocs(q);
            const querySnapshot = await docsPromise;
            const tempShop = [];
            querySnapshot.forEach((doc) => {
              tempShop.push({ uid: doc.id, ...doc.data() });
            });
            setshopArr(tempShop);
            toast.success('Got Shops');
          } else {
            return;
          }
        } catch (error) {
          if (!docsPromise && user && user.uid) {
            toast.error('Didnt get shops');
          } else if (!docsPromise && (!user || !user.uid)) {
            return;
          }
        }
        setIsLoading(false);
      }

      getSHop();
    }
  }, []);

  return (
    <div className='container'>
      <h1 className='titleH1'>
        Welcome to Shops
        <i className='fa fa-shopping-cart' aria-hidden='true'></i>
      </h1>
      <Loader show={isLoading} />
      {shopArr.length === 0 ? (
        <p className='nerIrasu'>Šiuo metu įrašų nėra</p>
      ) : (
        <ul className='display'>
          {shopArr.map((shopObj) => (
            <SingleShopItem key={shopObj.uid} item={shopObj} />
          ))}
        </ul>
      )}
    </div>
  );
}

ShopPage.propTypes = {
  isLoading: PropTypes.bool,
  setIsLoading: PropTypes.func,
  shopArr: PropTypes.arrayOf(
    PropTypes.shape({
      uid: PropTypes.string,
      shopName: PropTypes.string,
      shopAddress: PropTypes.string,
      shopPhone: PropTypes.string,
      shopEmail: PropTypes.string,
    })
  ),
  user: PropTypes.shape({
    uid: PropTypes.string,
    email: PropTypes.string,
    displayName: PropTypes.string,
    photoURL: PropTypes.string,
  }),
};

export default ShopPage;
