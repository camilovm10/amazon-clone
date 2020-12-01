import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import '../header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { auth } from '../firebase/firebase';

const Header = () => {

    const [{ basket, user }, dispatch ] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }


    return (
        <div className="header">
            <Link to="/" >
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Logo"/>
            </Link>
            
            <div className="header__search">
                <input 
                    className="header__searchInput"
                    type="text"
                />
                <SearchIcon
                    className="header__searchIcon"
                />
            </div>

            <div className="header__nav">
                <Link to={!user && "/login"} style={{ textDecoration: 'none' }}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">
                            Hello, {!user ? 'Guest' : user.email.slice('@', (user.email.indexOf('@')))}
                        </span>
                        <span className="header__optionLineTwo">
                            {user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
                <Link to={ "/orders"} style={{ textDecoration: 'none' }}>
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Returns
                        </span>
                        <span className="header__optionLineTwo">
                            & Orders
                        </span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout" style={{ textDecoration: 'none' }}>
                    <div className="header__optionBasket">
                        
                            <ShoppingBasketIcon
                                className=""
                            />
                        
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header
