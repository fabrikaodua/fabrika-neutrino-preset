# Fabrika Neutrino preset

`fabrika-neutrino-preset` is a [Neutrino](https://neutrino.js.org) preset for creation of web applications for web platforms.

## Features

- Zero upfront configuration necessary to start developing and building a Svelte web app
- Modern Babel compilation supporting ES modules, last several major browser versions, async functions, dynamic imports, ES class properties, rest spread operators and automatic polyfills bound to platforms
- Webpack loaders for importing HTML Svelte components, CSS, images, icons, and fonts
- Webpack Dev Server during development on "localhost" and local network IP for external devices access
- Automatic creation of HTML pages, no templating of `index.html` necessary
- Hot reloading support
- Tree-shaking to create smaller bundles
- Production-optimized bundles with Babili minification, source maps and easy chunking
- Testing with Jest
- Source watching for re-running of tests on change
- Collecting test coverage information and generating report
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

Project test code should live in a directory named `test` in the root of the project. Test files end in either `_test.js` or `.test.js`.

## Quickstart

After installing Neutrino and the Fabrika preset, add a new directory named `src` in the root of the project, with a single JS file named `index.js` in it. You can mount you application to the document `<body>`. Edit your `src/index.js` file with the following:

```js
import Body from './body.html'
import './main.css'

new Body({
  target: document.body
})
```

You can change this code base to better match your needs.

You can create also `test/index.test.js` as an entry point for your test. To run tests against files from your source code, simply import them. Jest framework is used in this preset so your tests will look like this:

 ```js
import module from '../src/module.js'

describe('module', () => {
  it('is truthy', () => {
    expect(module).toBeTruthy();
  });
});
```

Now edit your project's `package.json` to add commands for starting and building the application:

```json
{
  "scripts": {
    "start": "neutrino start",
    "build": "neutrino build",
    "test": "neutrino test",
    "test:watch": "neutrino test --watch",
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

```bash
❯ npm start
✔ Development server running on: http://localhost:4000
✔ Build completed
```

## Building

`fabrika-neutrino-preset` builds static assets to the `build` directory by default when build command is run.

```bash
❯ npm run build
```

You can either serve or deploy the contents of this build directory as a static site.

## Testing

```bash
❯ npm test

 PASS  test/index.test.js
  module
    ✓ is truthy (2ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.972s
Ran all test suites.
```

### Executing single tests

By default this preset will execute every test file located in your test directory ending in the appropriate file
extension.

### Watching for changes

`neutrino-preset-jest` can watch for changes on your source directory and subsequently re-run tests. Simply run command:

```bash
❯ npm test:watch
```

### Coverage reporting

Jest has an integrated coverage reporter, which requires no configuration. To collect test coverage information and
generate a report:

```bash
❯ npm run coverage
```

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


