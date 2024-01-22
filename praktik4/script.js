let beratMadan = prompt("Berikan berat madan");
let tinggiMadan = prompt("Berikan tinggi madan");

let beratJoan = prompt("Berikan berat joan");
let tinggiJoan = prompt("Berikan tinggi joan");

let madanIMT = beratMadan / tinggiMadan ** 2;
let joanIMT = beratJoan / tinggiJoan ** 2;

let madanHigherIMT = madanIMT > joanIMT;

if (madanHigherIMT) {
    console.log(
    `
    Nilai IMT madan (${Math.round(madanIMT)}) lebih tinggi dibandingkan joan (${Math.round(joanIMT)})
    `
    );
} else {
    console.log(
    `
    Nilai IMT joan (${Math.round(joanIMT)}) lebih tinggi dibandingkan madan (${Math.round(madanIMT)})
    `
    );
}