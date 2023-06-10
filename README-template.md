# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla Javascript

### What I learned

How top add a dropdown under a link tag. By adding a ul tag inside a li tag.
I also learnt how to properly add a dark background when my navigation menu bar is clicked in mobile view.

```html
 <nav>
        <ul class="activateThis">
          <li><a href="">
            Features
          </a>
          <img class="clickThisFirst" src="images/icon-arrow-down.svg" alt="Arrow Down">
          <ul class="insideList">
            <li><img src="images/icon-todo.svg" alt="To do svg">Todo List</li>
            <li><img src="images/icon-calendar.svg" alt="To do svg">Calendar</li>
            <li><img src="images/icon-reminders.svg" alt="To do svg">Reminders</li>
            <li><img src="images/icon-planning.svg" alt="To do svg">Planning</li>
          </ul>
          </li>
          <li><a href="">
            Company
          </a>
          <img class="clickThis" src="images/icon-arrow-down.svg" alt="Arrow Down">
          <ul class="insideListComp">
            <li>History</li>
            <li>Our Team</li>
            <li>Blog</li>
          </ul>
          </li>
          <li><a href="">Careers</a></li>
          <li><a href="">About</a></li>
        </ul>
      </nav>
```
```css
 .btns::after{
        content: "";
        position: fixed;
        width: 40%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        left: 0;
        top: 0;
        z-index: 0;
    }
```
```js
menubar.addEventListener('click', ()=>{
    navLinks.classList.toggle('showBtns');
    if (navLinks.classList.contains('showBtns')) {
        menubar.setAttribute('src', 'images/icon-close-menu.svg');
    } else {
        menubar.setAttribute('src', 'images/icon-menu.svg');
    };
});
```

### Continued development

I want to perfect the use of position property and the pseudo-elements.

### Useful resources

- [Stack Overflow](https://stackoverflow.com/questions/47128122/how-to-darken-the-page-when-the-navigation-bar-is-unfolded) - This helped me with darkening my background. I really liked this pattern and will use it going forward.

## Author

- Frontend Mentor - [@Ohiole](https://www.frontendmentor.io/profile/Ohiole)
- Twitter - [@__ojoo](https://www.twitter.com/__ojoo)

