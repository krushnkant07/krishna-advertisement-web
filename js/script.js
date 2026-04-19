// 1 saal ki expiry ke liye function
function setCookie(name, value) {
    const d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000)); // 365 Days
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Balance update logic
function watchAd(type) {
    let currentBalance = parseFloat(getCookie("balance")) || 0;
    let reward = 0;

    if (type === 'reel') reward = 0.10;
    if (type === 'post') reward = 0.06;
    if (type === 'movie') reward = 0.50;

    let newBalance = currentBalance + reward;
    setCookie("balance", newBalance.toFixed(2));
    
    alert(`Mubarak ho! ₹${reward} aapke account mein add ho gaye.`);
    window.location.href = "earning.html";
}

// Login redirect
function login() {
    window.location.href = "home.html";
    }
