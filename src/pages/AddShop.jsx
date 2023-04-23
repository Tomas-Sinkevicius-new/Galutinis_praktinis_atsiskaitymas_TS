import React from 'react';
import NewShopForm from '../components/shop/NewShopForm';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';

function AddShop() {
  const navigate = useNavigate();
  async function createShop(onNewShop) {
    try {
      const docRef = await addDoc(collection(db, 'shops'), onNewShop);
      console.log('Document written with ID: ', docRef.id);
      navigate('/shops');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
  return (
    <div>
      <NewShopForm onNewShop={createShop} />
    </div>
  );
}

export default AddShop;
