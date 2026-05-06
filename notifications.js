// Модуль для виводу гарних сповіщень
const NotificationSystem = {
    // Функція показу сповіщення
    show(message, type = 'info') {
        // Створюємо контейнер для сповіщення
        const toast = document.createElement('div');
        
        // Визначаємо колір залежно від типу (інфо, успіх, помилка)
        let bgColor = '#3b82f6'; // синій
        if (type === 'success') bgColor = '#10b981'; // зелений
        if (type === 'error') bgColor = '#ef4444'; // червоний

        // Налаштовуємо стиль "хмаринки"
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: ${bgColor};
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            box-shadow: 0 10px 15px rgba(0,0,0,0.2);
            font-family: sans-serif;
            z-index: 1000;
            transition: opacity 0.5s ease;
        `;

        toast.innerText = message;

        // Додаємо на сторінку
        document.body.appendChild(toast);

        // Видаляємо через 3 секунди
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    }
};

// Приклад виклику системи (для тесту в консолі)
console.log("Система сповіщень [notifications.js] готова. Виклик: NotificationSystem.show('Привіт!')");
