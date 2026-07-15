document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Envío interactivo del formulario de contacto
    const leadForm = document.getElementById('lead-form');
    
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Recolección simulada de datos (UX feedback)
            const nombre = e.target.querySelector('input[type="text"]').value;
            
            alert(`¡Gracias ${nombre}! Hemos registrado tu interés con éxito. Un asesor de Vista Mare se contactará contigo a la brevedad.`);
            leadForm.reset();
        });
    }

    // 2. Transición suave al dar clic en enlaces internos (Smooth Scrolling)
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});