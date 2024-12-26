console.log('Hello, TypeScript!');

import Movie from './Movie';
import Cart from './Cart';

// Создаем экземпляр Movie
const avengers = new Movie(
    1,                     // id
    "Мстители",           // Название
    500,                  // Цена
    "Joss Whedon",        // Автор (мы можем оставить его в зависимости от контекста)
    2012,                 // Год
    "США",                // Страна
    "Avengers Assemble!",  // Слоган
    "фантастика",         // Жанр
    137                   // Длительность в минутах
);

// Создаем экземпляр Cart
const cart = new Cart();

// Добавляем фильм в корзину
cart.add(avengers);

// Проверка: выводим информацию о товарах в корзине
console.log("Товары в корзине:");
cart.getAll().forEach(item => {
    // Используем приведение типа, так как элемент может быть любого типа Buyable.
    if (item instanceof Movie) {
        console.log(item.displayInfo());
    }
});

// Проверка: убедиться, что добавлено именно одно значение
if (cart.getAll().length === 1) {
    console.log("Фильм успешно добавлен в корзину.");
} else {
    console.log("Фильм не был добавлен в корзину.");
}