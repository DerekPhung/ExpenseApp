thePage();
function thePage(){
    document.getElementById("outsideBox").innerHTML = `
    <input id="item" type="name" placeholder="Item you spent money on"/><br>
    <input id="date" type="date"/>
    $<input id="amount" type="number" min="0.01" placeholder="Amount"/>
    <button onclick="addExpense()">Add Expense</button>
    <table id="IDK">
        <tr>
            <th>Item:</th>
            <th>Date:</th>
            <th>Amount:</th>
        </tr>
    </table>

    <table id="total">
        <tr>
            <th>Total Amount:</th>
        </tr>
    </table>
    
    <button onclick="removeExpense()">Remove</button>
`;
}

let totalAmount = 0;

function addExpense() {
    document.getElementById("IDK").innerHTML += `
        <tr>
            <td>${item.value}</td>
            <td>${date.value}</td>
            <td>$${document.getElementById("amount").value}</td>
        </tr>
    `;

    totalAmount = totalAmount + parseFloat(amount.value);
    // let storage = parseFloat(amount.value);

document.getElementById("total").innerHTML = `
    <tr>
        <td>Total Amount:$${totalAmount}</td>
    </tr>
`
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
    thePage();
}
