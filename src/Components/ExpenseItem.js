import './ExpenseItem.css'


function ExpenseItem(props) {
    // const expenseDate = new Date(2021, 2, 28); here now thes constents are not used
    // const expenseTitle = 'car Insurance';in the function below 
    // const expenseamount = 293;instead using props we are calling data objects from App.js
    const month = props.date.toLocaleString('en-US', {month:'long'});
    const day = props.date.toLocaleString('en-US', {month:'2-digit'});
    const year = props.date.getFullYear();





    return (
        <div className='expense-item'>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>

            </div>

        </div>
    )
}

export default ExpenseItem