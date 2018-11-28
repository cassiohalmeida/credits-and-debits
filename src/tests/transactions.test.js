import { calculateTransactionAmount } from '../mixins/transaction';

it('it should increment the amount', () => {
  const transactions = [
    {
      value: 100,
      type: 'credit',
    },
    {
      value: 50,
      type: 'debit',
    },
    {
      value: 25,
      type: 'credit',
    }
  ]
  expect(calculateTransactionAmount(transactions, 1)).toEqual(50)
});
