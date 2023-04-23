import React from 'react';
// import { NavLink } from 'react-router-dom';
import './singleShopItem.scss';
import PropTypes from 'prop-types';

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

SingleShopItem.propTypes = {
  //naudojam shape kadangi turim daugiau nei vieną objektą:
  item: PropTypes.shape({
    shopName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    startYear: PropTypes.number.isRequired,
    town: PropTypes.string.isRequired,
  }).isRequired,
};

export default SingleShopItem;
