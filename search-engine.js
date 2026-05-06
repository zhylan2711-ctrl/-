// Модуль інтелектуального пошуку Monolith
const SearchEngine = {
    // База даних для пошуку (можна доповнювати)
    database: [
        { title: "Головна", link: "#", tags: "старт, початок, home" },
        { title: "Профіль користувача", link: "#", tags: "юзер, аккаунт, вхід" },
        { title: "Налаштування теми", link: "#", tags: "колір, ніч, дизайн" },
        { title: "Контакти", link: "#", tags: "пошта, зв'язок, допомога" },
        { title: "Архів повідомлень", link: "#", tags: "чат, листи, історія" }
    ],

    // Функція виконання пошуку
    performSearch(query) {
        const searchTerm = query.toLowerCase().trim();
        if (!searchTerm) return;

        console.log(`Пошук за запитом: ${searchTerm}...`);

        const results = this.database.filter(item => 
            item.title.toLowerCase().includes(searchTerm) || 
            item.tags.toLowerCase().includes(searchTerm)
        );

        this.renderResults(results);
    },

    // Виведення результатів на екран
    renderResults(results) {
        const area = document.getElementById('display-area');
        if (results.length > 0) {
            area.innerHTML = `<h4>Знайдено збігів: ${results.length}</h4>` + 
                results.map(res => `<div style="margin-bottom:5px;">📍 <a href="${res.link}">${res.title}</a></div>`).join('');
        } else {
            area.innerHTML = `<p style="color: red;">Нічого не знайдено за цим запитом.</p>`;
        }
    }
};

console.log("Пошукова система [search-engine.js] активована.");
