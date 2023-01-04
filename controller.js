thePage();
function thePage(){
    document.getElementById("outsideBox").innerHTML = `
    <input id="item" type="name" placeholder="Item you spent money on"/><br>
    <input id="date" type="date"/>
    $<input id="amount" type="number" min="0.01" placeholder="Amount"/>
    <button onclick="addExpense()">Add Expense</button>
    
    <table id="IDK">
        <tr>
            <th>Item</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Action</th>
        </tr>
    </table>

    <table id="total">
        <tr>
            <th>Total Amount:</th>
        </tr>
    </table>
    
    <button onclick="removeExpense()">Remove All</button>
`;
}

let totalAmount = 0.00;
// let ID = 1;

function addExpense() {
    document.getElementById("IDK").innerHTML += `
        <tr>
            <td>${item.value}</td>
            <td>${date.value}</td>
            <td>$${document.getElementById("amount").value}</td>
            <td>
                <button onclick="removeOneExpense(this)">Remove</button></td>
        </tr>
    `;
    // ID++;
   
    totalAmount = totalAmount + parseFloat(amount.value);
    // let storage = parseFloat(amount.value);
    // console.log(totalAmount);

document.getElementById("total").innerHTML = `
    <tr>
        <td>Total Amount:$${totalAmount.toFixed(2)}</td>
    </tr>
`
}

function removeOneExpense(element){
    var i = element.parentNode.parentNode.rowIndex;
    console.log(i);
    console.log(document.getElementById("IDK"));
    document.getElementById("IDK").deleteRow(i);
}

function removeExpense(){
    // document.getElementById("IDK").innerHTML = `   
    // <table id="IDK">
    //     <tr>
    //         <th>Item:</th>
    //         <th>Date:</th>
    //         <th>Amount:</th>
    //     </tr>
    // </table>`;
    totalAmount = 0;
    // ID = 1;
    thePage();
}
