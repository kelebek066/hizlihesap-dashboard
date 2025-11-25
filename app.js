// ----------------------------------------------------
//  LOGO SVG OTOMATİK OLUŞTURMA
// ----------------------------------------------------
const logoSVG = `
<svg width="60" height="60" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="100" cy="100" r="90" stroke="#58a6ff" stroke-width="10"/>
<path d="M60 110 L100 60 L140 110" stroke="#58a6ff" stroke-width="10" fill="none" stroke-linecap="round"/>
<circle cx="100" cy="135" r="12" fill="#238636"/>
</svg>
`;

// SVG dosyasını otomatik oluşturup ekle
const logoElement = document.querySelector(".logo img");
const blob = new Blob([logoSVG], { type: "image/svg+xml" });
const url = URL.createObjectURL(blob);
logoElement.src = url;


// ----------------------------------------------------
//  VERİ SİMÜLASYONU
// ----------------------------------------------------
const dataBox = document.getElementById("dataBox");
const startBtn = document.getElementById("startSim");

let interval;
let running = false;

startBtn.addEventListener("click", () => {
    if (!running) {
        running = true;
        startBtn.innerText = "Simülasyon Çalışıyor...";
        startBtn.disabled = true;

        interval = setInterval(() => {
            const value = (Math.random() * 100).toFixed(2);

            dataBox.textContent = "Yeni veri: " + value;

            dataBox.classList.add("flash");
            setTimeout(() => dataBox.classList.remove("flash"), 300);

        }, 900);

    }
});
