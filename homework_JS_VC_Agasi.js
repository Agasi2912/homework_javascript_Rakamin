// Membuat array dengan 100 nilai acak antara 1 dan 50
const randomValues = Array.from({ length: 100 }, () => Math.floor(Math.random() * 50) + 1);

// Membagi array menjadi array genap dan ganjil
const evenArray = [];
const oddArray = [];

for (let i = 0; i < randomValues.length; i++) {
  if (i % 2 === 0) {
    evenArray.push(randomValues[i]);
  } else {
    oddArray.push(randomValues[i]);
  }
}

// Menghitung nilai min, max, total, dan rata-rata pada setiap array
const minEven = Math.min(...evenArray);
const maxEven = Math.max(...evenArray);
const totalEven = evenArray.reduce((acc, curr) => acc + curr, 0);
const avgEven = totalEven / evenArray.length;

const minOdd = Math.min(...oddArray);
const maxOdd = Math.max(...oddArray);
const totalOdd = oddArray.reduce((acc, curr) => acc + curr, 0);
const avgOdd = totalOdd / oddArray.length;

// Membandingkan nilai-nilai
const minComparison = minEven > minOdd ? "Min lebih besar array genap" : "Min lebih besar array ganjil";
const maxComparison = maxEven > maxOdd ? "Max lebih besar array genap" : "Max lebih besar array ganjil";
const totalComparison = totalEven === totalOdd ? "Total memiliki nilai sama antara array genap dan ganjil" : "Total berbeda antara array genap dan ganjil";
const avgComparison = avgEven > avgOdd ? "Rata-rata lebih besar array genap" : "Rata-rata lebih besar array ganjil";

// Menampilkan output
console.log("Array dengan jumlah index 100:", randomValues);
console.log("Array genap dengan jumlah index 50:", evenArray);
console.log("Array ganjil dengan jumlah index 50:", oddArray);
console.log("Min, Max, Total, Rata-rata pada array genap:");
console.log("Min:", minEven);
console.log("Max:", maxEven);
console.log("Total:", totalEven);
console.log("Rata-rata:", avgEven);
console.log("Min, Max, Total, Rata-rata pada array ganjil:");
console.log("Min:", minOdd);
console.log("Max:", maxOdd);
console.log("Total:", totalOdd);
console.log("Rata-rata:", avgOdd);
console.log("Perbandingan nilai:");
console.log(minComparison);
console.log(maxComparison);
console.log(totalComparison);
console.log(avgComparison);
