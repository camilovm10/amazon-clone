import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Payment from './components/Payment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase/firebase';
import { useStateValue } from './context/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/Orders';

const promise = loadStripe('pk_test_51HekvZCHz8e2q06nyj8JQfN6ofKoaFO62OO0pORFSFKCDunmJ3b0k9mPQOejDsMOo80bim4oCClHm1tSDfBFWgg000tV4KkniV');



function App() {

  const [{}, dispatch] = useStateValue();


  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS ', authUser);

      if(authUser) {
        // The user just logged in

        dispatch({
          type: 'SET_USER',
          payload: authUser
        })

      } else {
        // The user is logged out

        dispatch({
          type: 'SET_USER',
          payload: null
        })

      }
    })

  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
