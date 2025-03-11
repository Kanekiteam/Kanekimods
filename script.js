
function detectarDispositivo() {
    let infoDispositivo = document.querySelector('.device-info');
    let ancho = window.innerWidth;
    
    if (ancho <= 600) {
        infoDispositivo.innerText = "📱 Estás en un dispositivo móvil.";
    } else if (ancho <= 900) {
        infoDispositivo.innerText = "📟 Estás en una tablet.";
    } else {
        infoDispositivo.innerText = "🖥️ Estás en una PC.";
    }
}


window.onload = detectarDispositivo;
window.onresize = detectarDispositivo;
