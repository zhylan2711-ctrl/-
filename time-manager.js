// Модуль керування часом та таймерами
const TimeManager = {
    timerInterval: null,

    // Запуск живого годинника
    startClock() {
        const area = document.getElementById('display-area');
        
        // Створюємо контейнер для годинника, якщо його немає
        area.innerHTML = `<div id="live-clock" style="font-size: 2rem; font-weight: bold; color: #1e293b; text-align: center; padding: 20px; background: #f1f5f9; border-radius: 10px;">00:00:00</div>`;

        setInterval(() => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('uk-UA');
            const clockElement = document.getElementById('live-clock');
            if (clockElement) clockElement.innerText = timeString;
        }, 1000);
        
        console.log("🕒 Годинник запущено");
    },

    // Таймер зворотного відліку (наприклад, на 60 секунд)
    startCountdown(seconds) {
        let timeLeft = seconds;
        const area = document.getElementById('display-area');

        if (this.timerInterval) clearInterval(this.timerInterval);

        this.timerInterval = setInterval(() => {
            area.innerHTML = `<div style="text-align:center;">
                <h3>Таймер зворотного відліку:</h3>
                <div style="font-size: 3rem; color: #ef4444;">${timeLeft}с</div>
            </div>`;
            
            if (timeLeft <= 0) {
                clearInterval(this.timerInterval);
                area.innerHTML = "<h3>⏰ Час вичерпано!</h3>";
                if (window.NotificationSystem) NotificationSystem.show("Таймер завершено!", "error");
            }
            timeLeft--;
        }, 1000);
    }
};

console.log("Модуль часу [time-manager.js] інтегровано в систему.");
