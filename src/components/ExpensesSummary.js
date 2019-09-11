import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from "../selectors/expenses-total";
import selectExpenses from "../selectors/expenses";
import numeral from "numeral";


/* export const ExpenseSummary = (props) => {
    return (
        <div>
            {`Viewing ${expensesCount(props.expenses, props.filters).length}  totaling ${numeral(expensesAmountTotal(expensesCount(props.expenses, props.filters)) / 100).format("$0,0.00")}`}
        </div>
    )
}
 */
export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
    const expensesWord = expensesCount === 1 ? "expense" : "expenses";
    const formattedExpensesTotal = numeral(expensesTotal/100).format("$0,0.00");

    return (
        <div>
            <h1>Viewing {expensesCount} {expensesWord} totalling {formattedExpensesTotal}</h1>
        </div>
    )
}

const mapStatetoProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
}


export default connect(mapStatetoProps)(ExpensesSummary);
