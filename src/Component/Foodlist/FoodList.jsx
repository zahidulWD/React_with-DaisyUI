import React, { useEffect, useState } from 'react';

const FoodList = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('/foodData.json')
            .then(res => res.json())
            .then(data => setFoods(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h1 className='text-5xl text-center font-bold text-blue-600'>
                WELCOME TO OUR FOOD SHOP
            </h1>
            <div className="flex flex-wrap justify-center mt-6">
                {foods.map(food => (
                    <div key={food.id} className="card w-60 bg-base-100 shadow-xl m-4">
                        <figure>
                            <img src={food.image} alt={food.name} className="w-full h-32 object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{food.name}</h2>
                            <p>{food.title}</p>
                            <p className="text-lg font-bold">${food.price.toFixed(2)}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Order Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FoodList;
