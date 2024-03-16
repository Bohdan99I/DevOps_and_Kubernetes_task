const base64 = require("base-64");

// Масив з назвами етапів життєвого циклу розробки програмного забезпечення
const steps = ["plan", "code", "test", "delivery", "deploy", "monitor"];

// Цикл для обробки кожного елемента масиву
steps.forEach((step) => {
  // Кодуємо поточний етап у форматі base64
  const encodedStep = base64.encode(step);
  // Виводимо закодований етап на консоль
  console.log(encodedStep);
});
