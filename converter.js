// Модуль обчислень та конвертації Monolith
const UnitConverter = {
    // Базові курси (можна оновлювати через API в майбутньому)
    rates: {
        USD: 41.5, // Курс долара до гривні
        EUR: 45.2, // Курс євро до гривні
    },

    // Функція конвертації валюти в гривню
    toUAH(amount, currency) {
        if (this.rates[currency]) {
            const result = amount * this.rates[currency];
            this.displayResult(`${amount} ${currency} = ${result.toFixed(2)} грн`);
        } else {
            this.displayResult("❌ Валюту не знайдено");
        }
    },

    // Конвертація кілометрів у милі
    kmToMiles(km) {
        const miles = km * 0.621371;
        this.displayResult(`${km} км = ${miles.toFixed(2)} миль`);
    },

    // Виведення результату в область відображення
    displayResult(text) {
        const area = document.getElementById('display-area');
        if (area) {
            area.innerHTML = `
                <div style="padding: 15px; background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px;">
                    <strong>Результат розрахунку:</strong><br>
                    <span style="font-size: 1.2em;">${text}</span>
                </div>
            `;
            console.log(`[Converter]: ${text}`);
        }
    }
};

console.log("Модуль конвертації [converter.js] готовий до обчислень.");
