var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
let cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
 
gulp.task('compress', function () {
    return gulp.src('./src/js/*.js')
    .pipe( uglify() )
    .pipe(gulp.dest('./production/js'))
});
 
gulp.task('concat', function() {
  return gulp.src(['./src/bs/normilize/normilize.css','./src/bs/bootstrap-grid.min.css', './src/css/styles.css'])
    .pipe(concat('styles.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./production/css'));
});

gulp.task('minify', () => {
  return gulp.src('production/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./production'));
});