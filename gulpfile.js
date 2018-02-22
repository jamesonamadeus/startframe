var gulp = require('gulp');
var sass = require('gulp-sass');

// gulp sass
gulp.task('sass', function(){
    return gulp.src('src/css/scss/**/*.scss')
      .pipe(sass()) // sass --> css
      .pipe(gulp.dest('src/css'))
});

// watch
gulp.task('watch', function(){
    gulp.watch('src/css/scss/**/*.scss', ['sass']); 
    // Other watchers
})