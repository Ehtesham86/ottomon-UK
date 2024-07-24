'use client';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm'; // Correct casing to match file name
import CartPage from './../Cart/page'; // Correct casing to match file name

const stripePromise = loadStripe('pk_test_51OU7K2GzmgnXQM1ZzsvV9RUUBFbRKzol5julcMWC8zV8ckijoKAHbr1kBB2cwqbJuKN4kkxdomxe1fhpbNjkLDNm00DHUrBE3P');

const NewPaymentCardSetup = () => {
  return (
    <div className="max-w-screen-lg mx-auto  pl-4 md:pl-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4">
          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        </div>
        <div className="p-4">
          <CartPage/>
        </div>
      </div>
    </div>
  );
};

export default NewPaymentCardSetup;
