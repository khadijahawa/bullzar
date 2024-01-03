/* eslint-disable */
import React, { useState, ChangeEvent } from 'react';
import { useContract, useTransferToken } from "@thirdweb-dev/react";
import { loader } from '../../assets';

interface TransferProps {
  onClose: () => void;
}
const TransferBear: React.FC<TransferProps> = ({ onClose }) => {
  const { contract, isLoading: contractIsLoading } = useContract("0x9608F9182e896c534C74b8D93D4C8B22a5b2cf3D");
  const {
    mutate: transferTokens,
    isLoading: transferIsLoading,
    error,
  } = useTransferToken(contract);

  const [to, setTo] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [isTransactionPending, setTransactionPending] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleTransfer = async () => {
    setTransactionPending(true);
    setIsLoading(true);
    try {
      if (transferTokens) {
        const transferParams = { to, amount };
        await transferTokens(transferParams);
        console.log("Tokens transferred successfully!");

        // Close the modal upon successful transfer
        onClose();
      } else {
        console.error("transferTokens function is not defined");
      }
    } catch (error) {
      console.error("Failed to transfer tokens", error);
    } finally {
      setTransactionPending(false);
      setIsLoading(false);
    }
  };

  return (
    <div className="modal-content1">
      <button className="close-button1" onClick={onClose}>(X)</button>
      <div>
        <label>Recipient (to):</label>
        <input
          type="text"
          value={to}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTo(e.target.value)}
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(parseFloat(e.target.value))}
        />
      </div>
      <button
        disabled={contractIsLoading || transferIsLoading || isTransactionPending}
        onClick={handleTransfer}
      >
        {isTransactionPending ? (
          <img src={loader} alt="Loading..." />
        ) : (
          "Transfer"
        )}
      </button>
    </div>
  );
}

export default TransferBear;