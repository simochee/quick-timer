# フロントエンドだけで動くタイマーをつくる

## 仕様
* jQuery + Babel
* Sass
* Gulp / Browserify

## 環境をつくる

1. npm init
2. Module installation
3. Make gulpfile.js
4. Make webpack.config.js

### モジュールインストール

#### gulp向け
```
npm i -D gulp gulp-webpack gulp-sass gulp-postcss postcss-cssnext gulp-pug gulp-plumber 
```

#### webpack向け
```
npm i -D webpack babel-loader babel-preset-es2015
```

#### ライブラリ
```
npm i -S jquery
```

### gulpfile.js

`gulpfile.js`を参照のこと

### webpack.config.js

`webpack.config.js`を参照のこと

## Pugを書く

1. Pugとは
2. Pugを書く

### Pugを書く

`src/pug/index.pug`を参照のこと

## Sassを書く

* 勝手にやってくれ

Githubから一通りダウンロード