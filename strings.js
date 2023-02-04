//Довжина строки. Властивість length

// const message = 'У цій строці 25 символів.';

// console.log(message.length);

//Конкатинація строк
const furstName = 'Chelsy';
const lastName = 'Esmerald';

console.log(furstName +  lastName);

/*Напиши скрипт який виводить строку у форматі:
* "Гість х у поселяється в z номер q"
* підстав замість x y z q значення змінних.
*/

const room = 716;
const type = 'VIP';
// const welcomeMsg = 'Гість' +  ""  +    furstName + "" + lastName +  "" + "поселяється" + "" + "в" +  ""  + type +  "" +  'номер' + room;

// console.log();


/* 
* Шаблонні стороки
* Створюєємо строку поселення в готель
*/
const quantity = 25;
const ordermsg = `Ви замовили ${quantity} холодильників`;

// console.log(`Гість ${furstName} ${lastName}  поселяється в ${type} номер ${room}`);
// console.log(ordermsg)
/*
Нормалізація з методом toLowerCase()
*/
// Що шукаєм?


console.log();


// Метод slice()
const tel = "Samsung";
const inOb = 'Samsung';
const normalixeTel = tel.toUpperCase();
console.log(tel)

console.log(normalixeTel);


// Пошук в строці з методом includes()

const blackListedWord1 = 'спам';
const blackListedWord2 = 'розпродаж';

const string1 = "Привіт, я продавець Абдул, це не спам, пропоную тобі мільйон!";
const string2 = "Найбільший РОЗПРОДАЖ в цю неділю, не пропустіть!";
const string3 = "Рекламна компанія #fatLivesmatter";



