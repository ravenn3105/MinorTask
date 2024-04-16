const expenseForm = document.getElementById('add-expense-form');
const expenseList = document.getElementById('expenses');
const totalAmountElement = document.getElementById('total-amount');

let totalAmount = 0; // Variable to track total spending

expenseForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const title = document.getElementById('title').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const timestamp = new Date();

  // Create a new expense entry element
  const expenseEntry = document.createElement('div');
  expenseEntry.classList.add('expense-entry');

  // Add content to the expense entry
  const titleElement = document.createElement('p');
  titleElement.textContent = `Title: ${title}`;
  expenseEntry.appendChild(titleElement);

  const amountElement = document.createElement('p');
  amountElement.textContent = `Amount: ₹${amount.toFixed(2)}`;
  expenseEntry.appendChild(amountElement);

  const timestampElement = document.createElement('p');
  timestampElement.textContent = `Timestamp: ${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString()}`;
  expenseEntry.appendChild(timestampElement);

  // Add the expense entry to the list
  expenseList.appendChild(expenseEntry);

  // Update total spending
  totalAmount += amount;
  totalAmountElement.textContent = totalAmount.toFixed(2);

  // Clear the form after adding
  expenseForm.reset();
});
