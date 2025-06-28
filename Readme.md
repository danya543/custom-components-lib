# @danya543/custom-components-lib

A modern, reusable React component library with TypeScript support, Storybook documentation, and easy integration into your projects.

---

## Table of Contents

- [@danya543/custom-components-lib](#danya543custom-components-lib)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Development](#development)
    - [Storybook](#storybook)
    - [Build](#build)
    - [Linting](#linting)
  - [Library Structure](#library-structure)
  - [Publishing to npm](#publishing-to-npm)

---

## Overview

`@danya543/custom-components-lib` is a React component library designed to provide a set of customizable, accessible, and well-tested UI components. Written entirely in TypeScript, it comes with ESLint and Prettier for consistent code style, Storybook for interactive component documentation, and a smooth build process using modern tooling.

---

## Features

- Written in TypeScript for strong typing and IDE support  
- Storybook integration for live component previews and documentation  
- ESLint configured with recommended React and TypeScript rules, plus Prettier for formatting  
- Simple import sorting for clean imports  
- Components ready to use and easy to customize  
- Built with Rollup (or your bundler of choice) for optimal package size  
- Published on npm for easy installation  

---

## Installation

Install the package via npm:

```bash
npm install @danya543/custom-components-lib
```
or 
```
yarn add @danya543/custom-components-lib
```

## Usage

Import components into your React app:
```
import { Button, Modal } from '@danya543/custom-components-lib';

function App() {
  return (
    <div>
      <Button onClick={() => alert('Clicked!')}>Click me</Button>
      <Modal isOpen={true}>Hello from Modal</Modal>
    </div>
  );
}
```

## Development

### Storybook

Storybook serves as your live playground and documentation hub.

- Run Storybook locally:
- 
  ```
  npm run storybook
  ```

- Open your browser at http://localhost:6006 to view all components with interactive controls and docs.

- Write stories inside the src/stories directory or co-located alongside components.

### Build

The library is built using Rollup (or your configured bundler):

- To create a production build:

```
npm run build:prod
```

- The output is placed in the build folder, ready to publish or consume locally.

### Linting

Linting with ESLint and auto-fixing with Prettier is configured for consistent code style:

- Run lint check:

```
npm run lint
```

- Auto-fix lint errors:


```
npm run lint:fix
```

## Library Structure

```
custom-components-lib/
├── dist/                  # Compiled production builds
├── src/
│   ├── components/        # React components (Button, Modal, etc.)
│   ├── stories/           # Storybook stories
│   ├── index.ts           # Main entry exporting components
├── .eslintrc.js           # ESLint configuration
├── prettier.config.js     # Prettier formatting config
├── rollup.config.js       # Bundler config
├── package.json           # npm package metadata & scripts
└── README.md              # This file
```

## Publishing to npm

The package is published to npm under the scope @danya543.

To publish a new version:

1. Update the version in package.json (use semantic versioning).

2. Build the library:

```
npm run build:lib
```

3. Publish:

```
npm publish --access public
```

4. Make sure you are logged into npm with:

```
npm login
```