// shapes.js
class Persegi {
    constructor(sisi) {
      this.sisi = sisi;
    }
  
    hitungLuas() {
      return this.sisi * this.sisi;
    }
  
    hitungKeliling() {
      return 4 * this.sisi;
    }
  }
  
  class PersegiPanjang {
    constructor(panjang, lebar) {
      this.panjang = panjang;
      this.lebar = lebar;
    }
  
    hitungLuas() {
      return this.panjang * this.lebar;
    }
  
    hitungKeliling() {
      return 2 * (this.panjang + this.lebar);
    }
  }
  
  class Lingkaran {
    constructor(jariJari) {
      this.jariJari = jariJari;
    }
  
    hitungLuas() {
      return Math.PI * this.jariJari * this.jariJari;
    }
  
    hitungKeliling() {
      return 2 * Math.PI * this.jariJari;
    }
  }
  
  class Segitiga {
    constructor(alas, tinggi) {
      this.alas = alas;
      this.tinggi = tinggi;
    }
  
    hitungLuas() {
      return 0.5 * this.alas * this.tinggi;
    }
  
    hitungKeliling() {
      // Implementasi keliling segitiga bergantung pada jenis segitiga
      // Misalnya, segitiga siku-siku atau segitiga sama sisi akan memiliki rumus yang berbeda.
      // Di sini, kita hanya akan mengembalikan panjang alas sebagai contoh sederhana.
      return this.alas;
    }
  }
  
  class Trapesium {
    constructor(sisiAtas, sisiBawah, tinggi) {
      this.sisiAtas = sisiAtas;
      this.sisiBawah = sisiBawah;
      this.tinggi = tinggi;
    }
  
    hitungLuas() {
      return ((this.sisiAtas + this.sisiBawah) / 2) * this.tinggi;
    }
  
    hitungKeliling() {
      // Implementasi keliling trapesium akan bergantung pada bentuk trapesium
      // Kita hanya akan mengembalikan penjumlahan semua sisinya sebagai contoh sederhana.
      return this.sisiAtas + this.sisiBawah + 2 * Math.sqrt(
        Math.pow((this.sisiBawah - this.sisiAtas) / 2, 2) + Math.pow(this.tinggi, 2)
      );
    }
  }
  
  module.exports = {
    Persegi,
    PersegiPanjang,
    Lingkaran,
    Segitiga,
    Trapesium,
  };
  