// let mass = [23, 32, 34, 43, 14, 'my', 'first', 'practik', 'with', 'massiv', true, false, 432, '432', false]
// console.log(mass)

// let arr1 = [];
// arr1[7] = 'this';
// arr1[3] = 'my';
// arr1[1] = 1;
// arr1[17] = 147;
// arr1.name = 'js'
// arr1.push('first');
// arr1.unshift('task');
// console.log(arr1)

// for (i = 0; i < 10; i++) {
//     document.write(`<div>${'Ruslan'}</div>`)
// }

// for (i = 0; i < 10; i++) {
//     document.write(`<div>${i + ' ' + 'Ruslan'}</div>`)
// }

// let i = 0
// while (i < 20) {
//     document.write(`<h1>${i + ' ' + 'Ruslan'}</h1>`);
//     i++;
// }

// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (i = 0; i < 10; i++) {
//     console.log(arr2[i])
// }

// let arr3 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
// for (i = 0; i < 10; i++) {
//     console.log(arr3[i])
// }

// let arr4 = [1, 2, 3, '4', '5', '6', true, false, true, false]
// for (i = 0; i < 10; i++) {
//     if (typeof arr4[i] === 'boolean') {
//         console.log(arr4[i])
//     } 
// }
// for (i = 0; i < 10; i++) {
//     if (typeof arr4[i] === 'number') {
//         console.log(arr4[i])
//     } 
// }
// for (i = 0; i < 10; i++) {
//     if (typeof arr4[i] === 'string') {
//         console.log(arr4[i])
//     } 
// }

// let arr5 = []
// arr5[7] = 'this';
// arr5[3] = 'my';
// arr5[1] = 1;
// arr5[17] = 147;
// arr5.name = 'js'
// arr5.push('first');
// arr5.unshift('task');
// arr5.push('aisufla');
// arr5.unshift(5);
// arr5[25] = 25;
// for (i=0; i < arr5.length; i++) {
//     if (typeof arr5[i] != 'undefined') {
//         console.log(arr5[i])
//     }
// }

// let i=0;
// for (i=0; i < 10; i++) {
//     console.log(i+1);
//     document.write(i + 1 + '<br/>')
// }
// let i=0;
// for (i=0; i < 100; i++) {
//     console.log(i+1);
//     document.write(i + 1 + '<br/>')
// }
// let i = 0;
// for (i = 0; i < 100; i += 2) {
//     console.log(i/2+1);
//     document.write(i/2+1 + '<br/>')
// }
// let i = 0;
// for (i = 0; i < 100; i += 2) {
//     console.log(i);
//     document.write(i + '<br/>')
// }
// let i = 0;
// for (i = 0; i < 100; i++) {
//     if (i%2 == 0) {
//         console.log(i);
//         document.write(i + '<br/>')
//     }
// }
// let i = 0;
// for (i = 0; i < 100; i++) {
//     if (i%2 == 1) {
//         console.log(i);
//         document.write(i + '<br/>')
//     }
// }

// let m = 0;
// let s = 0;
// for (m=0; m<=2; m++) {
//     for (s=0; s<=59; s++) {
//         console.log(m + ' ' + s)
//         if (m == 2) {
//             break
//         }
//     }
// }

// let h = 0;
// let m = 0;
// let s = 0;
// for (h=0; h<=2; h++) {
//     for (m=0; m<=20; m++) {
//         for (s=0; s<60; s++) {
//             console.log(h + ' ' + m + ' ' + s)
//             if ((h == 2) && (m == 20)) {
//                 break
//             }
//         }
//     }
// }

// let arr = ['a', 'b', 'c'];
// let i = 0;
// for (i=0; i<3; i++) {
//     arr.push(i+1)
//     console.log(arr)
// }

// let arr = [1, 2, 3];
// let arr1 =[];
// let i = 0;
// for (i = 0; i < arr.length; i++) {
//     arr1.unshift(arr[i])
// }
// console.log(arr1)

// let arr = [1, 2, 3];
// let i = 0;
// for (i = 0; i<3; i++) {
//     arr.push(i+4)
//     console.log(arr)
// }
// for (i=0; i<3; i++) {
//     arr.unshift(6-i);
//     console.log(arr)
// }

// let arr = ['js', 'css', 'jq'];
// let first = arr.shift();
// console.log(first)
// let last = arr.pop();
// console.log(last)

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(-2))

// console.log(arr.slice(0, 2))

// arr.splice(1,2)

// arr.splice(3, 0 , 'a', 'b', 'c')
// arr.splice(1, 0, 'a', 'b')
// arr.splice(6, 0, 'c')
// arr.splice(8, 0, 'e')
// console.log(arr)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// i = 0;
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i])
//     }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// i = 0;
// arr1 = []
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         arr1.push(arr[i])
//     }
// }
// console.log(arr1)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// i = 0;
// arr1 = [];
// for (i = 0; i < arr.length; i++) {
//     arr1.push(arr[i])
// }
// console.log(arr1)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// i = 0;
// k = 0;
// arr1 = [];
// for (i = 0; i < arr.length; i++) {
//     arr1[i] = arr[i]
// }
// console.log(arr1)

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// i = 0;

// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// while (i < arr.length) {
//     console.log(arr[i]);
//     i++
// }

// while (i < arr.length) {
//     if (i%2 != 0) {
//         console.log(arr[i])
//     }
//     i++
// }

// for (i = 0; i < arr.length; i++) {
//     if (i%2 != 0) {
//         console.log(arr[i])
//     }
// }

// while (i < arr.length) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i])
//     }
//     i++
// }

// for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i])
//     }
// }

// for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 == 0) {
//         arr[i] = 'okten'
//     }
// }
// console.log(arr)

// console.log(arr.reverse())

// let arr = [2,17,13,6,22,31,45,66,100,-18];
// i = 0;
// arr.reverse()

// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// while (i < arr.length) {
//     console.log(arr[i]);
//     i++
// }

// while (i < arr.length) {
//     if (i%2 != 0) {
//         console.log(arr[i])
//     }
//     i++
// }

// for (i = 0; i < arr.length; i++) {
//     if (i%2 != 0) {
//         console.log(arr[i])
//     }
// }

// while (i < arr.length) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i])
//     }
//     i++
// }

// for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         console.log(arr[i])
//     }
// }

// for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 == 0) {
//         arr[i] = 'okten'
//     }
// }
// console.log(arr)

// arr = [];
// i=0;

// for (i = 1; i <= 50; i++) {
//     arr.push(i*2)
// }
// console.log(arr)

// for (i = 1; i <= 50; i++) {
//     arr.push(i * 2 - 1)
// }
// console.log(arr)

// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
// }
// for (i = 0; i < 30; i++) {
//     arr[i] = getRandomInt(732)
// }
// console.log(arr)

// k = 0;
// arr1 = []
// for (k = 0; k < 30; k += 3) {
//     if (arr[k] % 2 == 0) {
//         console.log(arr[k])
//         arr1.push(arr[k])
//     }
// }
// console.log(arr1)

// for (i = 0; i < 30; i++) {
//     if (arr[i+1] % 2 == 0) {
//         console.log(arr[i])
//     }
// }

// let arr = [100,250,50,168,120,345,188];
// let i = 0;
// let s = 0;
// for (i = 0; i < arr.length; i++) {
//     s = s + arr[i]
//     console.log(s)
//     if (i == arr.length -1) {
//         console.log(s / arr.length)
//     }
// }

// let arr = [];
// i = 0;
// k = 0;
// arr1 = []
// function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
// }
// for (i = 0; i < 20; i++) {
//     arr[i] = getRandomInt(200);
//     arr1[i] = arr[i] * 5
// }

// console.log(arr);
// console.log(arr1);

// let arr = ['afasf', 23213, true, false, 'affafa', 'agasfsd', '55', '432', 1231, 3332313];
// arr1 = [];
// i = 0;
// for (i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == 'number') {
//         arr1.push(arr[i])
//     }
// }
// console.log(arr1)

// let arr = [ 'a', 'b', 'c'];
// i = 0;
// k = '';
// for (i = 0; i < arr.length; i++) {
//     k = k + arr[i]
// }
// console.log(k)

// while (i < arr.length) {
//     k = k + arr[i];
//     i++
// }
// console.log(k)

// for (const value of arr) {
//     k = k + value
// }
// console.log(k)