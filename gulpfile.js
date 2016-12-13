'use strict'

const gulp = require('gulp');
const webpack = require('gulp-webpack');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext'); 
const pug = require('gulp-pug');

gulp.task('webpack', () => {
    gulp.src('./src/scripts/entry.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('./docs/scripts'));
});

gulp.task('sass', () => {
    gulp.src('./src/sass/**/!(_)*.sass')
        .pipe(plumber())
        .pipe(sass({
			preferredSyntax: 'sass'
        }).on('error', sass.logError))
        .pipe(postcss([ cssnext() ]))
        .pipe(gulp.dest('./docs/stylesheets'));
});

gulp.task('pug', () => {
    gulp.src('./src/pug/*.pug')
        .pipe(plumber())
        .pipe(pug())
        .pipe(gulp.dest('./docs'));
});

gulp.task('watch', () => {
    gulp.watch('./src/sass/**/*.sass', ['sass']);
    gulp.watch('./src/pug/**/*.pug', ['pug']);
});

gulp.task('dev', ['watch', 'webpack', 'sass', 'pug']);