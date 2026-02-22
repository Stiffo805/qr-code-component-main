# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - QR code component solution](#frontend-mentor---qr-code-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

## Overview

### Screenshot

![Image couldn't be loaded 😔](image.png)

### Links

- Solution URL: [Solution URL](https://github.com/Stiffo805/qr-code-component-main)
- Live Site URL: [Live SITE](https://stiffo805.github.io/qr-code-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

Proud of:

```html
<div id="page-container">
  <header></header>
  <main>
    <img src="images/image-qr-code.png" />
    <p class="main-paragraph">Improve your front-end skills by building projects</p>
    <p>
      Scan the QR code to visit Frontend Mentor and take your coding skills
      to the next level
    </p>
  </main>

  <footer>
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
      >Frontend Mentor</a
    >. Coded by <a href="#">Adam Konior</a>.
  </footer>
</div>
```
```css
main {

  text-align: center;

  max-width: 300px;

  background-color: hsl(0, 0%, 100%);

  padding: var(--padding-md);

  border-radius: var(--rounded-md);

  img {
    width: 100%;
    border-radius: var(--rounded-md);
  }

  p {
    font-family: "Outfit", sans-serif;
    font-size: 15px;

    color: hsl(216, 15%, 48%);

    &.main-paragraph {
      font-weight: 700;
      font-size: 20px;

      color: black;
    }
  }
}
```

## Author

- Frontend Mentor - [@Stiffo805](https://www.frontendmentor.io/profile/Stiffo805)
- Github - [@Stiffo805](https://github.com/Stiffo805)
