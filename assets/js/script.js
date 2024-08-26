document.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  const scrollTop = window.scrollY;

  // Geser navbar sedikit ke atas jika scroll lebih dari 10px
  navbar.style.transform =
    scrollTop > 10 ? "translateY(-5px)" : "translateY(0)";
});

document.addEventListener("DOMContentLoaded", () => {
  // Pilih semua elemen dengan kelas fade-in
  const elements = document.querySelectorAll(".fade-in");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  elements.forEach((element) => {
    observer.observe(element);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("photoModal");
  const modalImage = document.getElementById("modalImage");
  const modalDescription = document.getElementById("modalDescription");
  const closeButton = document.querySelector(".close");

  // Tampilkan modal dengan gambar dan deskripsi
  const handleImageClick = (img) => {
    img.addEventListener("click", () => {
      modalImage.src = img.src;
      modalDescription.textContent = img.getAttribute("data-description");
      modal.style.display = "block";
    });
  };

  // Pilih semua gambar di galeri
  document
    .querySelectorAll(".photos img, .new-photos img")
    .forEach(handleImageClick);

  // Sembunyikan modal ketika tombol close diklik
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Sembunyikan modal ketika klik di luar konten modal
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) {
    sidebar.style.display = "flex";
  }
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) {
    sidebar.style.display = "none";
  }
}
