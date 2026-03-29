/**
 * Navigation handler to switch between Home, Portfolio, and About views
 * @param {string} pageId - Target view ID
 * @param {string} sectionId - Target section ID to scroll to
 */
function showPage(pageId, sectionId = null) {
    const home = document.getElementById('home-page');
    const portfolio = document.getElementById('portfolio-page');
    const about = document.getElementById('about-page');
    
    // Ocultar todas las páginas
    home.classList.add('hidden');
    portfolio.classList.add('hidden');
    about.classList.add('hidden');
    
    // Mostrar la página seleccionada
    if (pageId === 'home') {
        home.classList.remove('hidden');
    } else if (pageId === 'portfolio') {
        portfolio.classList.remove('hidden');
    } else if (pageId === 'about') {
        about.classList.remove('hidden');
    }

    // Manejar el scroll
    if (sectionId) {
        // Pequeño timeout para permitir que el 'display block' se aplique antes de hacer scroll
        setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

/**
 * Handles the accordion open/close functionality
 * @param {HTMLElement} button - The button clicked to toggle
 */
function toggleAccordion(button) {
    const item = button.parentElement;
    const isActive = item.classList.contains('active');
    
    // Close all other items first
    document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
    
    // Open the target item if it was previously closed
    if (!isActive) {
        item.classList.add('active');
    }
}