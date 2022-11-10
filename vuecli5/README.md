# vuecli5

## How to Make

### Input commend
```
npm install vue@^2
npm install -g @vue/cli@^5
vue create vuecli5
```

### Select option
? Please pick a preset: <span style="color:green">**Manually select features**</span>   
? Check the features needed for your project: <span style="color:green">**Babel, PWA, Vuex, Linter**</span>   
? Choose a version of Vue.js that you want to start the project with <span style="color:green">**2.x**</span>   
? Pick a linter / formatter config: <span style="color:green">**Standard**</span>   
? Pick additional lint features: (Press <span style="color:green">**\<space>**</span> to select, <span style="color:green">**\<a>**</span> to toggle all, <span style="color:green">**\<i>**</span> to invert selection)<span style="color:green">**Lint on save**</span>   
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? <span style="color:green">**In package.json**</span>   
? Save this as a preset for future projects? <span style="color:green">**No**</span>   

### Input Commend
```
cd vuecli5
```

### Fix package.json
```json
"scripts": {
  "serve": "vue-cli-service serve --host 0.0.0.0",
  "build": "vue-cli-service build --host 0.0.0.0",
  "lint": "vue-cli-service lint --host 0.0.0.0"
},
"devDependencies": {
    "eslint-plugin-vue": "^7.20.0",
 }
```

### Fix vue.config.js
```js
module.exports = {
  devServer: {
/**
If you use webpack 3
  disableHostCheck: true, 

If you use webpack 4
 */
  allowedHosts: "all"
  },
  configureWebpack: {
    devServer: {
      headers: { "Access-Control-Allow-Origin": "*" }
    }
  }
}
```

### Input Commend
```
npm install vuex-persist@^3 --force
npm run serve
```


## Existing projects run as follows:

### Input Commend
```
cd vuecli5
npm install --force
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).