var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var watch = require('gulp-watch');

gulp.task('sass', function() {
	return gulp.src('scss/*.scss')
	.pipe(watch('scss/*.scss'))
	.pipe(sass())
	.pipe(gulp.dest('css'));
});

gulp.task('jade', function() {
	return gulp.src('jade/resume.jade')
	.pipe(watch('jade/*.jade'))
	.pipe(jade({
		pretty: true
	}))
	.pipe(gulp.dest('./'));
});

gulp.task('default', ['sass', 'jade']);