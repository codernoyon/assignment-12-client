import React from 'react';

const SingleReview = ({review}) => {
    const {displayName, comment, photoURL, company, rating} = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl py-4">
            <div className="card-body text-center">
                <div className='w-14 h-14 rounded-full  mx-auto overflow-hidden'>
                    <img className='w-full object-contain' src={photoURL} alt="" />
                </div>
                <h3 className="text-lg">Rating: {rating}</h3>
                <p className='text-gray-500'>{comment}</p>
                <div>
                    <h3 className="text-xl font-semibold">{displayName}</h3>
                    <small>{company}</small>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;