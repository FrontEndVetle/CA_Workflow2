const gulp = require('gulp');
const { src, dest, task } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

function css() {
    return src('sass/**/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(dest('css'))
        .pipe(browserSync.stream())
}



exports.img = () => (
    gulp.src('orgimages/*')
    .pipe(imagemin())
    .pipe(gulp.dest('images'))
);

function watch() {
    browserSync.init({
        server: {
            baseDir: './',
        }
    });
    gulp.watch('./sass/**/*.scss', css);
    gulp.watch('./*.html').on('change', browserSync.reload)


}

exports.watch = watch;