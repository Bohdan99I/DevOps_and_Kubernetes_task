const base64 = require("base-64");

const steps = ["plan", "code", "test", "delivery", "deploy", "monitor"];

steps.forEach((step) => {  
  const encodedStep = base64.encode(step); 
  console.log(encodedStep);
});

// Без зовнішнього підключення
//const steps = ["plan", "code", "test", "delivery", "deploy", "monitor"];
// Цикл для обробки кожного елемента масиву
//steps.forEach(step => {
    // Кодуємо поточний етап у форматі base64
    //const encodedStep = btoa(step);
    // Виводимо закодований етап на консоль
    //console.log(encodedStep);
//});


// Код поза середовищем браузера, наприклад, у середовищі Node.js
//const steps = ["plan", "code", "test", "delivery", "deploy", "monitor"];
// Цикл для обробки кожного елемента масиву
//steps.forEach(step => {
    // Кодуємо поточний етап у форматі base64
    //const encodedStep = Buffer.from(step).toString('base64');
    // Виводимо закодований етап на консоль
    //console.log(encodedStep);
//});