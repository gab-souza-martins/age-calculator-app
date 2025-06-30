# Frontend Mentor - Age calculator app solution

This is my solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Thank you Frontend Mentor for the opportunity to cultivate my skill.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [What I'm proud of](#what-im-proud-of)
  - [What I would do differently](#what-i-would-do-differently)
  - [What challenges I faced](#what-challenges-i-faced)
- [Author](#author)

## Overview

### Screenshots

![Screenshot of the webpage on desktop.](<design/Screenshot 2025-06-30 at 09-56-16 Frontend Mentor Age calculator app.png>)
![Screenshot of the webpage on mobile.](<design/Screenshot 2025-06-30 at 09-56-31 Frontend Mentor Age calculator app.png>)

### Links

- Solution URL: [Github repository](https://github.com/gab-souza-martins/age-calculator-app)
- Live Site URL: [Github pages](https://gab-souza-martins.github.io/age-calculator-app/)

## My process

### What I'm proud of
I am proud of learning to figure out solutions in JavaScript on my own. Other JS projects of mine so far have been made with direct assistance, while with this one, I had to find the solutions myself, which was very rewarding and helped me learn more of how JS works as a whole.

### What I would do differently
For this challenge, I started by coding the exceptions and errors the program would need to account for, which worked well, but I feel it could have been more efficient if I had started out with the main functionality and then worked out how the exceptions would work. Although the exceptions were fairly easy to implement once I had them figured out, which gave me some momentum to continue to the end.

### What challenges I faced
I wasn't able to implement the design as close to the previews as possible. Flexbox and grid are still hard for me to figure out, and the style guide gave me misleading directions, like a 32 px font size that could never work in smaller screen sizes. I hope to understand more about responsive design as I practice it.

I also had to repeat a few lines of code which I didn't know how to make more efficient. For example, after running through all the exceptions for the day, month and year inputs, the code marks an individual variable for each of them as valid, but the if-else statement for the day input do that twice: once at the end, after every possible error is accounted for, and once after confirming the user typed Febuary 29th on a leap year. If the user did not type a leap year alongside 29th Feb, they get an error, but if it was a leap year, the program would not validate the input, stopping at that step, which forced me to duplicate the validation. If anyone has a solution to that problem, I would be most grateful.

## Author

- Github - [Gabriel de Souza](https://github.com/gab-souza-martins)
- Frontend Mentor - [Gabriel de Souza](https://www.frontendmentor.io/profile/gab-souza-martins)
