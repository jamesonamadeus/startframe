var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'src'
        },
    })
})

// sass
gulp.task('sass', function() {
    return gulp.src('src/css/scss/**/*.scss') // pulls all .scss files & its children
      .pipe(sass()) // scss files --> css
      .pipe(gulp.dest('src/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
});

// watch
gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('src/css/scss/**/*.scss', ['sass']); 
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('src/*.html', browserSync.reload); 
    gulp.watch('src/js/**/*.js', browserSync.reload); 
});