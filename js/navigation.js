// Shared Navigation Component
function createNavigation(currentPage = '') {
    const basePath = getBasePath();
    
    return `
        <header>
            <h1><a href="${basePath}index.html">Cafe Spot Finder</a></h1>
            <nav>
                <a href="${basePath}search/index.html" ${currentPage === 'search' ? 'class="active"' : ''}>Search</a>
                <a href="${basePath}my-favorites/index.html" ${currentPage === 'favorites' ? 'class="active"' : ''}>My Favorites</a>
                <a href="${basePath}my-reservations/index.html" ${currentPage === 'reservations' ? 'class="active"' : ''}>Reservations</a>
                <a href="${basePath}login/index.html" ${currentPage === 'login' ? 'class="active"' : ''}>Login</a>
            </nav>
        </header>
    `;
}

// Determine the base path based on current location
function getBasePath() {
    const path = window.location.pathname;
    const depth = (path.match(/\//g) || []).length - 1;
    
    if (path.includes('/cafes/')) {
        return '../../';
    } else if (depth > 1) {
        return '../';
    } else {
        return '';
    }
}

// Load navigation into the page
function loadNavigation(currentPage = '') {
    document.addEventListener('DOMContentLoaded', function() {
        const navigationHTML = createNavigation(currentPage);
        
        // Find existing header or create one
        let header = document.querySelector('header');
        if (header) {
            header.outerHTML = navigationHTML;
        } else {
            // Insert at the beginning of body
            document.body.insertAdjacentHTML('afterbegin', navigationHTML);
        }
    });
}

// Usage examples:
// For main page: loadNavigation();
// For search page: loadNavigation('search');
// For favorites page: loadNavigation('favorites');
// For reservations page: loadNavigation('reservations');
// For login page: loadNavigation('login');
// For cafe pages: loadNavigation();