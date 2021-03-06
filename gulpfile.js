var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var watch = require('gulp-watch');
var plugins = require('gulp-load-plugins')();

gulp.task('sass', function() {
	return gulp.src('scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('css'));
});

function getResumeData() {
  var resumeData = require('./resume.json');
  // remove cache
  // delete require.cache[require.resolve('./resume.json')];
  // delete require.cache[require.resolve(localePath)];

  // what's this for?
  // locals.highlight = highlight;

  return resumeData;
}

gulp.task('jade', function() {
  return gulp.src('jade/resume.jade')
    .pipe(plugins.jade({
    	locals : getResumeData(),
    	pretty: true
     }))
	.pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('scss/*.scss', ['sass']);
  gulp.watch('jade/*.jade', ['jade']);
})

gulp.task('default', ['watch']);

gulp.task('build', ['sass', 'jade']);