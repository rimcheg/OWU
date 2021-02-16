// let str = 'Привет';
// let num = 123;
// let flag = true;
// let txt = 'true';
// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof flag);
// console.log(typeof txt);

// let a1 = 5 + 3;
// let a2 = 5 - 3;
// let a3 = 5 * 3;
// let a4 = 5 / 3;
// let a5 = 5 % 3;
// console.log(a1, a2, a3, a4, a5);

// let a6 = 5 % 3;
// let a7 = 3 % 5;
// let a8 = 5 + '3';
// let a9 = '5' - 3;
// let a10 = 75 + 'кг';
// console.log(a6, a7, a8, a9, a10);

// let height = 23;
// let width = 10;
// let s = height * width / 2;
// console.log(s + 'cm2');

// let heightC = 10;
// let dC = 4;
// let v = 3.14 * Math.pow(4 / 2, 2) * 10;
// console.log(v + 'm3');

// let n = 3;
// let m = 4;
// let k = Math.pow(Math.pow(4, 2) + Math.pow(3, 2), 1/2);
// console.log(k);

// let str = "Hello world";
// document.write(`<h1>${str}</h1>`);
// alert(str);
// console.log(str);

// let i_am = 'Zhydkov Ruslan Igorevich\n32 years\nreading';
// alert(i_am);

// let str2 = 'ты';
// let str3 = 'такой?';
// let str1 = 'Кто' + ' ' + str2 + ' ' + str3;
// let concatenation = str1;
// document.write(concatenation)

// let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>");  // 205  строка 20 + строка 5 = 205
//      document.write(str - a + "<br/>");  //15
//      document.write(str * "2" + "<br/>");//40
//      document.write(str / 2 + "<br/>");  //10

// console.log(         // ввыделит целое число 3, -7, 435 и NaN(т.к. встретит не числовое значение)
// parseInt("3.14"),
// parseInt("-7.875"),
// parseInt("435"),
// parseInt("Вася")
// )

// let str = prompt("Enter something", "ho-ho");
// console.log(str);

// let a = prompt ('enter a');  
// let b = prompt ('enter b');
// a = Number(a);
// b = Number(b);
// let c = a + b;
// alert(c)

// let a = prompt('enter your name');
// let b = prompt('enter your firstname');
// let c = prompt('enter your age');
// let d = 'Доброго вечера' + ' ' + b + ' ' + a + ', мои поздравления что вам' + ' ' + c +'!';
// alert(d);

// let a = prompt('enter a');
// let b = prompt('enter b');
// let c = prompt('enter c');
// a = Number(a);
// b = Number(b);
// c = Number(c);
// console.log(a, b, c)
// let max = 'maximum';
// let min = 'minimum';
// let ost = 'ostatok';

// if ((a > b) && (a > c)) {
//     max = a;
// } else if (b > c) {
//     max = b;
// } else {
//     max = c;
// }
//                                       
// if ((a < b) && (a < c)) {                 
//     min = a;
// } else if (b < c) {
//     min = b;
// } else {
//     min = c;
// }

// if ((a != max) && (a != min)) {
//     ost = a;
// } else if ((b != max) && (b != min)) {
//     ost = b;
// } else if ((c != max) && (c != min)) {
//     ost = c;
// } else if ((a = b) || (a = c)) {
//     ost = a
// } else if (b = c) {                         
//     ost = b
// }
// console.log(min, ost, max);

// let color = prompt('Какой сигнал светофора Вы видите?', '');
// if ((color == 'зеленый') || (color == 'нижний') || (color == 'gren') || (color == 'bottom')) {
//     color = 0;
// } else if ((color == 'желтый') || (color == 'средний') || (color == 'yellow') || (color == 'center')) {
//     color = 1;
// } else if ((color == 'красный') || (color == 'верхний') || (color == 'red') || (color == 'top')) {
//     color = 2;
// } else {
//     color = -5;
// }
// console.log(color)

// let isRoadClear = prompt('Есть ли на дороге мешины?', '');
// if ((isRoadClear === '0') || (isRoadClear === 'нет')) {
//     isRoadClear = 0;
// } else {
//     isRoadClear = 1;
// }
// console.log(isRoadClear)

// if ((color == 0) && (isRoadClear == 0)) {
//     alert('иди, но аккуратно!!!')
// } else if ((color == 0) && (isRoadClear == 1)) {
//     alert('подожди пока нарушители проедут!!!')
// } else if ((color == 1) && (isRoadClear == 0)) {
//     alert('все равно жди!!!')
// } else if ((color == 1) && (isRoadClear == 1)) {
//     alert('жди!!!')
// } else if ((color == 2) && (isRoadClear == 0)) {
//     alert('стой все равно!!!')
// } else if ((color == 2) && (isRoadClear == 1)) {
//     alert('стой и жди!!!')
// } else if ((color < 0) && (isRoadClear == 1)) {
//     alert('делай что хочешь, но я бы подождал пока машины проедут!')
// } else if ((color < 0) && (isRoadClear == 0)) {
//     alert('хоть сри на дороге, главное быстро')
// } else {
//     alert('Хер его знает что ты ввел, наверное машина тебя схерачила и на тротуаре!')
// }

