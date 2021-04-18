// require gulp and plugins
const autoprefixer = require('autoprefixer')
const babel = require('gulp-babel')
const browserSync = require('browser-sync').create()
const cache = require('gulp-cache')
const concat = require('gulp-concat')
const cssnano = require('cssnano')
const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const postcss = require('gulp-postcss')
const postcssPresetEnv = require('postcss-preset-env')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')

// css magics
const cssMagic = _ => {
  // locate scss files
  return gulp.src('./_build/scss/**/*.scss')
    // initialize sourcemaps
    .pipe(sourcemaps.init())
    // pass it through the compiler
    .pipe(sass().on('error', sass.logError))
    // run postcss plugins
    .pipe(postcss([
      // use autoprefixer for vendor prefixes
      autoprefixer(),
      // use preset env polyfills for unsupported css features
      postcssPresetEnv(),
      // minify css
      cssnano()
    ]))
    // write sourcemaps
    .pipe(sourcemaps.write())
    // save the compiled css file to the destination folder
    .pipe(gulp.dest('./css'))
    // stream changes to all browsers
    .pipe(browserSync.stream())
}

// javascript magics
const jsMagic = _ => {
  // locate javascript files
  return gulp.src('./_build/js/**/*.js')
    // initialize sourcemaps
    .pipe(sourcemaps.init())
    // concatinate all javascript files
    .pipe(concat('make-it-work.js'))
    // use preset env polyfills for unsupported javascript features
    .pipe(babel({
      presets: ['@babel/env']
    }))
    // uglify the javascript file
    .pipe(uglify())
    // write sourcemaps
    .pipe(sourcemaps.write())
    // save the compiled javascript file to the destination folder
    .pipe(gulp.dest('./js'))
}

// image magics
const imgMagic = _ => {
  // locate images
  return gulp.src('./_build/img/*')
    // run images through minifyer while caching
    .pipe(cache(imagemin()))
    // save the optimized images to the destination folder
    .pipe(gulp.dest('./img'))
}

// run everything and set up browser sync server
const watch = _ => {
  // run all magics a single time
  cssMagic()
  jsMagic()
  imgMagic()
  // start the browser sync server
  browserSync.init({
    server: {
      baseDir: './'
    },
    open: false
  })
  // watch for changes
  gulp.watch('./_build/scss/**/*.scss', cssMagic)
  gulp.watch('./_build/js/**/*.js', jsMagic).on('change', browserSync.reload)
  gulp.watch('./_build/img/*', imgMagic).on('change', browserSync.reload)
  gulp.watch('./*html').on('change', browserSync.reload)
}

exports.default = watch
