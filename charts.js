// Модуль побудови графіків Monolith Charts
const ChartEngine = {
    // Приклад даних: [місяць, значення]
    data: [
        { label: "Січ", value: 45 },
        { label: "Лют", value: 80 },
        { label: "Бер", value: 65 },
        { label: "Квіт", value: 95 }
    ],

    // Функція малювання графіка
    draw() {
        const area = document.getElementById('display-area');
        if (!area) return;

        let chartHtml = `
            <div style="background: white; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0;">
                <h3 style="margin-top:0">Статистика проекту</h3>
                <div style="display: flex; align-items: flex-end; height: 200px; gap: 15px; border-bottom: 2px solid #cbd5e1; padding-bottom: 5px;">
        `;

        // Генерація стовпчиків
        this.data.forEach(item => {
            chartHtml += `
                <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
                    <div style="background: #3b82f6; width: 100%; height: ${item.value * 2}px; border-radius: 4px 4px 0 0; transition: height 1s ease;"></div>
                    <span style="font-size: 12px; margin-top: 8px; color: #64748b;">${item.label}</span>
                </div>
            `;
        });

        chartHtml += `</div></div>`;
        area.innerHTML = chartHtml;
        console.log("📊 Графік успішно побудовано.");
    }
};

console.log("Модуль візуалізації [charts.js] активовано.");
