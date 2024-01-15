let namaNegara = "Angola";
const benua = "Africa";
let populasi = 35981281;
const kepulauan = false;
let bahasa = "Portugis";

const btn = document.getElementById('btn');
const txt = document.getElementById('txt');
const atas = document.getElementById('atas');

function show() {
    console.log(`
    Nama Negara : ${namaNegara}
    benua : ${benua}
    populasi : ${populasi}
    Kepulauan : ${kepulauan}
    bahasa : ${bahasa}
    `);
}

btn.addEventListener('click',() => {
    txt.innerHTML = `
    Nama Negara : ${namaNegara}
    benua : ${benua}
    populasi : ${populasi}
    Kepulauan : ${kepulauan}
    bahasa : ${bahasa}
    `
})

atas.addEventListener('click', () => {
    alert(`
    Nama Negara : ${namaNegara}
    benua : ${benua}
    populasi : ${populasi}
    Kepulauan : ${kepulauan}
    bahasa : ${bahasa}
    `)
})