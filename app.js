// N1

// function nom(fileNomi) {
//   const slashlar = fileNomi.lastIndexOf("/");
//   const file = fileNomi.substring(slashlar + 1);

//   const fileindex = file.lastIndexOf(".");
//   const fileNameWithoutExtension = file.substring(0, fileindex);

//   return fileNameWithoutExtension;
// }

// const fileNomi = "D:/Qudrat_c++/books/My_book.exe";
// const natija = nom(fileNomi);
// console.log(natija);

// n2
// function getSum3(n) {
//   let umummiy = 0;
//   for (let i = 3; i <= n; i += 3) {
//     umummiy += i;
//   }
//   return umummiy;
// }
// console.log(getSum3(15));

// N3

// function butunSon(n) {
//   let sum = 0;
//   for (let i = n; i <= 2 * n; i++) {
//     sum += i * i;
//   }
//   return sum;
// }

// const n = 5;
// const result = butunSon(n);
// console.log(result);

// N4

// function massiv(stringArray) {
//   const lengthObject = {};

//   for (let i = 0; i < stringArray.length; i++) {
//     const string = stringArray[i];
//     lengthObject[string] = string.length;
//   }

//   return lengthObject;
// }

// const strings = ["Abdulaziz", "Safarmurad", "Orol", "Jahongir"];
// const resultObject = massiv(strings);

// console.log(resultObject);

// N5

// function getMultipleValues(n, obj) {
//   const result = {};

//   for (const kalit in obj) {
//     if (obj.son(kalit)) {
//       result[kalit] = obj[kalit] * n;
//     }
//   }

//   return result;
// }

// let n = 3;
// const obj = {
//   a: 2,
//   b: 3,
//   c: 4,
//   d: 6,
// };

// const result = getMultipleValues(n, obj);
// console.log(result);

// N6
// function kichikKatta(massiv) {
//   if (massiv.length == 0) {
//     return [0];
//   }

//   let kichigi = massiv[0];
//   let kattasi = massiv[0];

//   for (let i = 1; i < massiv.length; i++) {
//     if (massiv[i] < kichigi) {
//       engKichiksi = massiv[i];
//     }
//     if (massiv[i] > kattasi) {
//       kattasi = massiv[i];
//     }
//   }

//   return [kichigi, kattasi];
// }

// let katta = kichikKatta(massiv);
// let kichik = kichikKatta(massiv);
// console.log(kichik);
// console.log(katta);

// N7
// function probel(str) {
//   return str.includes(" ");
// }

// console.log(probel("Men Abdulaziz Programmerman"));

// N9;
// function son(arr) {
//   return arr.reduce(
//     (acc, current) => {
//       if (!acc.includes(current)) {
//         acc.push(current);
//       }
//       return acc;
//     },
//     [arr[0]]
//   );
// }

// const array = [1, 2, 2, 3, 4, 4, 5, 5, 5];
// const result = son(array);
// console.log(result);

// N10
// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];
// function son(arr) {
//   return arr.reduce(
//     (acc, current) => {
//       if (!acc.includes(current)) {
//         acc.push(current);
//       }
//       return acc;
//     },
//     [arr[0]]
//   );
// }

// const result = son(animals);
// console.log(result);
