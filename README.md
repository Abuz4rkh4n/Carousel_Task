# Carousel Task

## Overview

This project implements a responsive carousel displaying testimonials of ex-smokers. The main components of the project are HTML, CSS, and JavaScript.

## Approach

The primary goal of this project was to create a seamless, reusable, and maintainable carousel component. The approach focused on the following principles:

- **Modular JavaScript**: Encapsulating the code in a `Carousel` class to manage the state and behavior of the carousel.
- **Class-based Functions**: Utilizing ES6 classes for efficient code structure.
- **DRY Principle**: Writing the code to be reusable and avoiding repetition.
- **Performance and Efficiency**: Ensuring smooth transitions and responsive design for various screen sizes.

## Code Structure

### HTML

The HTML structure consists of a main `carousel` section with nested elements for the title, cases, and navigation buttons. The container elements are set up to be populated dynamically by JavaScript.

### CSS

The CSS file includes:

1. **Variables** for consistent styling throughout the project.
2. **Mixins** for common styles like flex alignment, border-radius, and font styling.
3. **Base Styles** for overall layout and responsiveness.
4. **Media Queries** to ensure the carousel looks good on various screen sizes and devices.

### JavaScript

The JavaScript code encapsulates the carousel's logic within a `Carousel` class, which handles the following:

1. **Initialization**: Setting up the carousel's initial state and configurations.
2. **Case Generation**: Dynamically creating and inserting case elements into the container.
3. **Update Logic**: Calculating and applying the necessary transformations to show the correct cases.
4. **Event Handling**: Managing left and right navigation button clicks to update the carousel's state and display.

## Assumptions and Decisions

1. **Fixed Number of Visible Cases**: Assumed a constant number of visible cases (three) at a time.
2. **Case Data**: Used a generic template for the case content, assuming the same data structure.
3. **Responsive Design**: Implemented media queries to adjust the carousel's layout for different screen sizes.
4. **Looping Logic**: Ensured that the carousel cycles smoothly from the last case back to the first and vice versa, without requiring extra clicks.

This project provides a comprehensive example of creating a responsive and interactive carousel using modern web development practices.
