import reducer from '../redux/reducer'
import { INCREMENT_AMOUNT, DECREMENT_AMOUNT, ADD_TRANSACTION, CLEAR_TRANSACTIONS } from '../redux/actions'

it('it should increment the amount', () => {
  const before = {
    amount: 0
  }
  const action = {
    type: INCREMENT_AMOUNT,
    payload: {
      value: 1
    }
  }
  const after = {
    amount: 1
  }
  expect(reducer(before, action)).toEqual(after)
});

it('it should decrement the amount', () => {
  const before = {
    amount: 5
  }
  const action = {
    type: DECREMENT_AMOUNT,
    payload: {
      value: 1
    }
  }
  const after = {
    amount: 4
  }
  expect(reducer(before, action)).toEqual(after)
});

it('amount could be less than 0', () => {
  const before = {
    amount: 5
  }
  const action = {
    type: DECREMENT_AMOUNT,
    payload: {
      value: 6
    }
  }
  const after = {
    amount: -1
  }
  expect(reducer(before, action)).toEqual(after)
});

it('it should add a transaction into transactions', () => {
  const before = {
    transactions: [],
  }
  const action = {
    type: ADD_TRANSACTION,
    payload: {
      value: -1256.78,
      type: 'debit'
    }
  }
  const after = {
    transactions: [
      {
        value: -1256.78,
        type: 'debit'
      }
    ],
  }
  expect(reducer(before, action)).toEqual(after)
});

it('it should clear all transactions', () => {
  const before = {
    transactions: [
      {
        value: -1256.78,
        type: 'debit'
      },
      {
        value: 2543.78,
        type: 'credit'
      }
    ],
  }
  const action = {
    type: CLEAR_TRANSACTIONS
  }
  const after = {
    transactions: [],
    amount: 0
  }
  expect(reducer(before, action)).toEqual(after)
});

it('transaction should contain the last amount value', () => {
  const before = {
    transactions: [
      {
        value: -1256.78,
        type: 'debit'
      },
      {
        value: 2543.78,
        type: 'credit'
      }
    ],
  }
  const action = {
    type: CLEAR_TRANSACTIONS
  }
  const after = {
    transactions: [],
    amount: 0
  }
  expect(reducer(before, action)).toEqual(after)
});
