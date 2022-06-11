// // 1. 0 – 10 arasındaki tüm çift sayıları yazdırın

// // for (let i = 0; i < 10; i++) {
// //     console.log(i)
// // }

// // 2. Çarpım tablosu içeren bir tablo yazdırın

// // for (let i = 0; i < 10; i++) {
// //     console.log(i * 10)
// // }

// // 3. Bir uzunluk dönüştürücü işlevi oluşturun

// // let km = prompt('Bir reqem gir.');

// // for (let i = 1.609; i <= 1.609; i++) {
// //     let cem = km / i;
// //     console.log(km, 'km', '=', cem.toPrecision(3), 'Mil');
// // }

// // let mil = 0.622;

// // for (let i = 1; i <= 10; i++) {
// //     let cem = mil * i;
// //     console.log(i, 'Mil', '=', cem.toPrecision(3), 'Km');
// // }

// // 4. Bir dizideki sayıların toplamını hesaplayın

// // const array = [1, 2, 3, 4];
// // let sum = 0;

// // for (let i = 0; i < array.length; i++) {
// //     sum += array[i];
// // }
// // console.log(sum);

// // 5. Bir diziyi tersine çeviren bir işlev oluşturun

// // const dizi = [1, 3, 5, 4, 8];
// // const revers = dizi.reverse()
// // console.log(revers)

// // 6. Bir diziyi en düşükten en yükseğe sıralayın

// // var numArray = [140000, 104, 99];
// // function comp(a, b) {
// //     return a - b;
// // }
// // console.log(numArray.sort(comp));

// // 7. Negatif sayıları filtreleyen bir işlev oluşturun

// // var numArray = [1, -2, 3, -4];

// // numArray = numArray.filter(function(x) {
// //     return x > -1;
// // });

// // console.log(numArray)

// // 8. Bir dizede bulunan boşlukları kaldırın

// // const dizi = ['salam', 'sagol', 'netersen'];
// // dizi.unshift(' ');
// // dizi.shift();
// // console.log(dizi)

// //9. Bir sayı 10'a bölünebiliyorsa bir Boole döndürün

// // const prt = Number(prompt('sayi gir'));
// // let say = 10;
// // let cem = say / prt;

// // function bolu() {
// //     if (say % prt == 0) {
// //         return console.log(say, '/', prt, '=', cem, true);
// //     } else {
// //         return console.log(say, '/', prt, '=', cem, false);
// //     }
// // };

// // console.log(bolu())

// // 10. Return the number of vowels in a string

// // function vowelCount() {
// //     var prt = prompt('Soz yazin');
// //     var count = 0;
// //     var vowels = 'aıou';
// //     for (var i = 0; i < prt.length; i++) {
// //         if (vowels.indexOf(prt[i].toLowerCase()) > -1) {
// //             count++;

// //         }
// //     }
// //     return `Söz də ${count} Qalın sait ses var.`;
// // }

// // console.log(vowelCount());

// // var vowels = 'aeiou';
// // var index = vowels.indexOf('d');
// // console.log(index);

// //////////////////////////////////////////////////////////////////////
// // NEW Challenge

// // 1.

// // function hello(link) {
// //     return link;
// // }

// // console.log(hello("hello edabit.com"));

// // 2.
// // function cem(a, b) {
// //     return a * b / 2;
// // }

// // console.log('Ucgen alani', cem(10, 10));

// // 3.
// function cem(a) {
//     return a ** 3;
// }

// // console.log(cem(3));

// // 4.

// // const arys = [1, 2, 5];
// // arys.unshift(7); // 1 CI REQEMI VE YA SOZU SILIR
// // arys.push(8); // sonuncu REQEMI VE YA SOZU SILIR
// // ///////
// // // arys.shift(); // 1 CI REQEMI VE YA SOZU SILIR
// // // arys.pop(); // sonuncu REQEMI VE YA SOZU SILIR
// // console.log(arys, 'Ilk Reqem :', arys[0]); // 1 CI REQEMI VE YA SOZU almaq ucun
// // console.log(arys, 'Sonuncu Reqem :', arys[4]); // sonuncu REQEMI VE YA SOZU almaq ucun

// // 5.
// // let prt = prompt('DEQIQENI SANIYE YE CEVIRMEK')

// // function minut() {
// //     return prt * 60;
// // };

// // console.log(prt.valueOf(), 'DQ =', minut(), 'SN')

// // bacground color changs
// const body = document.querySelector('body');
// body.addEventListener('mouseenter', bgc);
// body.addEventListener('mouseleave', bgc2);
// body.addEventListener('mousedown', bgc3);
// body.addEventListener('mouseup', bgc4);

// function bgc() {
//     return body.style.backgroundColor = 'yellow';
// }

// function bgc2() {
//     return body.style.backgroundColor = '#ffff';
// }

// function bgc3() {
//     return body.style.backgroundColor = 'black';
// }

// function bgc4() {
//     return body.style.backgroundColor = 'blue';
// }
// console.log(body);

// 6.
// const say = prompt('Sayi gir');

// function vurma(b) {
//     return say * b;
// }

// console.log(say.valueOf(), '* 10 =', vurma(10));

// 7.

// function toplama(a, b) {
//     return a + b;
// }

// console.log(toplama(3, 2));

// 8.

// const prt = prompt('Sayi gir');

// function time() {
//     return prt * 60 * 60;
// }
// console.log(prt.valueOf(), 'Saat =', time(), 'Saniye')

// 9.

// function findPerimeter(length, width) {
//     return (length + width) * 2;
// }

// console.log(findPerimeter(6, 7))

// 10.

// function addition(num) {
//     return num + 1;
// }

// console.log(addition(2))

// 11.

// function sumPolygon(n) {
//     return (n - 2) * 180;
// }

// console.log(sumPolygon(3))

// 12.

// function nameString(name) {
// var b = "Edabit"
// var result = name + b
// return result;
// }

// console.log(nameString('Yusif'));

// 13.

// function giveMeSomething(a) {
//     var b = "something ";
//     var result = b + a;
//     return result;
// }

// console.log(giveMeSomething("is better than nothing"));

// 14.

// function nextEdge(side1, side2) {
//     return (side1 + side2) - 1;
// }

// console.log(nextEdge(8, 10));

// 15.

// function swap(a, b) {
//     return [b, a];
// }
// console.log(swap(100, 200));

// 16.

// function lessThan100(a, b) {
//     if ((a + b) < 100) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(lessThan100(83, 34));

// 17

// function squared(a) {
//     return a ** 2;
// }

// console.log(squared(5))

// 18.

// function points(twoPointers, threePointers) {
//     return twoPointers * 2 + threePointers * 3;
// }
// console.log(points(7, 5));

// 19.

// function remainder(x, y) {
//     return x % y;
// }
// console.log(remainder(5, 5))

// 20.
// ili aya cevirmek
// function calcAge(age) {
//     return age * 365;
// }

// console.log(calcAge(20));

// 21.
///Profitable Gamble
// function profitableGamble(prob, prize, pay) {
//     if ((prob * prize - pay) > 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(profitableGamble(0.9, 1, 2))

// const card = document.querySelectorAll(".card");

// for (let i = 0; i < card.length; i++) {
//     card[i].addEventListener("mousedown", function() {
//         return (card[i].style.boxShadow =
//             "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset ");
//     });
//     card[i].addEventListener("mouseup", function() {
//         return (card[i].style.boxShadow = "none");
//     });
// }


// let changedCards = Array.from(card).map((item) => {
//     item.addEventListener("mouseenter", () => {
//         return (item.style.boxShadow =
//             "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset ");
//     });
//     item.addEventListener("mouseleave", () => {
//         return (item.style.boxShadow = "none");
//     });
//     item.classList.add('beshir')
//     item.setAttribute('id', 'yusif');
// });
// console.log(changedCards);



// const list = document.querySelectorAll('.list');
// let chlist = Array.from(list).map((item) => {
//     item.addEventListener("mouseenter", () => {
//         return (item.style.boxShadow =
//             "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset ");
//     });
//     item.addEventListener("mouseleave", () => {
//         return (item.style.boxShadow = "none");
//     });
//     item.addEventListener("click", () => {
//         return (item.style.boxShadow =
//             " rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset");
//     });
// })
// console.log(list);

// arrey fc

// const arr = [1, 2, 3, 4];

// const newarr = [];
// for (let i = 0; i < arr.length; i++) {
//     newarr[i] = ++arr[i];
// }

// console.log(newarr);

// console.log(arr.map((e) => {
//     return ++e;
// }));

// const obj = {
//     name: 'Yusif',
//     firstname: 'Bayramov'
// };

// let name = 'yusif';
// console.log(name.toString());
// const arr = [1, 2, 3, 4, 5, 88];
// let arr2 = arr.filter((e) => e <= 5);
// console.log(arr2)

let arr = [9, 2, 76, 4, 5, 88];

let nn = arr;

// let arr2 = arr.sort(arry);

// function arry(a, b) {
//     return a - b;
// }
console.log(nn);