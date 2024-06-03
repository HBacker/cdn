function cancelDeposit() {
    Swal.fire({
        position: "center",
        icon: "error",
        title: "Para yatırma işlemi iptal edildi.",
        showConfirmButton: false,
        timer: 1500,
        didClose: () => {
            setTimeout(function() {
                window.location.replace("/deposit"); 
            }, 50);
        }
    });
}

function backToHome() {
    Swal.fire({
        position: "center",
        icon: "warning",
        title: "HoliganBet'e yönlendiriliyorsunuz.",
        showConfirmButton: false,
        timer: 1500,
        didClose: () => {
            setTimeout(function() {
                window.location.replace("/"); 
            }, 50);
        }
    });
}

function copyWalletAddress(walletText) {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Cüzdan adresi kopyalandı!",
        text: walletText,
        showConfirmButton: false,
        timer: 1500,
    });
}
function copied(text) {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Başarıyla Kopyalandı!",
        text: text,
        showConfirmButton: false,
        timer: 1500,
    });
}
function depositDone() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Para yatırma talebinizi aldık!",
        text: "Lütfen bekleyiniz..." + "\nHoliganBet'e yönlendiriliyorsunuz.",
        showConfirmButton: false,
        timer: 3000,
        didClose: () => {
            setTimeout(function() {
                window.location.replace("/deposit"); 
            }, 1000);
        }
    });
}
function emptyFields() {
    Swal.fire({
        position: "center",
        icon: "warning",
        title: "Uyarı",
        text: "Lütfen tüm alanları doldurduğunuzdan emin olunuz.",
        showConfirmButton: true,
        confirmButtonText: "Tamam",
        timer: 3000,
    });
}
function emptyFieldsLogin() {
    Swal.fire({
        position: "center",
        icon: "warning",
        title: "Giriş Başarısız",
        text: "Kullanıcı Adı veya Şifre hatalı!",
        showConfirmButton: true,
        confirmButtonText: "Tamam",
        timer: 3000,
    });
}
function errorLogin() {
 Swal.fire({
        position: "center",
        icon: "error",
        title: "Uyarı",
        text: "Oops! giriş başarısız!",
        showConfirmButton: true,
        confirmButtonText: "Tamam"
    });
}
function unavaiblePaymentOption() {
    Swal.fire({
        position: "center",
        icon: "warning",
        title: "Uyarı",
        text: "Bu ödeme opsiyonu şu anda kullanılamıyor. Lütfen alternatif opsiyonları deneyiniz.",
        showConfirmButton: true,
        confirmButtonText: "Tamam"
    });
}
function unavaiblePaymentMethod() {
    Swal.fire({
        position: "top",
        icon: "warning",
        title: "Ödeme yöntemi güncelleniyor!",
        text: "Sizlere daha iyi hizmet verebilmek için ilgili ödeme yöntemi güncellenmektedir.",
        showConfirmButton: true,
        confirmButtonText: "Tamam",
        timer: 3000
    });
}
function loginRequired() {
    Swal.fire({
        position: "center",
        icon: "warning",
        title: "Giriş Yapmalısın!",
        text: "Yönlendiriliyorsunuz!",
        showConfirmButton: false,
        timer: 2000,
        didClose: () => {
            setTimeout(function() {
                window.location.replace("/"); 
            }, 1000);
        }
    });
}
