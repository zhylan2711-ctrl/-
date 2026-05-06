// Модуль безпеки: Генератор паролів
const PasswordGenerator = {
    // Набір символів для пароля
    chars: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+",

    // Функція створення пароля
    generate(length = 12) {
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * this.chars.length);
            password += this.chars[randomIndex];
        }
        this.display(password);
    },

    // Виведення на екран
    display(pass) {
        const area = document.getElementById('display-area');
        if (area) {
            area.innerHTML = `
                <div style="background: #f8fafc; border: 2px dashed #cbd5e1; padding: 20px; border-radius: 10px; text-align: center;">
                    <p style="margin: 0 0 10px; color: #64748b;">Ваш новий надійний пароль:</p>
                    <div style="font-family: monospace; font-size: 1.5rem; background: white; padding: 10px; border-radius: 5px; border: 1px solid #e2e8f0; display: inline-block; margin-bottom: 15px;">
                        ${pass}
                    </div>
                    <br>
                    <button onclick="PasswordGenerator.generate(16)" style="background: #6366f1;">Згенерувати новий (16 симв.)</button>
                </div>
            `;
            console.log("🔐 Пароль згенеровано успішно.");
        }
    }
};

console.log("Модуль безпеки [password-gen.js] активовано.");
