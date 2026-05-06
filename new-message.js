// Система обробки нових повідомлень
class MessageSystem {
    constructor() {
        this.messages = [];
        console.log("Система повідомлень ініціалізована...");
    }

    // Функція для створення нового повідомлення на екрані
    send(text, sender = "Система") {
        const messageId = Date.now();
        const newMessage = {
            id: messageId,
            text: text,
            sender: sender,
            time: new Date().toLocaleTimeString()
        };

        this.messages.push(newMessage);
        this.renderMessage(newMessage);
    }

    // Візуалізація повідомлення (додавання в HTML)
    renderMessage(msg) {
        const chatBox = document.getElementById('app-root'); // куди вставляємо
        const msgElement = document.createElement('div');
        
        msgElement.style.cssText = `
            background: #e1ffc7;
            padding: 10px;
            margin: 5px;
            border-radius: 10px;
            border-left: 5px solid #25d366;
            font-family: Arial, sans-serif;
        `;

        msgElement.innerHTML = `
            <strong>${msg.sender}</strong> <span style="font-size: 0.8em; color: gray;">[${msg.time}]</span><br>
            ${msg.text}
        `;

        chatBox.appendChild(msgElement);
    }
}

// Запуск системи
const chat = new MessageSystem();

// Приклад використання (можна викликати в консолі):
// chat.send("Привіт! Це твоє перше нове повідомлення.", "Адмін");
