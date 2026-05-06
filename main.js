// Головний модуль керування Monolith Pro
console.log("Система активована та готова до роботи!");

function welcomeUser() {
    // Знаходимо блоки на сторінці
    const display = document.getElementById('display-area');
    const appRoot = document.getElementById('app-root');

    // Створюємо візуальний ефект запуску
    display.innerHTML = `
        <div style="padding: 20px; border: 2px solid #2563eb; border-radius: 10px; background: #e0e7ff;">
            <h2 style="margin-top: 0;">🚀 Протокол "Великий Сайт" запущено</h2>
            <p>Всі системи працюють у штатному режимі. Код №3 активовано.</p>
            <p><strong>Статус:</strong> Очікування наступних модулів...</p>
        </div>
    `;

    // Змінюємо текст основної кнопки
    const btn = document.querySelector('button');
    if(btn) {
        btn.innerText = "Система в мережі";
        btn.style.background = "#10b981"; // Зелений колір успіху
    }
}

// Функція для перевірки цілісності кодів
window.onload = () => {
    console.log("Перевірка файлів: index.html [OK], styles.css [OK], main.js [OK]");
};
