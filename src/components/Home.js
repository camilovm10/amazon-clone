import React from 'react';
import '../home.css';
import Product from './Product';

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Hero-covid19" />
            


                <div className="home__row">
                    <Product 
                        id="12321341"
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                        price={19.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 litre Glass Bowl"
                        price={239.00}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61aT8jl8THL._AC_SL1001_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="3452355"
                        title="Xbox One S 1TB Console [Previous Generation]"
                        price={359.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71XHuIVqJbL._AC_SL1500_.jpg"
                    />
                    <Product 
                        id="992735q"
                        title="Invicta Men's Pro Diver Stainless Steel Quartz Watch with Silicone Strap, Black, 25 (Model: 22340)"
                        price={93.45}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/91CsjJfQfkL._AC_UY741_.jpg"
                    />
                    <Product 
                        id="34236664"
                        title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray"
                        price={2049.59}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="5541125"
                        title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
                        price={79.89}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_SL1000_.jpg"
                    />
                </div>

                <div className="home__row">
                    {/* Product */}
                </div>
            </div>

        </div>
    )
}

export default Home
