let beratMadan = prompt("Berikan berat madan");
let tinggiMadan = prompt("Berikan tinggi madan");

let beratJoan = prompt("Berikan berat joan");
let tinggiJoan = prompt("Berikan tinggi joan");

let madanIMT = beratMadan / tinggiMadan ** 2;
let joanIMT = beratJoan / tinggiJoan ** 2;

let madanHigherIMT = madanIMT > joanIMT;

const begitulah = document.getElementById('begitulah');

console.log(`IMT madan : ${Math.round(madanIMT)}`);
console.log(`IMT joan : ${Math.round(joanIMT)}`);
console.log(`Apakah IMT madan lebih tinggi dibandingkan Joan : ${madanHigherIMT}`);

if (madanHigherIMT) {
    begitulah.textContent = 
    `
    Apakah IMT madan lebih tinggi dibandingkan Joan : ${madanHigherIMT}
    Kalau Gue malu tuh 🤥
    `
} else if (!madanHigherIMT) {
    begitulah.textContent = 
    `
    Apakah IMT madan lebih tinggi dibandingkan Joan : ${madanHigherIMT}
    keliatan banget tuh kurang sehatnya 😰
    `
}