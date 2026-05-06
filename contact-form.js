// Модуль для обробки повідомлень від користувачів
function createContactForm() {
    const area = document.getElementById('display-area');
    
    area.innerHTML = `
        <div style="background: white; padding: 20px; border-radius: 10px; border: 1px solid #ddd; max-width: 400px;">
            <h3 style="margin-top:0">Напишіть нам</h3>
            <div style="margin-bottom: 10px;">
                <input type="text" id="contact-name" placeholder="Ваше ім'я" style="width: 100%; padding: 8px; margin-bottom: 5px;">
                <input type="email" id="contact-email" placeholder="Ваш Email" style="width: 100%; padding: 8px; margin-bottom: 5px;">
                <textarea id="contact-text" placeholder="Ваше повідомлення" style="width: 100%; padding: 8px; height: 80px;"></textarea>
            </div>
            <button onclick="sendContactData()" style="width: 100%; background: #2563eb;">Відправити код</button>
        </div>
    `;
}

function sendContactData() {
    const name = document.getElementById('contact-name').value;
    const text = document.getElementById('contact-text').value;

    if (name && text) {
        alert(`Дякуємо, ${name}! Ваше повідомлення прийнято в обробку системою Monolith.`);
        console.log(`Відправлено повідомлення: ${text}`);
        document.getElementById('display-area').innerHTML = "<h3>✅ Повідомлення надіслано!</h3>";
    } else {
        alert("Будь ласка, заповніть усі поля!");
    }
}

console.log("Модуль контактної форми [contact-form.js] активовано.");
