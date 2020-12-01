import React, { useEffect, useState } from 'react';
import { useStateValue } from '../context/StateProvider';
import { db } from '../firebase/firebase';
import '../orders.css';
import Order from './Order';
import { useHistory } from 'react-router-dom';

const Orders = () => {

    const history = useHistory();

    const [{ basket, user }, dispatch ] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {

        if(user) {
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        } else {
            setOrders([])
        }

        
    }, [user]);

    return (
        <div className="orders">
            {user ? <h1>Your Orders</h1> : <h1 style={{textAlign : "center"}}>Upss... there's nothing to show, please login to see your orders.</h1>}
            {/* {user ? <h1>Your Orders</h1> : history.replace('/login')} */}

            <div className="orders__order">
                {orders.map(order => (
                    <Order 
                        order={order}
                    />
                ))}
            </div>
        </div>
    )
}



export default Orders
