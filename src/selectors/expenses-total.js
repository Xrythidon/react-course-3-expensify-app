// Create a helper function that iterates through every array element's "amount" and adds them up.

export default (expenses) => { // array of expenses
    let total = 0;
    expenses.map((expense) => {
       total += expense.amount;
    })

    return total;
}