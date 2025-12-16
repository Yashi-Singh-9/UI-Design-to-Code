# UI Design to Code Project

This project is a collection of UI designs converted into functional front-end code using various technologies. It includes styles written in **SASS**, **SCSS**, **LESS**, and **Stylus**, along with JavaScript where needed to add interactivity or dynamic behavior.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Installation & Setup](#installation--setup)
  - [SASS / SCSS](#sass--scss)
  - [LESS](#less)
  - [Stylus](#stylus)
- [Live Compilation](#live-compilation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

This project demonstrates how to implement UI designs with different CSS preprocessors and vanilla JavaScript. It's designed for learning, experimenting, and understanding the differences and workflows among SASS/SCSS, LESS, and Stylus.

## Technologies Used

- HTML5
- CSS3 with:
  - SASS
  - SCSS
  - LESS
  - Stylus
- JavaScript (Vanilla)
- Visual Studio Code (Recommended)

---

## Installation & Setup

To work with this project locally, you’ll need Node.js and VS Code with some extensions for live compilation.

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Visual Studio Code](https://code.visualstudio.com/)

### SASS / SCSS

**Option 1: Live Compilation with VS Code**

Install the **Live Sass Compiler** extension:
- Extension: [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)

Start watching `.sass` or `.scss` files by clicking **"Watch Sass"** in the VS Code status bar.

**Option 2: Compile via CLI**

Install globally:

```bash
npm install -g sass
```

Compile:

```bash
sass scss/style.scss dist/style.css
```

### LESS

**Live Compilation with VS Code**

Install the **Easy LESS** extension:
- Extension: [Easy LESS](https://marketplace.visualstudio.com/items?itemName=mrcrowl.easy-less)

It automatically watches `.less` files and outputs to `.css`.

**CLI Option (optional):**

```bash
npm install -g less
lessc less/style.less dist/style.css
```

### Stylus

Install CLI globally:

```bash
npm install -g stylus
```

Compile:

```bash
stylus stylus/style.styl -o dist/style.css
```

---

## Live Compilation

For real-time preview and compilation, you can use **Live Server** (optional):
- Extension: [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

---

## Usage

Clone the repository:

```bash
git clone https://github.com/Yashi-Singh-9/UI-Design-to-Code.git
cd UI-Design-to-Code
```

Open the project in VS Code and start editing. Use the appropriate extension or CLI to compile the files as needed.

---

## Contributing

Feel free to fork this repository and submit pull requests with improvements, fixes, or new designs.

---

## License

This project is open-source and available under the [MIT License](LICENSE).
