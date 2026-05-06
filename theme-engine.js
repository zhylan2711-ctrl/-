// Модуль керування зовнішнім виглядом (День/Ніч)
const ThemeEngine = {
    // Функція перемикання
    toggle() {
        const body = document.body;
        const isDark = body.classList.toggle('dark-theme');
        
        // Зберігаємо вибір у пам'ять браузера
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Оновлюємо колір фону прямо через JS для миттєвого ефекту
        body.style.transition = "0.5s ease all";
        
        if (isDark) {
            body.style.backgroundColor = "#1a1a1a";
            body.style.color = "#ffffff";
            console.log("🌑 Активувано темну тему");
        } else {
            body.style.backgroundColor = "#f8fafc";
            body.style.color = "#0f172a";
            console.log("☀️ Активувано світлу тему");
        }
    },

    // Перевірка при завантаженні сторінки
    init() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            this.toggle(); // Якщо раніше була темна — вмикаємо її
        }
    }
};

// Запускаємо перевірку при старті
window.addEventListener('DOMContentLoaded', () => ThemeEngine.init());
