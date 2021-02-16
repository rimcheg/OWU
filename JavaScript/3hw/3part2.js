// let human = {
//     age: {
//         32: ['Ruslan', 'Aleksandr', 'Artem'],
//         35: ['Inna', 'Roman', 'Aleksandra'],
//         8: ['Lev', 'Nikita', 'Nikoletta']
//     },
//     married: [true, false],
//     kids: 3
// }

// let car = {
//     brand: ['BMW', 'Aston_Martin', 'Alfa_Romeo'],
//     value: {
//         bensin: '3l',
//         disel: '2.4l',
//         gaz: '2.2l',
//     },
//     body: 'sport',
//     spead: 360
// }

// let book = {
//     author: 'Emilio_Salgari',
//     publishing_house: ['ВКН', 'БХВ-Петербург', 'ЭКОМ'],
//     books_circulation: {
//         100000: ['Чёрный корсар', 'Taйна тёмных джунглей', 'Сандокан — Тигр семи морей', 'Янес де Гомера'],
//         70000: ['Последние флибустьеры', 'Карфаген в огне', 'Пираты Малайзии'],
//         50000: ['Капитан Темпеста', 'Корсары Бермудских островов', 'Владыка Морей']
//     },
//     genre: 'novel'
// }

// let family = {
//     surname: 'Zhydkov',
//     family_members: ['Ruslan', 'Inna', 'Lev'],
//     work: {
//         father: true,
//         mather: false,
//         son: false
//     },
//     security: 'average',
//     hobby: 'cinema'
// }

// let school = {
//     number: 77,
//     teachers: 43,
//     classes: {
//         1_4: 16,
//         5_9: 20,
//         10_12: 9
//     },
//     management_staff: ['Alla Ivanovna', 'Raisa Andreevna', 'Valentina Igorevna'],
//     students: 780
// }

// let i = 0;
// for (i in human) {
//     console.log(i)
// }
// for (i in car) {
//     console.log(i)
// }
// for (i in book) {
//     console.log(i)
// }
// for (i in family) {
//     console.log(i)
// }
// for (i in school) {
//     console.log(i)
// }

// console.log(Object.keys(human))
// console.log(Object.keys(car))
// console.log(Object.keys(book))
// console.log(Object.keys(family))
// console.log(Object.keys(school))



// let cars1 = [
//     {brand: 'BMW', year: 2020, value: '2.4L', color: 'yellow'},
//     {brand: 'Audi', year: 2018, value: '2.2L', color: 'grey'},
//     {brand: 'Aston Martin', year: 2017, value: '2.3L', color: 'broun'},
//     {brand: 'Bantly', year: 2021, value: '2L', color: 'gold'},
//     {brand: 'Tesla', year: 2019, value: '0L', color: 'red'},
//     {brand: 'Acura', year: 2017, value: '2.1L', color: 'black'},
//     {brand: 'Bugatti', year: 2016, value: '2.3L', color: 'green'},
//     {brand: 'Cadillac', year: 2015, value: '2.5L', color: 'blue'},
//     {brand: 'Ferrari', year: 2014, value: '2.6L', color: 'orange'},
//     {brand: 'Porshe', year: 2013, value: '3L', color: 'violet'}
// ]

// let cities = [
//     {name: 'Шанхай', population: 23400000 , country: 'Китай', region: 'Азия'},
//     {name: 'Пекин', population: 21200000, country: 'Китай', region: 'Азия'},
//     {name: 'Мумбаи', population: 15400000, country: 'Индия', region: 'Азия'},
//     {name: 'Стамбул', population: 15000000, country: 'Турция', region: 'Азия'},
//     {name: 'Карачи', population: 14900000, country: 'Пакистан', region: 'Азия'},
//     {name: 'Гуанчжоу', population: 14000000, country: 'Китай', region: 'Азия'},
//     {name: 'Токио', population: 14000000, country: 'Япония', region: 'Азия'},
//     {name: 'Лагос', population: 13700000, country: 'Нигерия', region: 'Африка'},
//     {name: 'Тяньцзинь', population: 13300000, country: 'Китай', region: 'Азия'},
//     {name: 'Москва', population: 12700000, country: 'Россия', region: 'Европа'},
// ]

// let cars2 = [
//     {brand: 'Fiat', year: 2020, value: '2.4L', color: 'Dark blue', driver: {name: 'Vasya', age: 32, gender: 'male', experience: 7}},
//     {brand: 'Honda', year: 2018, value: '2.2L', color: 'Pink', driver: {name: 'Petya', age: 33, gender: 'male', experience: 6}},
//     {brand: 'Hummer', year: 2017, value: '2.3L', color: 'White', driver: {name: 'Kolya', age: 34, gender: 'male', experience: 5}},
//     {brand: 'Infinity', year: 2021, value: '2L', color: 'Silver', driver: {name: 'Sasha', age: 35, gender: 'female', experience: 4}},
//     {brand: 'Iveco', year: 2019, value: '3.0L', color: 'Amber', driver: {name: 'Pasha', age: 36, gender: 'male', experience: 3}},
//     {brand: 'Jaguar', year: 2017, value: '2.1L', color: 'Azure', driver: {name: 'Vitya', age: 37, gender: 'male', experience: 2}},
//     {brand: 'Lexus', year: 2016, value: '2.3L', color: 'Bronze', driver: {name: 'Maks', age: 53, gender: 'male', experience:12}},
//     {brand: 'Lotus', year: 2015, value: '2.5L', color: 'Coral', driver: {name: 'Tema', age: 43, gender: 'male', experience: 11}},
//     {brand: 'Maserati', year: 2014, value: '2.6L', color: 'Sand', driver: {name: 'Dima', age: 42, gender: 'male', experience: 14}},
//     {brand: 'Nissan', year: 2013, value: '3L', color: 'Lilac', driver: {name: 'Vova', age: 31, gender: 'male', experience: 15}}
// ]

// let i = 0;
// while (i < cars1.length) {
//     console.log(cars1[i])
//     i++
// }
// while (i < cars2.length) {
//     console.log(cars2[i])
//     i++
// }
// while (i < cities.length) {
//     console.log(cities[i])
//     i++
// }
// for (i = 0; i < cars1.length; i++) {
//     console.log(cars1[i])
// }
// for (i = 0; i < cars2.length; i++) {
//     console.log(cars2[i])
// }
// for (i = 0; i < cities.length; i++) {
//     console.log(cities[i])
// }
// for (let value of cars1) {
//     console.log(value)
// }
// for (let value of cars2) {
//     console.log(value)
// }
// for (let value of cities) {
//     console.log(value)
// }



// let human = {
//     age: {
//         32: ['Ruslan', 'Aleksandr', 'Artem'],
//         35: ['Inna', 'Roman', 'Aleksandra'],
//         8: ['Lev', 'Nikita', 'Nikoletta']
//     },
//     married: [true, false],
//     kids: 3
// }

// let car = {
//     brand: ['BMW', 'Aston_Martin', 'Alfa_Romeo'],
//     value: {
//         bensin: '3l',
//         disel: '2.4l',
//         gaz: '2.2l',
//     },
//     body: 'sport',
//     spead: 360
// }

// let book = {
//     author: 'Emilio_Salgari',
//     publishing_house: ['ВКН', 'БХВ-Петербург', 'ЭКОМ'],
//     books_circulation: {
//         100000: ['Чёрный корсар', 'Taйна тёмных джунглей', 'Сандокан — Тигр семи морей', 'Янес де Гомера'],
//         70000: ['Последние флибустьеры', 'Карфаген в огне', 'Пираты Малайзии'],
//         50000: ['Капитан Темпеста', 'Корсары Бермудских островов', 'Владыка Морей']
//     },
//     genre: 'novel'
// }

// let json_human = JSON.stringify(human, null, 3);
// let json_car = JSON.stringify(car, null, 3);
// let json_book = JSON.stringify(book, null, 3);
// console.log(json_human);
// console.log(json_car);
// console.log(json_book);

// let parse_human = JSON.parse(json_human);
// let parse_car = JSON.parse(json_car);
// let parse_book = JSON.parse(json_book);
// console.log(parse_human);
// console.log(parse_car);
// console.log(parse_book);


// let human = {
//     age: {
//         32: ['Ruslan', 'Aleksandr', 'Artem'],
//         35: ['Inna', 'Roman', 'Aleksandra'],
//         8: ['Lev', 'Nikita', 'Nikoletta']
//     },
//     married: [true, false],
//     kids: 3
// }
// let i = 0;
// let json_human =''
// for (let value in human) {
//     json_human += value + ' ' + JSON.stringify(human[value], null, 3)
// }
// console.log(json_human)


// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']},
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, 
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}
// ];
// let i = 0;
// let user_skills = [];
// for (i = 0; i < users.length; i++) {
//     user_skills.push(users[i].name + ': ' + users[i].skills)
// }
// console.log(user_skills)

// for (const key in users) {
//     console.log(users[[key]])
//     console.log(users[key].skills)
// }


let users = [
    {
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, 
{
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, 
{
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, 
{
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, 
{
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, 
{
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, 
{
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, 
{
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, 
{
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, 
{
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, 
{
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}
];

let div_user = document.createElement("div");
div_user.className = "users"
// for (i = 0; i < users.length; i++) {
    // new_div.innerHTML += `<div>
    // <div>${(users[i].name)}</div>
    // <div>${(users[i].age)}</div>
    // <div>${(users[i].status)}</div>
    // <div>
    // <div>${(users[i].address.country)}</div>
    // <div>${(users[i].address.city)}</div>
    // <div>${(users[i].address.street)}</div>
    // <div>${(users[i].address.houseNumber)}</div>
    // </div>
    // </div>`
// }

while (users.length > 0) {
    let new_div = document.createElement("div");
    let new_div1 = document.createElement("div");
    for (let [key, value] of Object.entries(users[0])) {
        let k = value
        if (typeof k != 'object') {
            new_div.innerHTML += `<div>${k}</div>`
        } else {
            for (let [key, value] of Object.entries(k)){
                let a = value
                new_div1.innerHTML += `<div>${a}</div>`
            }
            new_div.innerHTML += `<div>${new_div1.innerHTML}</div>`
        }
    }
    users.shift()
    div_user.innerHTML += `<div>${new_div.innerHTML}</div>`
}
console.log(div_user)




let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'},
];
citiesWithId.sort(function(a, b) {
    if (a.user_id > b.user_id) {
        return 1;
    } else if (a.user_id < b.user_id) {
        return -1;
    } else {
        return 0;
    } 
})
let usersWithCities = []
for (i = 0; i < usersWithId.length; i++) {
    usersWithCities[i] = usersWithId[i]
    usersWithCities[i].address = citiesWithId[i]    
}
console.log(usersWithCities)

let div_txt = document.getElementsByTagName('div')
console.log(div_txt[0].textContent)
div_txt[0].innerText = 'zamena div'
div_txt[0].style.height = '200px'
let class_txt = document.getElementsByClassName('example')
console.log(class_txt[0].textContent)
class_txt[0].innerText = 'zamena class'
class_txt[0].style.width = '300px'
let ID_txt = document.getElementById('e_ID')
console.log(ID_txt.textContent)
ID_txt.innerText = 'zamena ID'
ID_txt.style.height = '100px'
ID_txt.style.width = '150px'



// let table = document.createElement('div')
// table.classList.add('parent')

// for (c = 0; c < 3; c++) {
//     let col = document.createElement('div')
//     col.classList.add('colum')
//     table.appendChild(col)
// }
// document.body.appendChild(table)


// for (r = 0; r < 10; r++) {
//     let table = document.createElement('div')
//     table.classList.add('parent')

//     for (c = 0; c < 3; c++) {
//         let col = document.createElement('div')
//         col.classList.add('colum')
//         table.appendChild(col)
//     }
//     document.body.appendChild(table)
// }

// for (r = 0; r < 10; r++) {
//     let table = document.createElement('div')
//     table.classList.add('parent')

//     for (c = 0; c < 5; c++) {
//         let col = document.createElement('div')
//         col.classList.add('colum')
//         table.appendChild(col)
//     }
//     document.body.appendChild(table)
// }


let n = prompt('enter number os row')
let m = prompt('enter number of collum')
for (r = 0; r < n; r++) {
    let table = document.createElement('div')
    table.classList.add('parent')

    for (c = 0; c < m; c++) {
        let col = document.createElement('div')
        col.classList.add('colum')
        table.appendChild(col)
    }
    document.body.appendChild(table)
}








// ============
// ====class===
// ============

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують 
//                     тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), 
//                     який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне 
//                                правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},

// 			];




// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users.
//      За допомогою document.createElement вивести їх в браузер. 
//     Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
