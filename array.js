// // array adalah 
var x = 1;
var arr1 = [x, true, 'hello', 1];
// console.log(arr1[1]); // ini adalah cara mengakses salah satu element yang terdapat dalam array dimulai dari 0 s/d ....
arr1[1] = false //ini adalah cara memanipulasi element yang terdapat didalam array
// console.log(arr1[1]); //ini adalah cara mengambil salah satu dari 4 element yang terdapat dalam array
// console.log(arr1.length-1); //ini adalah cara menghitung berapa banyak element di dalam array
// console.log(arr1[arr1.length-2]); //ini adalah cara menuliskan element sesuai dengan urutan didalam array

var city = 'balikpapan';
// console.log(city[1]);
city[2] = 'x';
// console.log(city);

var city2 = city.split(""); //split adalah memisahkan antara string by yang ada didalam invoke/parameter
// console.log(city2);
city2[2] = 'x'
// console.log(city2)

var city3 = city2.join(''); //join adalah menggabung array menjadi string.
// console.log('city3', city3);
// console.log('city2', city2);
// console.log('city', city);

var city4 = city;
city4 = 'ok'
console.log(city4, city);

var arr2 = arr1
arr2[0] = 'ok'
console.log(arr2, arr1)
// var greeting = 'hello adam!';
// console.log(greeting.split(' '))
// console.log(greeting.split('m'))
// console.log(greeting.split(''))







// // object adalah
// var x = 1;
// var newPropertie = 'koko'
// var prop2 = 'nama'
// var obj1 = {
//     nama: 'jhon',
//     number: newPropertie,
//     [newPropertie]: 'ijo',
//     1: "helo",
// };
// // console.log(obj1.newPropertie);
// console.log(obj1[newPropertie]); //ini sama aja kayak obj1.koko
// console.log(obj1[prop2]); //ini sama aja kayak obj1.name
// console.log(obj1['1']); //ini sama kayak obj1.1
// console.log(obj1[1]); //ini sama kayak obj1.1 , pemanggilan key menggunakan ("[]") itu dapat dilakukan pada integer
// console.log(obj1.1); //pemanggilan key menggunakan ("." / "dot") pada integer tidak dapat dilakukan.