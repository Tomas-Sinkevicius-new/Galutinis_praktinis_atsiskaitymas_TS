import React from 'react';
import NewShopForm from '../components/shop/NewShopForm';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-hot-toast';

function AddShop() {
  const navigate = useNavigate();
  async function createShop(onNewShop) {
    try {
      const docRef = await addDoc(collection(db, 'shops'), onNewShop);
      console.log('Document written with ID: ', docRef.id);
      navigate('/shops');
      toast('Good Job! BYE!', {
        icon: '✨',
      });
    } catch (e) {
      console.error('Error adding document: ', e);
      toast('SOMETHING WRONG!', {
        icon: '🤯',
      });
    }
  }
  return (
    <div>
      <NewShopForm onNewShop={createShop} />
    </div>
  );
}

export default AddShop;
