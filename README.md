# Kelstorm Cars - Premium Car Dealership Website

## Overview

This is a modern, responsive website for Kelstorm Cars, a premium car dealership. The website is designed to showcase the dealership's inventory, services, and provide a seamless user experience for potential customers.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices (desktop, tablet, mobile)
- **Modern UI**: Clean and professional design with smooth animations and transitions
- **Vehicle Showcase**: Featured vehicles section with detailed information
- **Search Functionality**: Advanced search filters to help users find specific vehicles
- **Service Highlights**: Showcase of dealership services
- **About Section**: Company information and statistics
- **Testimonials**: Customer reviews and feedback
- **Contact Form**: Easy way for customers to get in touch
- **Interactive Elements**: Dynamic content loading and smooth scrolling

## Technologies Used

- HTML5
- CSS3 (with modern features like Grid, Flexbox, and CSS Variables)
- JavaScript (ES6+)
- Font Awesome for icons
- Google Fonts

## File Structure

- `index.html` - Main HTML file
- `styles.css` - CSS styles
- `script.js` - JavaScript functionality

## How to Use

1. Clone or download this repository
2. Open `index.html` in your web browser

## Customization

### Changing Colors

The website uses CSS variables for easy color customization. To change the color scheme, edit the following variables in the `styles.css` file:

```css
:root {
    --primary-color: #e63946;    /* Main accent color */
    --secondary-color: #1d3557;  /* Secondary color */
    --accent-color: #457b9d;     /* Additional accent */
    --light-color: #f1faee;      /* Light background */
    --dark-color: #1d3557;       /* Dark text color */
    --gray-color: #8d99ae;       /* Gray text color */
    --light-gray: #f8f9fa;       /* Light gray background */
}
```

### Adding Vehicles

To add more vehicles to the featured section, duplicate the `car-card` div in the HTML and update the content:

```html
<div class="car-card">
    <div class="car-image">
        <img src="path/to/car-image.jpg" alt="Car Name">
        <div class="car-tag">Featured</div>
    </div>
    <div class="car-details">
        <h3>Car Name</h3>
        <div class="car-meta">
            <span><i class="fas fa-calendar-alt"></i> Year</span>
            <span><i class="fas fa-tachometer-alt"></i> Mileage</span>
            <span><i class="fas fa-gas-pump"></i> Fuel Type</span>
        </div>
        <div class="car-price">
            <span class="price">$Price</span>
        </div>
        <div class="car-actions">
            <a href="#" class="btn btn-outline">View Details</a>
            <a href="#" class="btn btn-primary">Schedule Test Drive</a>
        </div>
    </div>
</div>
```

### Updating Contact Information

Update the contact information in the contact section and footer with your dealership's actual details.

## Browser Compatibility

This website is compatible with all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is available for personal and commercial use.

## Credits

- Images from [Unsplash](https://unsplash.com)
- Icons from [Font Awesome](https://fontawesome.com)
- Fonts from [Google Fonts](https://fonts.google.com)