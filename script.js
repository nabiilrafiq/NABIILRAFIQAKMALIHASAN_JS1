//nabiil rafiq akmali hasan
//tugas javascript 1
//web D morning

//=============================================if else====================================================//
// let jam = 20;

// if (jam >= 6 && jam < 12) {
//     alert('Selamat Pagi');
// }

// else (
//     alert('Selamat Siang')
// )


//===========================================nested if===================================================//
// let hari = "sabtu";

// if (hari === "senin") {
//     console.log("Ini Adalah Hari Senin")
// } else if (hari === "selasa") {
//     console.log("Ini Adalah Hari Selasa")
// } else if (hari === "rabu") {
//     console.log("Ini Adalah Hari Rabu")
// } else {
//     console.log("aku gatau ini hari apa")
// }


//=========================================switch case===============================================//
// let nama = "tes";
// switch (nama) {
//     case "nabiil":
//         console.log("Nama Pertamaku Adalah Nabiil");
//         break;

//     case "rafiq":
//         console.log("Nama Keduaku Adalah Rafiq");
//         break;

//     case "akmali":
//         console.log("Nama Ketigaku Adalah Akmali");
//         break;

//     case "hasan":
//         console.log("Nama Keempatku Adalah Hasan");
//         break;
//     default:
//         console.log("Itu Bukan Namaku!");
//         break;
// }

//======================================for statement==================================================//
// const nama = ["Nabiil", "Rafiq", "Akmali", "Hasan"];

// let i = 0;
// let len = nama.length;
// let text = "";

// for (; i < len;) {
//     console.log(text + nama[i]) + "<br>"
//     i++;
// }

//======================================while, do while===============================================//
// const nama = ["Nabiil", "Rafiq", "Akmali", "Hasan"];
// let i = 0;
// let text = "";

// while (nama[i]) {
//     console.log(text + nama[i]);
//     i++;
// }

// let text = ""
// let i = 1;

// do {
//     alert(text + "Web Ini Akan Terbuka Dalam " + i);
//     i++;
// }
// while (i <= 3);

//======================================function===================================================//
function coba(n, f) {
    if (f === 0) {
        throw new Error("Karena Dibagi 0");
    }
    return n / f;
}
try {
    let hasil = coba(5, 0);
    console.log("Hasilnya = " + hasil);
} catch (error) {
    console.error("" + error);
}