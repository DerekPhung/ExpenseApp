document.getElementById("outsideBox").innerHTML += `
    <input id="item" type="name" placeholder="Item you spent money on"></input><br>
    <input id="date" type="date"></input>
    $<input id="amount" type="number" min="0.01" placeholder="Amount"></input>
    <button onclick="addExpense()">Add Expense</button>
    <table id="IDK">
        <tr>
            <th>Item:</th>
            <th>Date:</th>
            <th>Amount:</th>
        </tr>
    </table>
`;

function addExpense() {
    document.getElementById("IDK").innerHTML += `
        <tr>
            <td>${item.value}</td>
            <td>${date.value}</td>
            <td>$${amount.value}</td>
        </tr>
    `
}

function removeExpense(){
    
}