const { series } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return gulp.src('./src/main/resources/static/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/main/resources/static/css'));
};

function copy() { // copiam arxis pq mos funcioni es js a netlift posar dist/js/* si no va be//
    return gulp.src('./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')
        .pipe(gulp.dest('./src/main/resources/static/js'));
};

exports.compila = buildStyles;
exports.build = series(buildStyles, copy);