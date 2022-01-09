var gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var rename = require("gulp-rename");
var gcmq = require('gulp-group-css-media-queries');
gulp.task('style',style)
function style(){
    return gulp.src('./style/style.css')
    .pipe(autoprefixer({
        browsers: ['last 30 versions'],
        cascade: false
    }))
    .pipe(gcmq())
    .pipe(gulp.dest('./css'))
    .pipe(rename({
        suffix: ".min",
    }))
    .pipe(csso())
    .pipe(gulp.dest('./css'))
}
gulp.task('script',function(){
    return gulp.src([
        'node_modules/rateyo/lib/cjs/rateyo.min.js'
    ])
})
gulp.task('watch',function(){
    gulp.watch('./style/style.css',gulp.parallel('style'))
})
gulp.task('css',function(){
    return gulp.src([
        'node_modules/rateyo/lib/cjs/rateyo.min.css'
    ])
})