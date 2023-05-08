# to-do-pwa

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm i -g npm
npm init vue@3
```
✔ Project name: … to-do-pwa
✔ Add TypeScript? … __No__ / Yes
✔ Add JSX Support? … __No__ / Yes
✔ Add Vue Router for Single Page Application development? … __No__ / Yes
✔ Add Pinia for state management? … No / __Yes__
✔ Add Vitest for Unit Testing? … __No__ / __Yes__
✔ Add an End-to-End Testing Solution? › No
✔ Add ESLint for code quality? … No / __Yes__
✔ Add Prettier for code formatting? … No / __Yes__

```sh
npm install
```

```sh
npm i @vueuse/core
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/vue-fontawesome

```

Make file about .prettierignore on root
```
**.min.**
```
Fix on package.json
```json
"scripts": {
  "format": "prettier --ignore-path ./.prettierignore --write src/ ",
  "dev": "vite --host"
},
```
ADD `host:true` on `vite.config.js`
```js
export default defineConfig({
  host: true,
})
```
### Compile and Hot-Reload for Development

```sh
npm run host
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
