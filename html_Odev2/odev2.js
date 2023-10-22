const artir = document.getElementById("Artir");
const azalt = document.getElementById("Azalt");
const sayiGoster = document.getElementById("SayiGoster");

let sayi = 0;

artir.addEventListener("click", function() {
    sayi++;
    sayiGoster.textContent = sayi;
});

azalt.addEventListener("click", function() {
    sayi--;
    sayiGoster.textContent = sayi;
});

const hesapla = document.getElementById("Hesapla");
const vizeInput = document.querySelector('input[name="VizeNotu"]');
const finalInput = document.querySelector('input[name="FinalNotu"]');
const sonuc = document.getElementById("Sonuc");
const durum = document.getElementById("Durum");

hesapla.addEventListener("click", function() {
    const vizeNotu = parseFloat(vizeInput.value);
    const finalNotu = parseFloat(finalInput.value);

    if (isNaN(vizeNotu) || isNaN(finalNotu)) {
        sonuc.textContent = "Geçerli bir sayı giriniz.";
    } else {
        const ortalama = (vizeNotu * 0.4) + (finalNotu * 0.6);

        if (ortalama >= 50) { 
            sonuc.textContent = "Ortalamanız: " + ortalama.toFixed(1);
            durum.textContent= "Durumunuz:Ortalama İle Geçtiniz"
            sonuc.style.color = "yellow";
            durum.style.color= "yellow";
        } else {
            sonuc.textContent = "Ortalamanız: " + ortalama.toFixed(1);
            durum.textContent = "Durumunuz:Kaldınız"
            sonuc.style.color = "red" ; sonuc.style.fontSize = "120%"  ;
            durum.style.color = "red" ; durum.style.fontSize = "120%" ;
        }
    }
});