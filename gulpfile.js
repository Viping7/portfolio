var gulp=require('gulp');
var sass = require('gulp-sass');
var browserSync=require('browser-sync').create();
var useref=require('gulp-useref');
var image=require('gulp-imagemin');
var uglify=require('gulp-uglify');
var gulpIf=require('gulp-if');
var cssnano=require('gulp-cssnano');
sass.compiler = require('node-sass');

gulp.task('browser-sync',function(){
browserSync.init({
	server:{
		baseDir:'app/'
	}
});
});

function compileCSS() {
	return gulp.src('app/assets/scss/main.scss')
	  .pipe(sass().on('error', sass.logError))
	  .pipe(gulp.dest('./app/assets/css/main.css'));
  }
gulp.task('sass', compileCSS);
   


gulp.task('image', function(){
	return gulp.src('app/assets/img/**/*.+(png|jpg|gif|svg)')
				.pipe(image())
				.pipe(gulp.dest('docs/assets/img'));
})
gulp.task('useref',function(){
	return gulp.src('app/*.html').pipe(useref()).pipe(gulpIf('*.js',uglify())).pipe(gulpIf('*.css',cssnano())).pipe(gulp.dest('docs')).pipe(browserSync.reload({stream:true}));
});
gulp.task('build',['useref','image'],function(){});

gulp.task('watch',['browser-sync'],function(){
gulp.watch('app/*.html',browserSync.reload);
gulp.watch('app/assets/js/*.js',browserSync.reload);
});