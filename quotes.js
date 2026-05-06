// Модуль для генерації цікавого контенту
const QuoteEngine = {
    // Список порад для розробника
    data: [
        "Найкращий код — це той, якого не існує.",
        "Спочатку навчися програмувати, потім — писати код.",
        "Масштабний проект починається з одного index.html.",
        "Помилки — це просто уроки, за які ти ще не заплатив.",
        "Чистий код завжди виглядає так, ніби його писав той, кому не байдуже."
    ],

    // Функція вибору випадкової цитати
    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.data.length);
        const quote = this.data[randomIndex];
        
        // Виведення на екран
        const area = document.getElementById('display-area');
        if (area) {
            area.innerHTML = `
                <div style="font-style: italic; color: #4b5563; border-left: 3px solid #f59e0b; padding-left: 10px;">
                    "${quote}"
                </div>
            `;
            // Також показуємо сповіщення (якщо додали код №7)
            if (window.NotificationSystem) {
                NotificationSystem.show("Нова порада готова!", "success");
            }
        }
    }
};

console.log("Модуль цитат [quotes.js] завантажено.");
