/**
 * Navigation handler to switch between Home and Portfolio views
 * @param {string} pageId - Target view ID
 * @param {string} sectionId - Target section ID to scroll to
 */
function showPage(pageId, sectionId = null) {
    const home = document.getElementById('home-page');
    const portfolio = document.getElementById('portfolio-page');
    
    if (pageId === 'home') {
        home.classList.remove('hidden');
        portfolio.classList.add('hidden');
        if (sectionId) {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    } else if (pageId === 'portfolio') {
        home.classList.add('hidden');
        portfolio.classList.remove('hidden');
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