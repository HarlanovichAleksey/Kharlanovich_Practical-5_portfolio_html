/**
 * Функция tic() — вычисляет время до конца текущего дня
 * и выводит его в элемент <samp id="countdown">
 */
function tic() {
    // 1. Находим элемент в DOM
    const timerElement = document.getElementById('countdown');
    
    // Если элемента нет на странице — прерываем выполнение
    if (!timerElement) return;

    // 2. Получаем текущее время
    const now = new Date();

    // 3. Создаём объект "конец сегодняшнего дня" (23:59:59)
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    // 4. Вычисляем разницу в миллисекундах
    const diff = endOfDay - now;

    // 5. Переводим миллисекунды в часы, минуты и секунды
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // 6. Форматируем значения (добавляем ведущий ноль, если число < 10)
    const format = (num) => String(num).padStart(2, '0');

    // 7. Выводим результат в DOM (внутрь тега <samp>)
    timerElement.textContent = `${format(hours)} : ${format(minutes)} : ${format(seconds)}`;
}

// Запускаем функцию сразу при загрузке страницы, чтобы не ждать 1 секунду
tic();

// Вызываем функцию каждые 1000 миллисекунд (1 секунду)
setInterval(tic, 1000);