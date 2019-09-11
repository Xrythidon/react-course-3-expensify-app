import fixture from "../fixtures/expenses";
import selectExpensesTotal from "../../selectors/expenses-total.js";

test("Should correctly add up all sums", () => {
const amount = 114195;
expect(amount).toEqual(selectExpensesTotal(fixture));
})

test("Should return 0 if no expenses", () => {
    const expenses = []
    expect(0).toEqual(selectExpensesTotal(expenses));
})

test("should correctly add up a single expense", () => {
    const expenses = [{  
    id: '1',
    description: 'Gum',
    note: '',
    amount: 1000,
    createdAt: 0}]

    expect(expenses[0].amount).toEqual(selectExpensesTotal(expenses));
})