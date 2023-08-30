# Some minimal projects starter template.

## Base features

- Small - Based on the smallest runnable build.
- ESLint - Find and fix problems in your JavaScript/TypeScript code.
- Prettier - Help you format the code on save.
- Alias - Out-of-the-box path alias config

## Quick Start

```bash
npx degit https://github.com/Tyangs/boilerplates/{boilerplate-name} {custom-dir-name}

# e.g.
npx degit https://github.com/Tyangs/boilerplates/react-ts-vite react-demo
```

## Templates

- common packages
  - eslint
  - prettier
- common scripts
  - `yarn lint`: find code problems in your app code by `.eslintrc` config.
  - `yarn lint:fix`: find and fix code problems in your app code by `.eslintrc` config.
  - `yarn format`: format your app code by `.prettierrc` config.
  - `yarn cz`: git commit with cz-emoji, equal to `npx git-cz`.

### react-ts-vite

- main packages
  - react 18
  - typescript 5
  - vite 4
- scripts (I use [yarn](https://yarnpkg.com/))
  - `yarn dev`: run the app in dev mode, will auto open http://localhost:3000 in your browser.
  - `yarn build`: build the app for production to the `dist` folder.
- preview  
  ![react-ts-vite preview](https://github.com/Tyangs/boilerplates/raw/main/images/react-ts-vite.png)

### react-ts-vite-tailwindcss

- main packages
  - react 18
  - typescript 5
  - vite 4
  - tailwindcss 3
- scripts (I use [yarn](https://yarnpkg.com/))
  - `yarn dev`: run the app in dev mode, will auto open http://localhost:3001 in your browser.
  - `yarn build`: build the app for production to the `dist` folder.
- preview  
  ![react-ts-vite-tailwindcss preview](https://github.com/Tyangs/boilerplates/raw/main/images/react-ts-vite-tailwindcss.png)

### vue3-ts-vite

- main packages
  - vue 3
  - typescript 5
  - vite 4
- scripts (I use [yarn](https://yarnpkg.com/))
  - `yarn dev`: run the app in dev mode, will auto open http://localhost:3002 in your browser.
  - `yarn build`: build the app for production to the `dist` folder.
- preview  
  ![vue3-ts-vite preview](https://github.com/Tyangs/boilerplates/raw/main/images/vue3-ts-vite.png)
