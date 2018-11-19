export const loadState = () => {
  try {
    const localStorageTransaction = localStorage.getItem('transactions')
    if (localStorageTransaction === null) {
      return {
        transactions: [],
        amount: 0,
      }
    }
    return JSON.parse(localStorageTransaction)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    localStorage.setItem('transactions', JSON.stringify(state))
  } catch (err) {
    //Ignore write errors.
  }
}