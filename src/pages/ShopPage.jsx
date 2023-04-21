import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { toast } from 'react-hot-toast';
import SingleShopItem from '../components/shop/SingleShopItem';
import Loader from '../components/loader/Loader';

function ShopPage() {
  const [shopArr, setshopArr] = useState([]);

  //paimam shop item is FireBase

  useEffect(() => {
    async function getSHop() {
      //norim gauti postus
      let docsPromise;
      try {
        //pagal title isrikiuoti
        let q = query(collection(db, 'shop'), orderBy('title'));
        //gauti tik james@bond.com postus
        // q = query(
        //   collection(db, 'posts'),
        //   where('author', '==', 'james@bond.com'),
        // );
        docsPromise = getDocs(q);
        const querySnapshot = await docsPromise;
        const tempShop = [];
        querySnapshot.forEach((doc) => {
          // console.log(`${doc.id} => ${doc.data()}`);
          // console.log('{doc.data() ===', doc.data());
          tempShop.push({ uid: doc.id, ...doc.data() });
        });
        console.log('tempShop ===', tempShop);
        setshopArr(tempShop);
      } catch (error) {
        console.warn('getSHop', error.code, error.message);
      }
      toast.promise(docsPromise, {
        loading: 'Loading',
        success: 'Got the posts',
        error: 'klaida ivyko?',
      });
    }
    getSHop();
  }, []);

  return (
    <div className='container'>
      <h1>Welcome to that Shop</h1>
      <Loader />
      <ul>
        {shopArr.map((shopObj) => (
          <SingleShopItem key={shopObj.uid} item={shopObj} />
        ))}
      </ul>
    </div>
  );
}

export default ShopPage;
