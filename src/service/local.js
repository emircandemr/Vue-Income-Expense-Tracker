
export const getValueList = () => {
    const data = localStorage.getItem('values');
    const values = JSON.parse(data);
    return values;
}
  
export const setValueList = value => {
    const data = JSON.parse(localStorage.getItem('values')) || [];
    let values = data.concat(value);
    localStorage.setItem('values', JSON.stringify(values))
}

export const deleteValue = id => {
    const data = JSON.parse(localStorage.getItem('values')) || [];
    const values = data.filter((item) => item.id !== id)
    localStorage.setItem('values', JSON.stringify(values))
}

export const editValue = value => {
    const data = JSON.parse(localStorage.getItem('values')) || [];
    const values = data.filter((item) => item.id !== value.id)
    values.push(value)
    localStorage.setItem('values', JSON.stringify(values))
}

export const getBalance = () => {
    const data = localStorage.getItem('values') ? JSON.parse(localStorage.getItem('values')) : [];
    const incomeList = data.filter((item) => item.type === 'Income')
    const expenseList = data.filter((item) => item.type === 'Expense')
    const incomeAmount = incomeList.map((item) => item.amount)
    const expenseAmount = expenseList.map((item) => item.amount)
    const totalIncome = incomeAmount.reduce((acc, item) => acc + item, 0);
    const totalExpense = expenseAmount.reduce((acc, item) => acc + item, 0);
    return totalIncome - totalExpense;
}


