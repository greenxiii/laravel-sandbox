var gulp = require('gulp'),
	bs = require('browser-sync').create()



gulp.task('browser-sync', function() {
    bs.init({
        proxy: "http://laravel-sandbox.com/",
        open: false
    });
});

gulp.task('serve', ['browser-sync', 'watch']);

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch(['app/Http/Controllers/**/*.php'], bs.reload);
  gulp.watch(['resources/views/**/*.blade.php'], bs.reload);
  gulp.watch(['public/app/**/*.js'], bs.reload);
  gulp.watch(['public/app/**/*.html'], bs.reload);
});