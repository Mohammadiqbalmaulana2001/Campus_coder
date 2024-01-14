console.log("Hello World");

if (1 + 1 == "2"){
    console.log('True')
}

// const nilai = prompt('Masukkan Nilai : ');

// if (nilai < 60){
//     console.log('Nilai anda E')
// } else if(nilai < 70){
//     console.log('Nilai anda D')
// } else if(nilai < 80){
//     console.log('Nilai anda C')
// } else if(nilai < 90){
//     console.log('Nilai anda B')
// } else if(nilai < 100){
//     console.log('Nilai anda A')
// }

// const password = prompt('Masukkan Password : ');

// if (password.length >= 6){
//     if (password.indexOf(' ') == -1){
//         console.log('Password Valid')
//     } else {
//         console.log('Password Tidak boleh ada spasi')
//     }
// }else{
//     console.log('Password minimal 6 karakter')
// }


const barbel = [];

barbel.push(5,10,15,20,25);

barbel.pop()

console.log(barbel)

const array1 = [1,2,3,4,5];
const array2 = [6,7,8,9,10];
const array3 = array1.concat(array2);

console.log(array3)
console.log(array3.indexOf(5))

const bulan = ["januari","februari","maret","april","mei","juni","juli","agustus","september","oktober","november","desember"];

console.log(bulan.sort())
console.log(bulan.join(' - '))

for(let i = 1; i <= 10; i++){
    console.log(i)
}

let esay = "abcd"
for(let i = 1; i <= 10; i++){
    console.log(`${i}. soal nomor ${i}`)
    for(let j = 0; j < esay.length; j++){
        console.log(`${esay[j]}. jawaban ${esay[j]}`)
    }
}


// const password = "iqbal123"
// let user = prompt('Masukkan Password : ')

// while(user !== password){
//     user = prompt('Password anda salah, silahkan coba lagi : ')
//     if(user === 'stop'){
//         break;
//     }
// }

// alert('Password anda benar')


function jumlah (a , b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return 'Inputan harus number'
    }else{
        return a + b
    }
}

const hasil = jumlah(1,2)
console.log(hasil)


const angka = [1,2,3,4,5,6,7,8,9,10];

function print(elemnent) {
    console.log(elemnent)
}

angka.forEach(print)

const anime = [
    {
        judul : 'one piece',
        episode : 100
    },
    {
        judul: 'naruto',
        episode : 500
    },
    {
        judul : 'dragon ball',
        episode : 200
    },
    {
        judul : 'boku no hero',
        episode : 300
    },
    {
        judul : 'bleach',
        episode : 400
    }
]

anime.forEach(function(element){
    console.log(`${element.judul} : episode ${element.episode}`)
})

anime.map(function(element){
    console.log(`${element.judul} : episode ${element.episode}`)
})

const episode = anime.filter(episode => episode.episode > 100)
console.log(episode)


const rating = anime.reduce((a,b) => {
    console.log(a,b)
    if(b.episode > a.episode){
        return b
    }else{
        return a
    }
})

console.log(rating)


const nama = {
    nama: 'iqbal',
    umur: 20,
    alamat: 'jakarta'
}

const credensial = {
    email: "iqbalmaulana998226@gmail.com",
    password: "iqbal123"
}

const gabung = {...nama, ...credensial}