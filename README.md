# Assembly: Endgame

A browser word-guessing game. Guess the hidden word before Assembly takes over the programming world. Each wrong letter knocks out one language. Eight misses and the game is over.

## Live demo

Play it here: **paste your Netlify URL**

Example: `https://your-site-name.netlify.app`

## How to play

1. A random English word is chosen. Each letter starts as a blank.
2. Click a letter on the on-screen keyboard.
3. A correct letter fills in every matching blank. A wrong letter is marked and one programming language is lost.
4. After a wrong guess, a farewell message appears for the language that just disappeared.
5. Guess every letter in the word to win. Confetti plays when you do.
6. Eight wrong guesses and you lose. The missing letters are revealed, and Assembly is the last language standing.
7. When the round ends, click **New Game** for a new word.

Languages fall in this order: HTML, CSS, JavaScript, React, TypeScript, Node.js, Python, Ruby. Assembly stays until you lose.

## Features

- On-screen A–Z keyboard. Already guessed letters are marked correct or wrong and cannot be guessed again.
- Nine language chips. A wrong guess strikes the next one off the list.
- Random farewell lines after each wrong guess.
- Win and lose banners, plus a **New Game** button when the round is over.
- Confetti when you win.

## Tech stack

- [React](https://react.dev/) for the game UI and state
- [Vite](https://vite.dev/) for the dev server and production build
- [clsx](https://github.com/lukeed/clsx) for conditional class names
- [react-confetti](https://github.com/alampros/react-confetti) for the win animation

## Project structure

| File | Role |
| --- | --- |
| `index.html` | Page shell and font links |
| `index.jsx` | Mounts the React app |
| `App.jsx` | Game state, keyboard, word display, win and lose logic |
| `Header.jsx` | Title and short instructions |
| `languages.js` | The nine language chips and their colors |
| `words.js` | Word bank the game picks from |
| `utils.js` | Random word picker and farewell messages |
| `index.css` | Layout and game styles |


