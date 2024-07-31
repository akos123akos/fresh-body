import gulp from 'gulp';
import uglify from 'gulp-uglify';
import htmlmin from 'gulp-htmlmin';
import cleanCSS from 'gulp-clean-css';

gulp.task('compress-js', function () {
    return gulp.src('src/js/**/*.js') 
        .pipe(uglify()) 
        .pipe(gulp.dest('dist/js')); 
});

gulp.task('minify-css', function () {
    return gulp.src('src/scss/main.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/scss'));
});

gulp.task('minify-html', function () {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
});


gulp.task('default', gulp.parallel('compress-js', 'minify-css', 'minify-html'));


gulp.task('watch', function() {
    gulp.watch('src/js/**/*.js', gulp.series('compress-js'));
    gulp.watch('src/scss/*.css', gulp.series('minify-css')); 
    gulp.watch('src/**/*.html', gulp.series('minify-html'));
});
