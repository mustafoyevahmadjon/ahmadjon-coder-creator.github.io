var gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var rename = require("gulp-rename");
var gcmq = require('gulp-group-css-media-queries');
var browserSync = require('browser-sync');
gulp.task('style', style)
function style() {
    return gulp.src('./app/style/style.css')
        .pipe(autoprefixer({
            browsers: ['last 30 versions'],
            cascade: false
        }))
        .pipe(gcmq())
        .pipe(gulp.dest('./app/css'))
        .pipe(rename({
            suffix: ".min",
        }))
        .pipe(csso())
        .pipe(gulp.dest('./app/css'))
}
// gulp.task('sass', function () {
//     return gulp.src('app/scss/style.scss')
//         .pipe(sass({ outputStyle: 'compressed' }))
//         .pipe(rename({ suffix: '.min' }))
//         .pipe(autoprefixer({
//             overrideBrowserslist: ['last 8 versions']
//         }))
//         .pipe(gulp.dest('app/css'))
//         .pipe(browserSync.reload({ stream: true }))
// });
gulp.task('watch', function () {
    gulp.watch('./app/style/style.css', gulp.parallel('style'))
})
gulp.task('css', function () {
    return gulp.src([
        'node_modules/rateyo/lib/cjs/rateyo.min.css'
    ])
})

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});
gulp.task('default', gulp.parallel('style', 'script', 'watch', 'browser-sync'));