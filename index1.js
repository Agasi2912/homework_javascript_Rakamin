// index.js
const { Persegi, PersegiPanjang, Lingkaran, Segitiga, Trapesium } = require('./shapes');

const persegi = new Persegi(5);
console.log('Luas Persegi:', persegi.hitungLuas());
console.log('Keliling Persegi:', persegi.hitungKeliling());

const persegiPanjang = new PersegiPanjang(4, 6);
console.log('Luas Persegi Panjang:', persegiPanjang.hitungLuas());
console.log('Keliling Persegi Panjang:', persegiPanjang.hitungKeliling());

const lingkaran = new Lingkaran(3);
console.log('Luas Lingkaran:', lingkaran.hitungLuas());
console.log('Keliling Lingkaran:', lingkaran.hitungKeliling());

const segitiga = new Segitiga(4, 5);
console.log('Luas Segitiga:', segitiga.hitungLuas());
console.log('Keliling Segitiga:', segitiga.hitungKeliling());

const trapesium = new Trapesium(3, 6, 4);
console.log('Luas Trapesium:', trapesium.hitungLuas());
console.log('Keliling Trapesium:', trapesium.hitungKeliling());
