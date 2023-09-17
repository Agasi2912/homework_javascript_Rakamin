// class Kendaraan {
//     constructor (produsen) {
//         this.produsen = produsen
     
//     }
//     lokasi () {
//         return "Lokasi "+this.produsen+" ada di 30 cabang di Indonesia"
//     }
    
// }
// class Motor extends Kendaraan{
//     constructor(produsen) {
//         super(produsen)
        
//     }
//     lokasi () {
//         return "Lokasi "+this.produsen+" ada di 30 cabang di Indonesia"
//     }
// }

// const yamaha = new Motor ("yamaha")
// console.log(yamaha.lokasi())

// class Kendaraan {
//     constructor (merek, cc) {
//         this.merek = merek
//         this.cc = cc
//     }
//     penjualan () {
//         console.log("penjualan dengan cc "+this.cc+" merupakan penjualan terbanyak")
//     }
// }
// class Motor extends Kendaraan{
//     constructor(merek, cc, warna, panjang) {
//         super(merek, cc)
//         this.warna = warna
//         this.panjang = panjang
//     }
    
// }

// const yamaha = new Motor ("Supra", 250, "silver", 175)
// console.log(yamaha.merek)
// console.log(yamaha.cc)
// console.log(yamaha.warna)
// console.log(yamaha.panjang)
// yamaha.penjualan()

// function produk (nama, harga) {
//     //this itu adalah public
//     var diskon = 0.4
//     this.nama_pub = nama
//     this.harga_pub = harga

//     // var itu adalah private
//     var nama_pri = nama
//     var harga_pri = harga

//     this.detail_pub= function() {
//         return "nama "+nama  +"harga" +(harga -(harga*diskon))}    
        
//     function detail_pri (){
//         return "nama "+nama  + "harga "+harga}   
    
// }

// const transaksi = new produk ("lato-lato", 3000)
// console.log(transaksi.harga_pub)
// console.log(transaksi.harga_pri)
// console.log(transaksi.detail_pub ())
// transaksi.diskon = 0.5
// console.log(transaksi.detail_pub ())
// // console.log(transaksi.detail_pri ())


class Person{
    constructor(name) {
            if (this.constructor === Person) {
                 throw new Error (
                    'Tidak boleh menggunakan kelas ini, kelas ini bersifat abstrak'
                )
            }
             this.name= name
    }
    greet (){
        throw new Error (
            'Method abstract belum diimplementasi'
        ) 
    }
}
class Teacher extends Person{
    constructor (name, age) {
        super(name)
        this.age = age
    }
    greet (){
        console.log ("Hello nama saya "+this.name)
        
    }
}
const informatics = new Teacher("Rose", 35) 
informatics.greet()
// const student = new Person("Syanala")