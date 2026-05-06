// Модуль безпеки та входу користувачів
const authSystem = {
    isLoggedIn: false,
    currentUser: null,

    // Функція імітації входу
    login(username, password) {
        if (username === "admin" && password === "12345") {
            this.isLoggedIn = true;
            this.currentUser = username;
            this.showWelcomeMessage();
        } else {
            alert("Помилка: Невірне ім'я або пароль!");
        }
    },

    // Відображення панелі користувача
    showWelcomeMessage() {
        const area = document.getElementById('display-area');
        area.innerHTML = `
            <div style="background: #dcfce7; padding: 15px; border-radius: 8px; border: 1px solid #16a34a;">
                <h3>✅ Вхід успішний!</h3>
                <p>Вітаємо, <strong>${this.currentUser}</strong>. Ви отримали доступ до великого коду.</p>
                <button onclick="location.reload()" style="background: #dc2626;">Вийти</button>
            </div>
        `;
    }
};

console.log("Модуль авторизації [auth.js] завантажено.");
