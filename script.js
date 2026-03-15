/**
 * Navigation between Views
 * @param {string} pageId - ID of the page to show
 * @param {string} sectionId - Optional ID to scroll to
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
 * Accordion Toggle logic
 * @param {HTMLElement} button - The button clicked
 */
function toggleAccordion(button) {
    const item = button.parentElement;
    const isActive = item.classList.contains('active');
    
    // Close all other accordion items
    document.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('active');
    });

    // Open the current item if it was closed
    if (!isActive) {
        item.classList.add('active');
    }
}