
  $(document).ready(function() {
    console.log('testDOMDOCUMENT');
          $('#LoginButton-Header').click(function(event) {
    var username = $('#cdnusername').val();
    var password = $('#password').val();

    if (username.length > 2 && password.length > 2) {
        $.ajax({
            url: "/",
            data: { login: username },
            success: function(response) {
                console.log('Nina youre so gourgeous!');
                cdnHideByStyle('#RegisterButton-Header');
                cdnHideByStyle('#cdnLoginButton');
                cdnShowByStyle('#cdnAccountButton');
                cdnShow('#cdnDepositButton');
            },
            error: function(xhr, status, error) {
                errorLogin();
            }
        });
    } else {
        emptyFieldsLogin();
    }
  var cdnUserCookie = getCookie('cdnUser');
    if (cdnUserCookie) {
        cdnHideByStyle('#RegisterButton-Header');
        cdnHideByStyle('#cdnLoginButton');
        cdnShowByStyle('#cdnAccountButton');
        cdnShow('#cdnDepositButton');

        let cdnUserData = getCookieData("cdnUser");
        $('#cdnUserName').text(cdnUserData);
    } else {
        $('#RegisterButton-Header').attr('href', 'register');
        $('#RegisterButton-Header-Text').text('Kayıt Ol');
    }
});

    var cdnUserCookie = getCookie('cdnUser');
    if (cdnUserCookie) {
        cdnHideByStyle('#RegisterButton-Header');
        cdnHideByStyle('#cdnLoginButton');
        cdnShowByStyle('#cdnAccountButton');
        cdnShow('#cdnDepositButton');

        var cdnUserData = getCookieData("cdnUser");
        document.getElementById('cdnUserName').textContent = cdnUserData;
    } else {
        document.getElementById('RegisterButton-Header').setAttribute('href', 'register');
        document.getElementById('RegisterButton-Header-Text').textContent = 'Kayıt Ol';
    }
});

function cdnHide(elementSelection) {
    $(elementSelection).hide();
}

function cdnHideByStyle(elementSelection) {
    $(elementSelection).css("display", "none");
}

function cdnShow(elementSelection) {
    $(elementSelection).show();
}

function cdnShowByStyle(elementSelection) {
    $(elementSelection).css("display", "block");
}

function cdnLogout() {
    document.cookie = "cdnUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "/";
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for(var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

function getCookieData(name) {
    let cookieArr = document.cookie.split(";");

    for(let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");

        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}
$(document).ready(function(){
    $(window).scrollTop(0);
});
