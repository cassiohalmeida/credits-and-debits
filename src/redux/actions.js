import { v4 } from "uuid";

export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const INCREMENT_AMOUNT = "INCREMENT_AMOUNT";
export const DECREMENT_AMOUNT = "DECREMENT_AMOUNT";
export const CLEAR_TRANSACTIONS = "CLEAR_TRANSACTIONS";

function isValidNumber(value) {
  return typeof value === "number" && value >= 1;
}

export const incrementAmount = (value) => {
  let result = { 
    type: INCREMENT_AMOUNT,
    payload: {
      value: 0
    }
  };
  if (isValidNumber(value)) {
    result.payload = { value };
  }
  return result;
};

export const decrementAmount = (value) => {
  let result = { 
    type: DECREMENT_AMOUNT,
    payload: {
      value: 0
    }
  };
  if (isValidNumber(value)) {
    result.payload = { value };
  }
  return result;
};

export const clearTransactions = () => ({ type: CLEAR_TRANSACTIONS });

export const addTransaction = (value, type) => {
  let result = {
    type: ADD_TRANSACTION,
    payload: {}
  };
  if (isValidNumber(value)) {
    result.payload = {
      value: value,
      type: type,
      createdAt: new Date().toString(),
      id: v4()
    };
  }
  return result;
};
