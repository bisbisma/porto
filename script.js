function adjustLayout() {
    if (window.innerWidth <= 600) { // Untuk ponsel
        document.body.classList.add('mobile');
        document.body.classList.remove('desktop');
    } else { // Untuk desktop
        document.body.classList.add('desktop');
        document.body.classList.remove('mobile');
    }
}

// Panggil fungsi ini ketika halaman dimuat
window.addEventListener('load', adjustLayout);

// Panggil fungsi ini setiap kali ukuran layar berubah
window.addEventListener('resize', adjustLayout);

function resizeText() {
    if (window.innerWidth <= 600) { // untuk ponsel
        document.body.style.fontSize = '14px';
    } else {
        document.body.style.fontSize = '16px';
    }
}

window.addEventListener('load', resizeText);
window.addEventListener('resize', resizeText);
