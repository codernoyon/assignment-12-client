import React from 'react';

const SingleSlide = ({ item }) => {
    const {name, description, img} = item;
    
    return (
        <div className="hero min-h-screen" style={{ background: `url(${img}) no-repeat center center / cover`, }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{name}</h1>
                    <p className="mb-5">{description.length > 100 ? description.slice(0, 100) + '...': description}</p>
                    <a href='#products' className="btn btn-primary">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default SingleSlide;

