// Модуль керування фотогалереєю
const GalleryModule = {
    // Список картинок (використовуємо placeholder для прикладу)
    images: [
        { url: 'https://picsum.photos', title: 'Природа' },
        { url: 'https://picsum.photos', title: 'Технології' },
        { url: 'https://picsum.photos', title: 'Архітектура' },
        { url: 'https://picsum.photos', title: 'Люди' }
    ],

    // Функція створення галереї на сторінці
    init() {
        const area = document.getElementById('display-area');
        if (!area) return;

        let html = '<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; padding: 10px;">';
        
        this.images.forEach((img, index) => {
            html += `
                <div style="cursor: pointer; overflow: hidden; border-radius: 8px;" onclick="GalleryModule.viewImage(${index})">
                    <img src="${img.url}" alt="${img.title}" style="width: 100%; transition: transform 0.3s ease;">
                    <p style="font-size: 12px; text-align: center;">${img.title}</p>
                </div>
            `;
        });

        html += '</div>';
        area.innerHTML = html;
        console.log("🖼️ Галерея завантажена успішно");
    },

    // Функція "перегляду" (збільшення)
    viewImage(index) {
        const img = this.images[index];
        alert(`Перегляд зображення: ${img.title}\nURL: ${img.url}`);
        // В майбутньому тут буде код для відкриття модального вікна
    }
};

console.log("Модуль галереї [gallery.js] підключено.");
