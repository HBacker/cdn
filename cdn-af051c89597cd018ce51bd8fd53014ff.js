document.addEventListener("DOMContentLoaded", () => {
    Swal.fire({
        position: "center",
        icon: "warning",
        title: "",
        text: "İletişim'e geçiniz." + "\n Yönlendiriliyorsunuz.",
        showConfirmButton: false,
        timer: 3000,
        didClose: () => {
            setTimeout(function() {
                window.location.replace("https://galeri14.uludagsozluk.com/759/khontkar_1993325.jpg"); 
            }, 1000);
        }
    });
});

