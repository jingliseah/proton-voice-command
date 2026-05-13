# Proton Voice Command

A frontend portfolio project inspired by the Proton Voice Command experience, built with Gulp, Handlebars, Sass, and BrowserSync.

## Overview

This project uses a Gulp based workflow to compile, optimize, and bundle frontend assets into a production ready `dist/` directory.

### Tech Stack

- HTML templating with Handlebars
- Sass for styling
- Vanilla JavaScript
- Gulp task automation
- BrowserSync live development server

## Features

- Modular Handlebars templating
- Sass compilation and CSS optimization
- JavaScript bundling and minification
- Asset management for images and fonts
- Live reload development environment
- Production build output generation

---

# Getting Started

## Recommended Node.js Version

This project uses legacy frontend tooling and works best with:

```bash
Node.js v14
```

If you are using `nvm`, run:

```bash
nvm install 14
nvm use 14
```

## Install dependencies

```bash
npm install
```

## Install Gulp CLI

```bash
npm install --global gulp-cli
```

## Run development server

```bash
gulp serve
```

Alternatively, you can run:

```bash
npx gulp serve
```

The project will run locally with BrowserSync and automatically reload when files change.

---

# Available Gulp Tasks

| Task | Description |
|---|---|
| `gulp sass` | Compile Sass into CSS |
| `gulp css` | Bundle and minify CSS |
| `gulp js` | Bundle and minify JavaScript |
| `gulp img` | Copy image assets |
| `gulp fonts` | Copy font assets |
| `gulp html` | Compile Handlebars templates into HTML |
| `gulp clean:dist` | Remove generated build files |
| `gulp build` | Run full production build |
| `gulp serve` | Start development server with watch tasks |

---

# Project Structure

```bash
src/
├── css/
├── sass/
├── js/
├── pages/
│   └── partials/
├── img/
├── fonts/

dist/
└── assets/
```

### Source Directories

- `src/sass/` — Sass source files
- `src/css/` — Compiled CSS
- `src/js/` — JavaScript source files
- `src/pages/` — Handlebars page templates
- `src/pages/partials/` — Reusable Handlebars partials
- `src/img/` — Image assets
- `src/fonts/` — Font assets

### Build Output

Production files are generated inside:

```bash
dist/assets/x70/2020/
```

---

# Notes

- This project was originally built using an older Gulp ecosystem and legacy frontend tooling.
- Some dependencies such as `node-sass` may not be compatible with newer Node.js versions.

---

# License

ISC