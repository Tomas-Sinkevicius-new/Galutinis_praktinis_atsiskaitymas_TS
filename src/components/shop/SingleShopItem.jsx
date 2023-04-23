import React from 'react';
import { NavLink } from 'react-router-dom';
import './singleShopItem.scss';

function SingleShopItem({ item }) {
  return (
    <div className='cardContainer'>
      <div className='card'>
        <div class='card-front'>
          <h3 className='title'> {item.shopName} </h3>
          <p className='p2'> {item.description} </p>
        </div>
        <div className='card-back'>
          <img className='img2' src={item.imageUrl} alt='img' />
          <p className='p'>Year: {item.startYear} </p>
          <h4 className='h4'>Town: {item.town} </h4>
          {/* <NavLink to={`/shops/&{item.uid}`}></NavLink> */}
        </div>
      </div>
    </div>
  );
}

export default SingleShopItem;
