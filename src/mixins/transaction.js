export const calculateTransactionAmount = (transactions, targetTransaction) => {
  let result = 0;
  transactions.slice(0, targetTransaction + 1).map((current) => {
    if (current.type === 'credit') {
      result += Number(current.value);
    } else {
      result -= Number(current.value)
    }
  })
  return result;
}
