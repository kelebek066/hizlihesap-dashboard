// ----------------------------------------------------
// VERİ SİMÜLASYONU
// ----------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {

    const startBtn = document.getElementById("startSim");
    const dataBox = document.getElementById("dataBox");

    if (!startBtn || !dataBox) return; // HTML elemanları yoksa hata verme

    let running = false;

    startBtn.addEventListener("click", () => {
        if (running) return;
        running = true;

        startBtn.innerText = "Simülasyon Çalışıyor...";
        startBtn.disabled = true;

        setInterval(() => {
            const value = (Math.random() * 100).toFixed(2);

            dataBox.textContent = "Yeni veri: " + value;

            // Anlık animasyon efekti
            dataBox.classList.add("flash");
            setTimeout(() => dataBox.classList.remove("flash"), 300);

        }, 900);
    });
});
