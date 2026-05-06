// Модуль керування індикатором завантаження
const LoadingManager = {
    // Функція запуску прогресу
    start() {
        // Створюємо елемент прогрес-бару, якщо його ще немає
        if (!document.getElementById('global-loader')) {
            const loader = document.createElement('div');
            loader.id = 'global-loader';
            loader.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                height: 4px;
                background: linear-gradient(90deg, #3b82f6, #10b981);
                width: 0%;
                z-index: 9999;
                transition: width 0.4s ease;
            `;
            document.body.appendChild(loader);
        }
        
        this.update(10); // Починаємо з 10%
    },

    // Функція оновлення відсотків
    update(percent) {
        const loader = document.getElementById('global-loader');
        if (loader) {
            loader.style.width = percent + '%';
            if (percent >= 100) {
                setTimeout(() => this.finish(), 500);
            }
        }
    },

    // Завершення та приховування
    finish() {
        const loader = document.getElementById('global-loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
                console.log("✅ Завантаження завершено");
            }, 500);
        }
    }
};

console.log("Менеджер завантаження [loader.js] готовий до роботи.");
