# Frontend Mentor - To Do solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- [x] View the optimal layout for the app depending on their device's screen size
- [x] See hover states for all interactive elements on the page
- [x] Add new todos to the list
- [x] Mark todos as complete
- [x] Delete todos from the list
- [x] Filter by all/active/complete todos
- [x] Clear all completed todos
- [x] Toggle light and dark mode
- [x] Bonus: Drag and drop to reorder items on the list
- [ ] Bonus: Build this project as a full-stack application

### Screenshot

![Screenshot](https://user-images.githubusercontent.com/33945/167415688-7f040f3a-7e74-44e8-84c2-99bb650dcb42.png)

### Links

- Live Site URL: [Website hosted on Netlify](https://cozy-vacherin-e0fb42.netlify.app/)

## My process

### Built with

[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

- Semantic HTML5 markup including a11y
- CSS custom properties and flexbox
- Mobile-first workflow including Figma comps
- [React](https://reactjs.org/) - JS library
  - TypeScript, using gts
  - Custom Hooks
  - [Styled Components](https://styled-components.com/)
  - [@dnd-kit/sortable](https://docs.dndkit.com/presets/sortable)

### What I learned

This was an opportunity to keep my skills sharp. The explicit things I wanted to tinker with were TypeScript with React, and also wanted to implement custom hooks and styled components, especially with CSS variables and theming. This was an opportunity to play a little more with inline SVGs and implementing accessibility, especially in the context of forms and checkboxes.

Drag and Drop via @dnd-kit/sortable was interesting, extending event sensors to ignore default behavior using an HTML attribute.

### Continued development

I'll add more ideas I have in the GitHub issues, but things like using an app state like Context, implementing storybook, or [animating with React Spring](https://dev.to/tomdohnal/custom-checkbox-in-react-animated-and-accessible-3jk9) come to mind.

### Useful resources

#### Checkboxes and accessibility

- [Creating accessible styled checkboxes](https://www.evinced.com/blog/creating-accessible-styled-checkboxes/)

#### Styled Components: Dark Mode

- [Implementing Dark Mode In React Apps Using styled-components](https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/)
- [Implementing The Dark Mode Using React and Styled Components](https://javascript.plainenglish.io/implementing-the-dark-mode-using-react-and-styled-components-518d2edf1dd2)

#### CSS Variables and React

- [CSS Variables for React Devs](https://www.joshwcomeau.com/css/css-variables-for-react-devs/)
- [Theming styled-components with CSS custom properties](https://daily.dev/blog/theming-styled-components-with-css-custom-properties)
- [Want CSS variables in media query declarations? Try this!](https://bholmes.dev/blog/alternative-to-css-variable-media-queries/)
