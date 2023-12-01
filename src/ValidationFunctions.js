// validationFunctions.js

// Validate wallet address for Ethereum format (0x...)
export const validateWalletAddress = (address) => {
    // Regular expression for Ethereum address format
    const ethAddressRegex = /^(0x)?[0-9a-fA-F]{40}$/;
  
    // Check if the address is not empty and matches the Ethereum format
    return !!address && ethAddressRegex.test(address);
  };
  
  // Validate amount: Ensure it is a number within a specified range
  export const validateAmount = (amount) => {
    // Convert the amount to a number
    const numericAmount = Number(amount);
  
    // Check if the converted amount is a valid number and within the specified range
    return !isNaN(numericAmount) && numericAmount >= 0 && numericAmount <= 10000;
  };
  