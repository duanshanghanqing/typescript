var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('ts', function () {
    return gulp.src('src/**/*.ts')
        /*.pipe(ts({
            noImplicitAny: true,
            out: 'output.js'
        }))*/
        .pipe(ts())
        .pipe(gulp.dest('built'));
});
gulp.task('watch',function(){
    gulp.watch('src/**/*.ts',['ts']);
});
gulp.task('default',['ts','watch'],function () {
    console.log("编译完成");
});

