# フロントエンドだけで動くタイマーをつくる

## 仕様
* jQuery + Babel
* Sass
* Gulp / Browserify

## 環境をつくる

1. npm init
2. Module installation
2. Make gulpfile.js

### モジュールインストール

#### webpack向け
```
npm i -D webpack babel-loader babel-preset-es2015
```

#### gulp向け
```
npm i -D gulp gulp-webpack gulp-sass gulp-postcss postcss-cssnext gulp-pug gulp-plumber 
```

#### ライブラリ
```
npm i -S jquery
```

### gulpfile.js

`gulpfile.js`を参照のこと
