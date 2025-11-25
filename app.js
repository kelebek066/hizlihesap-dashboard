// Dashboard yükleme simulasyonu
document.addEventListener("DOMContentLoaded", () => {
    const loading = document.querySelector(".loading-container");
    const dashboard = document.querySelector(".dashboard");

    setTimeout(() => {
        loading.style.display = "none";
        dashboard.style.display = "block";
    }, 800);
});


// Sol menü aç/kapa (mobil uyumlu)
const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });
}


// Logo otomatik üretim **KALDIRILDI**
// Çünkü artık manuel logo kullanıyorsun.
// Hata vermesin diye bu bölüm tamamen temizlendi.


// Sayaç kutularında örnek animasyon
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    let target = Number(counter.dataset.target);
    let current = 0;

    const update = () => {
        current += Math.ceil(target / 50);
        counter.innerText = current > target ? target : current;

        if (current < target) {
            requestAnimationFrame(update);
        }
    };

    update();
});
