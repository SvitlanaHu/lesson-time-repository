// Перевірка на відповідність паролю
//      function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//     // Change code below this line
//     message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"
//     // Change code above this line
//     return message;
// }
// console.log(password(vhvbkjnl));


// Вибрати найдовше слово зі строки
// function findLongestWord(string) {
//     // let string = "my name is Svitlana"
//     // string = string.toLowerCase();
//     string = string.split(" ");
//     let maxLength = 0;
//     let length = 0;
//     let maxWorld;
//     let world;
//     for (let i = 0; i < string.length; i++) {
//         world = string[i];
//         // console.log(world);
//         length = world.length;
//         // console.log(length);
//         if (maxLength < length) {
//             maxLength = length;
//             maxWorld = world;
//         }
//     }
//     return maxWorld;
// }
// console.log(findLongestWord("my name is Svitlana"));


// Метод push() дозволяє додати один або кілька елементів в кінець масиву, без необхідності вказувати індекси елементів, що додаються.
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.
// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     for (let i = min; i <= max; i++) {
//         numbers.push(`${i}`);
//     }
//     return numbers;
// }
// console.log(createArrayOfNumbers(0, 4));


// Напиши функцію filterArray(numbers, value), яка приймає масив чисел(параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value(число).
// function filterArray(numbers, value) {
//     const newNumbers = [];

//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > value) {
//             newNumbers.push(numbers[i]);
//         }
//     }
//     numbers = newNumbers;
//     return numbers;
// }
// console.log(filterArray([0, 24, 2, 57, 4, 11], 4));


// Метод includes(value) перевіряє, чи присутній в масиві елемент зі значенням value, і повертає true або false відповідно.Сфера застосування цього методу зводиться до ситуацій, коли необхідно перевірити, чи присутній елемент в масиві, і не важлива його позиція(індекс).
// Перевіряє на присутність
// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];
//     const result = fruits.includes(fruit);
//     return result; // Change this line
// }
// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.
// function getCommonElements(array1, array2) {
//     let jointArray = [];
//     for (let i = 0; i < array1.length; i++) {
//         if (array2.includes(array1[i])) {
//             jointArray.push(array1[i]);
//         }
//     }

//     return jointArray;
//     // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));


// function calculateTotalPrice(order) {
//     let total = 0;
//     // рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

//     // for (let i = 0; i < order.length; i += 1) {
//     //   total += order[i];
//     // }

//     for (let number of order) {
//         total += number;
//     }
//     return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));


// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).

// function getEvenNumbers(start, end) {
//     const numbers = [];
//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             numbers.push(i);
//         }
//     }

//     return numbers;
// }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));


// Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:
// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number
// function findNumber(start, end, divisor) {
//     for (let i = start; i < end; i += 1) {
//         if (i % divisor === 0) {
//             return i;
//         }
//     }
// }
// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));
// console.log(findNumber(16, 20, 7));


// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

// function includes(array, value) {
//     let message;
//     for (let object of array) {
//         if (object === value) {
//             return message = true;
//         }
//     }
//     if (message === undefined) {
//         return message = false;
//     }
// }
// console.log(includes([3, 5, 9], 5));
// console.log(includes([3, 7, 9], 5));


// // Отримати рандомне значення масиву:
// const fruits = ["apple", "plum", "mango", "pine", "oringe"];
// const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
// console.log(randomFruit);

// // статистика користувача соціальної мережі складається з кількості відстежувачів, переглядів і лайків, і зберігати ці дані найзручніше у вигляді об'єкта. Те саме з місцем розташування - окремо країна і місто.
// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: {
//         country: "Jamaica",
//         city: "Ocho Rios",
//     },
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };


// ****************************************
// Модуль 3
// ****************************************
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// // Change code below this line
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// console.log(apartment.owner.name);
// console.log(apartment.tags);
// console.log(apartment.rating);





// // Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.
// let propName = "name";
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];
// const productsLength = products.length;
// console.log(productsLength);

// function getAllPropValues(propName) {

//     let allValues = [];
//     for (const product of products) {

//         for (const key in product) {
//             if (key === propName) {
//                 allValues.push(product[key]);
//                 console.log(allValues);
//             }
//         }
//     }
//     return (allValues);
// }

// console.log("fn:", getAllPropValues("price"));




// // Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName - назва товару. Функція повинна повернути загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.
// let productName = "Radar";
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     // Change code below this line
//     let totalPrice = 0;
//     for (const product of products) {

//         for (const key in product) {
//             if (product[key] === productName) {
//                 totalPrice = product.price * product.quantity
//                 return (totalPrice);

//             }
//         }
//     }
//     return (totalPrice);


//     // Change code above this line
// }
// console.log("sum", calculateTotalPrice("Droid"));



// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Change code below this line
// const {
//     yesterday,
//     today,
//     tomorrow,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// const { yesterday, today, tomorrow, icon } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;



// const forecast = {
//     today: {
//         low: 28,
//         high: 32,
//         icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//         low: 27,
//         high: 31,
//     },
// };
// // Change code below this line
// const {
//     today: { high: highToday, low: lowToday, icon: iconToday },
//     tomorrow: { high: highTomorrow, low: lowTomorrow, icon: iconTomorrow = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, } = forecast;


// // Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.
// //     text - текст завдання.
// //     category - категорія завдання.
// //     priority - пріоритет завдання.
// // Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data. У новому об'єкті повинна бути властивість completed, значення якої зберігається в однойменній локальній змінній.
// // В параметрі data гарантовано буде тільки властивість text, а інші дві, category і priority, можуть бути відсутніми.Тоді, в новому об'єкті завдання, у властивостях category і priority повинні бути значення за замовчуванням, що зберігаються в однойменних локальних змінних.
// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
//     // Change code below this line
//     const dataNew = {
//         category: data.category || category,
//         priority: data.priority || priority,
//         text: data.text,
//         completed: completed
//     };
//     return { ...data, ...dataNew }
//     // Change code above this line
// }



// // Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки за аналогією з getBooks() і addBook(bookName).
// // Метод removeBook(bookName) буде видаляти книгу за назвою.Повертає рядок "Deleting book <назва книги>", де < назва книги > - це значення параметра bookName.
// // Метод updateBook(oldName, newName) буде оновлювати назву книги на нову.Повертає рядок "Updating book <стара назва> to <нова назва>", де < стара назва > і < нова назва > - це значення параметрів oldName і newName відповідно.

// const bookShelf = {
//     // Change code below this line
//     books: ["The last kingdom", "The guardian of dreams"],
//     getBooks() {
//         return "Returning all books";
//     },
//     addBook(bookName) {
//         return `Adding book ${bookName}`;
//     },
//     removeBook(bookName) {
//         return `Deleting book ${bookName}`;
//     },
//     updateBook(oldName, newName) {
//         return `Updating book ${oldName} to ${newName}`
//     }
//     // Change code above this line
// };



// // Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName на newName у властивості books. Використовуй indexOf() для того, щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент.
// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//         // Change code below this line
//         const num = this.books.indexOf(oldName);
//         this.books.splice(num, 1, newName);
//         // Change code above this line
//     },
// };



// // Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й іншими характеристиками. Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.

// //       {
// //         name: "Dragon breath",
// //         price: 700
// //       }
// // Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, а з масивом об'єктів.

// //  getPotions() - метод для отримання всього зілля.Повертає значення властивості potions.
// //  addPotion(newPotion) - додає зілля newPotion(вже об'єкт) в масив у властивості potions, але тільки, якщо такого зілля ще немає в інвентарі. В іншому випадку повертається рядок.
// //  removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
// //  updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в масиві potions.

// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         for (let potion of this.potions) {
//             if (potion.name === newPotion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//         }
//         this.potions.push(newPotion);
//         return this.potions;
//     },
//     removePotion(potionName) {
//         for (let potionIndex = 0; potionIndex < this.potions.length; potionIndex++) {
//             if (this.potions[potionIndex].name === potionName) {
//                 this.potions.splice(potionIndex, 1);
//                 return;
//             }
//         }
//         return `Potion ${potionName} is not in inventory!`;
//     },
//     updatePotionName(oldName, newName) {
//         for (let potion of this.potions) {
//             if (potion.name === oldName) {
//                 potion.name = newName;
//                 return;
//             }
//         }
//         return `Potion ${oldName} is not in inventory!`;
//     },
//     // Change code above this line
// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
