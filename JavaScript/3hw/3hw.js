// let dog = {
//     name: 'dog',
//     age:  6,
//     color: 'braun',
//     bread: 'pitbull',
//     skils: 'guide_dog'
// }
// console.log(dog);

// let human = {
//     first_name: 'Zhydkov',
//     name: 'Ruslan',
//     last_name: 'Igorovich',
//     age: 32,
//     status: 'married'
// }
// console.log(human);

// let car = {
//     title: 'a6',
//     brand: 'audi',
//     volume: '2.4l',
//     mileage: 168000,
//     year: 2016
// }
// console.log(car);

// let apartment = {
//     square: 72,
//     number_of_rooms: 3, 
//     layout: 'square_hall',
//     floor: 3,
//     renovation: 'euro'
// }
// console.log(apartment);

// let book = {
//     name: 'Leonardo_da_Vinchi',
//     author: 'Alla_Rosolovska',
//     edition: 'IRIO',
//     genre: 'biographical_sketch',
//     year: 2018,
//     language: 'Ukrainian'
// }
// console.log(book);

// let arr_dog = ['labrador', 'husky', 'pitbull', 'rottweiler', 'nihuahua'];

// let arr_human = ['Vasya', 'Petya', 'Maks', 'Ruslan', 'Inna'];

// let arr_car = ['audi', 'BMW', 'cadillac', 'alfa_romeo', 'bentley'];
// console.log(arr_dog, arr_human, arr_car)

// let house = {
//     number_of_storeys: 11,
//     year_of_construction: 2020,
//     parking_availability: [true, false],
//     layouts: {
//         one_room_apartaments: 15,
//         two_room_apartaments: 22,
//         three_room_apartaments: 14,
//         duplex_apartments: 6,
//         three_story_apartment: 14
//     },
//     location: 'center'
// }

// let driver = {
//     name: 'Vasilisa',
//     car: 'Audi_a6',
//     driving_experience: '15 year',
//     alcohol: [true, false],
//     accidents: {
//         crashed_itself: 0,
//         crashed_into_him: 0,
//         knocked_down_people: 0
//     },
//     reviews: {
//         good: ['Vasya', 'Petya', 'Sasha'],
//         bad: ['Ruslan', 'Inna', 'Lev'],
//         neutral: ['Dima', 'Olya', 'Karina']
//     }
// }

// let toy = {
//     name: 'constructor',
//     material: ['aluminum', 'plastic', 'medb'],
//     packaging: {
//         usual: 100,
//         gift: 300
//     },
//     destination: {
//         for_girl: 101,
//         for_boy: 299
//     },
//     warranty: [true, false],
// }

// let table = {
//     destination: ['dining', 'kitchen', 'coffee' ],
//     material: {
//         wood: [true, false],
//         metal: [true, false],
//         glass: [true, false],
//         plastic: [true, false]
//     },
//     form: ['circle', 'oval', 'rectangle', 'square', 'crescent'],
//     height_adjustment: [true, false],
//     production: {
//         manual: [true, false],
//         factory: [true, false]
//     }
// }

// let bag = {
//     purpose: ['mens', 'womens', 'business', 'laptop'],
//     material: ['leather', 'imitation_leather', 'tarpaulin'],
//     compartments: [true, false],
//     secret_pocket: {
//         inside: [true, false],
//         outside: [true, false]
//     },
//     wearing_options: {
//         shoulder: [true, false],
//         hand: [true, false],
//         back: [true, false]
//     }
// }
// console.log(house, driver, toy, table, bag)

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

console.log(users[7].status);
console.log(users[10].status);
console.log(users[users.length-2].name);
console.log(users[2].name);
console.log(users[6].age);
console.log(users[3].age, users[9].age);
console.log(users[4].age, users[4].name);
console.log(users[5].age, users[5].name)
