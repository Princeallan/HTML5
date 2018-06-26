var gulp = require('gulp'),
 minifyCss = require("gulp-minify-css"),
 uglify = require("gulp-uglify");
 
// task
gulp.task('minify-css', function () {
    gulp.src('./basic.css') // path to your file
    .pipe(minifyCss())
    .pipe(gulp.dest('./css'));
});
gulp.task('minify-js',  function () {
    gulp.src('./canvas.js')
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
});