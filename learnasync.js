// console.log("Step 1")
// setTimeout(function(){
//     console.log("Step 3")
// },5000)
// console.log("Step 2")

const notify = () => {
    console.log("Sudah Selesai")
}

const startPlayGames = (name, callback) => {
    console.log("start game "+name+" sekarang!")
    callback()
}

//callback biasa
// let nama = "Zoombie"
// startPlayGames(nama, notify)

//callback neasted
let nama1 = "Zoombie"
let nama2 = "Piano Tiles"
let nama3 = "Sophia the first"
startPlayGames(nama1, function(){
    startPlayGames(nama2, function(){
        startPlayGames(nama1, function(){
            console.log("sudah main game nya")
        })
    })
})