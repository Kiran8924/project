// Transaction.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateWalletAddress, validateAmount } from './ValidationFunctions';

function Transaction() {
  const navigate = useNavigate();
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate wallet address and amount
    const isWalletValid = validateWalletAddress(walletAddress);
    const isAmountValid = validateAmount(amount);

    if (!isWalletValid) {
      setError('Invalid wallet address');
      return;
    }

    if (!isAmountValid) {
      setError('Invalid amount');
      return;
    }

    // Store data in Firestore (assuming Firebase is set up)
    try {
      // Use Firebase functions to store data
      // For example: await firebase.firestore().collection('transactions').add({ walletAddress, amount });

      // Redirect to home page after successful submission
      navigate('/');
    } catch (error) {
      setError('Error storing data');
    }
  };

  return (
    <div>
      <h2>Transaction Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Wallet Address:
          <input type="text" value={walletAddress} onChange={(e) => setWalletAddress(e.target.value)} />
        </label>
        <br />
        <label>
          Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Transaction;
