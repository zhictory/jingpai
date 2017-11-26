const path = require('path');
const gulp = require('gulp');
const sass = require('gulp-sass');
const htmlreplace = require('gulp-html-replace');
const fileinclude = require('gulp-file-include');
const browserSync = require('browser-sync');
const destHtml = path.join(__dirname, './dev/*.html');

// 浏览器同步刷新
browserSync({
  browser: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  server: path.dirname(destHtml),
  notify: false
});

gulp.watch('./src/views/**/*.scss', function (event) {
  return gulp.src(event.path)
    .pipe(sass())
    .pipe(gulp.dest('./dev/css'));
});

gulp.watch('./src/widgets/*.scss', function (event) {
  return gulp.src(event.path)
    .pipe(sass())
    .pipe(gulp.dest('./dev/css'));
});

gulp.watch('./src/views/**/*.html', function (event) {
  return gulp.src(event.path)
    .pipe(fileinclude({
      prefix: '@@',
      basepath: './src/widgets/'
    }))
    .pipe(gulp.dest('./dev'));
});

gulp.watch('./src/views/**/*.js', function (event) {
  return gulp.src(event.path)
    .pipe(gulp.dest('./dev/js'));
});
gulp.watch('./src/libs/*.js', function (event) {
  return gulp.src(event.path)
    .pipe(gulp.dest('./dev/libs'));
});