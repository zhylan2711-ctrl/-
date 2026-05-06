function generateQR(text) {
    const qrContainer = document.getElementById('qr-result');
    const size = "200x200";
    
    if (text.trim() !== "") {
        // Используем API для генерации ссылки на изображение QR-кода
        const qrUrl = `https://qrserver.com{size}&data=${encodeURIComponent(text)}`;
        
        qrContainer.innerHTML = `
            <p>Ваш QR-код для: "${text}"</p>
            <img src="${qrUrl}" alt="QR Code">
        `;
    } else {
        alert("Введите текст или ссылку!");
    }
}

// Пример вызова: generateQR('https://github.com');
