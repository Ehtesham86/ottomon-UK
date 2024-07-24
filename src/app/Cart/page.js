'use client'
import { useSelector, useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { clearCart } from '../Redux/Action/actions'; // Update with the actual path

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
console.log(cartItems,'cartItems____')
  // Calculate total price
  const totalPrice = useMemo(() => {
    return cartItems?.reduce((acc, item) => acc + parseFloat(item?.price || 0), 0).toFixed(2);
  }, [cartItems]);

  return (
    <div style={styles.container}>
      <div style={styles.headerContainer}>
        <h1 style={styles.header}>Your Cart</h1>
        <button 
          type="button" 
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={handleClearCart}
        >
          Clear
        </button>
      </div>

      <div style={styles.cartItemsContainer}>
        {cartItems?.map(item => (
          <div key={item?.id} style={styles.cartItem}>
            <img src={item?.imageUrl} alt={item?.name} style={styles.image} />
            <div style={styles.itemDetails}>
              <h2 style={styles.itemName}>{item?.name}</h2>
              <p style={styles.itemPrice}>Price: ${item?.price}</p>
              <p style={styles.itemDescription}>{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={styles.totalPriceContainer}>
        <h2 style={styles.totalPrice}>Total Price: ${totalPrice}</h2>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '100%',
    margin: 'auto',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  header: {
    fontSize: '2rem',
    color: '#333',
  },
  cartItemsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '100%',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    width: '100%',
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginRight: '20px',
  },
  itemDetails: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  itemName: {
    fontSize: '1.5rem',
    margin: '0',
    color: '#333',
  },
  itemPrice: {
    fontSize: '1.2rem',
    margin: '10px 0',
    color: '#555',
  },
  itemDescription: {
    fontSize: '1rem',
    color: '#777',
  },
  totalPriceContainer: {
    marginTop: '20px',
    textAlign: 'center',
  },
  totalPrice: {
    fontSize: '1.5rem',
    color: '#333',
  },
};

export default CartPage;
