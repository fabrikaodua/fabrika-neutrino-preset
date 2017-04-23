# Fabrika Neutrino preset

`fabrika-neutrino-preset` is a [Neutrino](https://neutrino.js.org) preset for creation of web applications for web platforms.

## Features

- Zero upfront configuration necessary to start developing and building a Svelte web app
- Modern Babel compilation supporting ES modules, last several major browser versions, async functions, dynamic imports, ES class properties, rest spread operators and automatic polyfills bound to platforms
- Webpack loaders for importing HTML Svelte components, CSS, images, icons, and fonts
- Webpack Dev Server during development on "localhost" and local network IP for external devices access
- Automatic creation of HTML pages, no templating of "index.html" necessary
- Hot reloading support
- Tree-shaking to create smaller bundles
- Production-optimized bundles with Babili minification, source maps and easy chunking
- Tests with Jest
- ESLint code analize

## Requirements

- Node.js v6.9+
- Neutrino v5

## Installation

`fabrika-neutrino-preset` can be installed from GitHub. Make sure  `fabrika-neutrino-preset` is a development dependency in your project.

**package.json**
```json
"devDependencies": {
  "fabrika-neutrino-preset": "git://github.com/fabrikaodua/fabrika-neutrino-preset"
},
```

## Project Layout

`fabrika-neutrino-preset` follows the standard [project layout](https://neutrino.js.org/project-layout) specified by Neutrino. This means that by default all project source code should live in a directory named `src` in the root of the project. This includes JavaScript files, CSS stylesheets, images, and any other assets that would be available to your compiled project. Only files explicitly imported or lazy loaded to your project will be bundled.

## Quickstart

After installing Neutrino and the Fabrika preset, add a new directory named `src` in the root of the project, with a single JS file named `index.js` in it. You can mount you application to the document `<body>`. Edit your `src/index.js` file with the following:

```js
import Main from './main.html'
import './main.css'

new Main({
  target: document.body
})
```

You can change this code base to better match your needs.

Now edit your project's `package.json` to add commands for starting and building the application:

```json
{
  "scripts": {
    "start": "neutrino start",
    "build": "neutrino build",
    "test": "neutrino test --watch",
    "coverage": "neutrino test --coverage"
  },
  "neutrino": {
    "use": [
      "fabrika-neutrino-preset"
    ]
  }
}
```

Start the app. 

```
❯ npm start
✔ Development server running on: http://localhost:4000
✔ Build completed
```

## Building

`fabrika-neutrino-preset` builds static assets to the `build` directory by default when build command is run.

```
❯ npm run build
```

You can either serve or deploy the contents of this build directory as a static site.

## Hot Reloading

`fabrika-neutrino-preset` supports Hot Reloading of files that was changed. Hot Module Replacement is supported only in CSS files. This means that changing of CSS will rerender only a part of styles, and changing of the rest of modules will reload the page.

Using dynamic imports with `import()` will automatically create split points and hot replace those modules upon modification during development.

## Customizing

### HTML files

Under the hood `fabrika-neutrino-preset` uses [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin) with custom template for generating HTML files. If you wish to override how these files are created, define an object in your package.json at `neutrino.options.html` with options matching the format expected by `html-webpack-plugin` and also with `"mobile"` option.

*Simple Example: Change the application title and othe options:*

**package.json**
```json
{
  "neutrino": {
    "options": {
      "html": {
        "title": "Document title",
        "mobile": true,
        "filename": "index.html"
      }
    }
  }
}
```


