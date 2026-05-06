let expenses = [];
let total = 0;

function addExpense(name, amount) {
    if (name && amount > 0) {
        expenses.push({ name, amount: parseFloat(amount) });
        updateUI();
    }
}

function updateUI() {
    const list = document.getElementById('expense-list');
    const totalDisplay = document.getElementById('total-amount');
    
    list.innerHTML = expenses.map(item => `<li>${item.name}: ${item.amount} грн</li>`).join('');
    total = expenses.reduce((sum, item) => sum + item.amount, 0);
    totalDisplay.innerText = `Всего: ${total} грн`;
}

// Пример вызова функции: addExpense('Кофе', 50);
