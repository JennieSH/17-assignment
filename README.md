# 17 Assignment - Todo List

![todo-list](https://i.imgur.com/0L6xqEE.png)

![todo gif](https://i.imgur.com/txSgCBc.gif)
## Technologies

* [Nuxt](https://nuxtjs.org/)
* [Vuex](https://vuex.vuejs.org/)
* [Eslint](https://eslint.org/)
* [Prettier](https://prettier.io/)
* [Sass/SCSS](https://sass-lang.com/)
* [svg-sprite](https://www.npmjs.com/package/@nuxtjs/svg-sprite)

## Feature

1. 使用 LocalStorage 存取 Todo List 資料
2. 根據使用者電腦的主題色 (是否設定 Dark Mode)，提供兩種顏色設定
3. Task 滑鼠雙擊後可以做編輯
4. Input 支援鍵盤的 Enter 鍵或是點擊按鈕送出
5. 支援 RWD ( break point at 768px)


## Other

在 [branch - pinia](https://github.com/JennieSH/17-assignment/tree/pinia) 寫了另一個版本，功能/樣式基本差不多，主要差別如下：

|              | master     | pinia                 |
| ------------ | ---------- | --------------------- |
| Nuxt version | 2.x        | 3.x                   |
| Store        | Vuex       | Pinia                 |
| JS / TS      | JavaScript | TypeScript            |
| SVG 套件     | svg-sprite | vite-plugin-svg-icons |


## Getting Started

```
yarn
```

```
yarn dev
```

Website start on http://localhost:3000