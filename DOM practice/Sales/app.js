document.getElementById('salesForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const date = document.getElementById('date').value;
    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
    const total = quantity * price;
  
    // Append to sales table
    const salesTable = document.getElementById('salesTable');
    const row = salesTable.insertRow();
    row.insertCell(0).innerText = date;
    row.insertCell(1).innerText = item;
    row.insertCell(2).innerText = quantity;
    row.insertCell(3).innerText = price;
    row.insertCell(4).innerText = total;
  
    // Update profit
    updateProfit();
  });
  
  document.getElementById('expensesForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const date = document.getElementById('expenseDate').value;
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;
  
    // Append to expenses table
    const expensesTable = document.getElementById('expensesTable');
    const row = expensesTable.insertRow();
    row.insertCell(0).innerText = date;
    row.insertCell(1).innerText = category;
    row.insertCell(2).innerText = amount;
  
    // Update profit
    updateProfit();
  });
  
  function updateProfit() {
    let totalSales = 0;
    let totalExpenses = 0;
  
    // Calculate total sales
    const salesTable = document.getElementById('salesTable').rows;
    for (let i = 0; i < salesTable.length; i++) {
      totalSales += parseFloat(salesTable[i].cells[4].innerText);
    }
  
    // Calculate total expenses
    const expensesTable = document.getElementById('expensesTable').rows;
    for (let i = 0; i < expensesTable.length; i++) {
      totalExpenses += parseFloat(expensesTable[i].cells[2].innerText);
    }
  
    // Calculate profit
    const profit = totalSales - totalExpenses;
    document.getElementById('dailyProfit').innerText = `Total Profit: $${profit}`;
  }
  