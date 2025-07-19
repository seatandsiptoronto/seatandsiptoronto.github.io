# Shared Navigation Component

This document explains how to use the shared navigation component across all pages in the Cafe Spot Finder website.

## Files Created

1. **`js/navigation.js`** - JavaScript component for dynamic navigation
2. **`css/navigation.css`** - Shared CSS styles for navigation
3. **`NAVIGATION.md`** - This documentation file

## How to Use

### Method 1: Using JavaScript Component (Recommended)

1. Include the navigation files in your HTML head:
```html
<link rel="stylesheet" href="../css/navigation.css">
<script src="../js/navigation.js"></script>
```

2. Call the navigation function at the end of your body or in a script tag:
```html
<script>
    loadNavigation('currentPageName');
</script>
```

### Method 2: Copy HTML Structure

If you prefer static HTML, copy this structure into your pages:

```html
<header>
    <h1><a href="../../index.html">Cafe Spot Finder</a></h1>
    <nav>
        <a href="../../search/index.html">Search</a>
        <a href="../../my-favorites/index.html">My Favorites</a>
        <a href="../../my-reservations/index.html">Reservations</a>
        <a href="../../login/index.html">Login</a>
    </nav>
</header>
```

## Path Configuration

The JavaScript automatically detects the correct paths based on the page location:

- **Main pages** (in root): Use `""` (empty string)
- **Subdirectory pages** (like `/search/`): Use `"../"`
- **Cafe pages** (like `/cafes/Bloom/`): Use `"../../"`

## Current Page Highlighting

Use these values for the `currentPage` parameter to highlight the active navigation item:

- `'search'` - for search page
- `'favorites'` - for favorites page  
- `'reservations'` - for reservations page
- `'login'` - for login page
- `''` (empty) - for main page or cafe pages

## Examples

### For main page (index.html):
```html
<script>loadNavigation();</script>
```

### For search page:
```html
<script>loadNavigation('search');</script>
```

### For cafe pages:
```html
<script>loadNavigation();</script>
```

### For favorites page:
```html
<script>loadNavigation('favorites');</script>
```

## Customization

### CSS Customization
Edit `css/navigation.css` to change:
- Colors and themes
- Font sizes and families
- Spacing and layout
- Responsive breakpoints

### JavaScript Customization
Edit `js/navigation.js` to:
- Add new navigation items
- Change path logic
- Modify active state behavior

## Benefits

1. **Consistency** - All pages use the same navigation structure
2. **Maintainability** - Update navigation in one place
3. **Responsive** - Built-in mobile responsiveness
4. **Active States** - Highlights current page
5. **Flexible** - Works with any folder structure

## Migration

To migrate existing pages:

1. Replace existing `<header>` with navigation component
2. Add navigation CSS and JS includes
3. Call `loadNavigation()` with appropriate page name
4. Remove custom header CSS if no longer needed

## Notes

- The component removes the border-bottom from header by default
- Active page highlighting uses a darker background color
- Mobile-responsive design included
- Compatible with existing styles.css