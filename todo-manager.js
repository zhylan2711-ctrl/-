// Модуль планувальника завдань Monolith
const TodoManager = {
    tasks: [],

    // Ініціалізація інтерфейсу списку справ
    render() {
        const area = document.getElementById('display-area');
        area.innerHTML = `
            <div style="background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                <h3 style="margin-top:0">📋 Мій список справ</h3>
                <div style="display: flex; gap: 10px; margin-bottom: 20px;">
                    <input type="text" id="todo-input" placeholder="Що потрібно зробити?" style="flex: 1; padding: 10px; border: 1px solid #ddd; border-radius: 6px;">
                    <button onclick="TodoManager.addTask()" style="padding: 10px 20px;">Додати</button>
                </div>
                <ul id="todo-list" style="list-style: none; padding: 0;"></ul>
            </div>
        `;
        this.updateList();
    },

    // Додавання нового завдання
    addTask() {
        const input = document.getElementById('todo-input');
        if (input.value.trim() !== "") {
            this.tasks.push({ id: Date.now(), text: input.value, completed: false });
            input.value = "";
            this.updateList();
            if (window.NotificationSystem) NotificationSystem.show("Завдання додано!", "success");
        }
    },

    // Видалення завдання
    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.updateList();
    },

    // Оновлення списку на екрані
    updateList() {
        const listElement = document.getElementById('todo-list');
        if (!listElement) return;

        listElement.innerHTML = this.tasks.map(task => `
            <li style="display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #eee;">
                <span>${task.text}</span>
                <button onclick="TodoManager.deleteTask(${task.id})" style="background: #fee2e2; color: #ef4444; padding: 5px 10px; font-size: 12px; border: 1px solid #fecaca;">Видалити</button>
            </li>
        `).join('');
    }
};

console.log("Модуль завдань [todo-manager.js] активовано.");
