// Contoh 1
// let nilaiAkhir = prompt("Masukkan nilai Akhir : ");

// if (nilaiAkhir >= 80 && nilaiAkhir <= 100) {
//     document.write(`Nilai Akhir Anda A (${nilaiAkhir})`);
// } else if (nilaiAkhir >= 70 && nilaiAkhir <= 80) {
//     document.write(`Nilai Akhir Anda B (${nilaiAkhir})`);
// } else if (nilaiAkhir >= 60 && nilaiAkhir <= 70) {
//     document.write(`Nilai Akhir Anda C (${nilaiAkhir})`);
// } else {
//     document.write(`Anda belum mengikuti ujian`);
// }

// Contoh 2
// let userRole = prompt("Login Sebagai : ");
// if (userRole == "Admin") {
//     document.write("Selamat Datang Admin");
// } else if (userRole == "Operator") {
//     document.write("Selamat Datang Operator")
// } else {
//     document.write("Anda Dilarang mengakses Halaman ini")
// }

// Soal Praktek
const rataRataTimA = Math.round((96 + 108 + 89) / 3);
const rataRataTimB = Math.round((88 + 91 + 110) / 3)

if (rataRataTimA > rataRataTimB) {
    document.write(`Tim A Menang Dengan rata rata skor (${rataRataTimA})`);
} else if (rataRataTimA < rataRataTimB){
    document.write(`Tim B Menang Dengan rata rata skor (${rataRataTimB})`);
} else {
    document.write(`Pertandingan Seri`);
}