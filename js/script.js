// Mostrar/Ocultar el botón "Ir al inicio"
window.addEventListener('scroll', () => {
    const button = document.getElementById('backToTop');
    button.style.display = window.scrollY > 200 ? 'block' : 'none';
});
