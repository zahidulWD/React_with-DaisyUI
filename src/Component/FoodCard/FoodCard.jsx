import React from 'react';
import PropTypes from 'prop-types';

const FoodCard = ({food}) => {
    const {name,price,image,title} = food
    return (
        <div>
            <h2 className='text-7xl'>{name}</h2>
        </div>
    );
};

FoodCard.propTypes = {
    
};

export default FoodCard;