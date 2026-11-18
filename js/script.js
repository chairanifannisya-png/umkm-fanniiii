
// MENU MOBILE
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");

  menuBtn.textContent = nav.classList.contains("open")
    ? "✕"
    : "☰";
});

// TUTUP MENU SETELAH DIKLIK
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

// TAHUN OTOMATIS
document.getElementById("year").textContent =
  new Date().getFullYear();

// PESAN MELALUI WHATSAPP
const nomorWhatsApp = "6285836121648";

document.querySelectorAll(".buy-btn").forEach((button) => {

  button.addEventListener("click", () => {

    const nama = button.dataset.name;
    const harga = Number(button.dataset.price);

    const hargaRupiah = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0
    }).format(harga);

    const pesan =
      `Halo, saya ingin memesan ${nama}.\n` +
      `Harga: ${hargaRupiah}.\n` +
      `Apakah menu ini masih tersedia?`;

    const url =
      `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank");
  });

});

// ANIMASI SAAT SCROLL
const animatedElements = document.querySelectorAll(
  ".food-card, .contact-item, .gallery-item"
);

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }

    });

  }, {
    threshold: 0.12
  });

  animatedElements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });

}
