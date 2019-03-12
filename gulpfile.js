const gulp           = require('gulp');
const browserSync    = require('browser-sync').create();
const postcss        = require('gulp-postcss');
const reporter       = require('postcss-reporter');
const syntax_scss    = require('postcss-scss');
const stylelint      = require('stylelint');
const cleanCSS		 = require('gulp-clean-css');
const minify 		 = require('gulp-minify');
const concat         = require('gulp-concat');
const imagemin       = require('gulp-imagemin');
const autoprefixer   = require('gulp-autoprefixer');
const sass           = require('gulp-sass');

var src = {
	html     :   'app/**/*.html',
	scss     :   'app/scss/style.scss',
	fonts    :   'app/fonts/**/*.*',
	img      :   'app/img/**/*.*',
	js       :   'app/js'
};

var dist = {
	root	 :	 'dist/',
	css		 :	 'dist/css/',
	js	     :	 'dist/js',
	img		 :   'dist/img',
	fonts	 : 	 'dist/fonts',
}

var watch = {
	scss	 :   'app/scss/**/*.scss',
	js		 :   'app/js/**/*.js',
	html 	 :   'app/**/*.html',
	img  	 :   'app/img/**/*.*'
}

gulp.task('run',
  [

    'concat-min-js',
	'scss-lint',
    'html',
    'fonts-dist',
	'img-min',
	'watch'	
  ], function() {
  browserSync.init({
    server: "./dist"
  });
});

gulp.task("watch", ["watch:scss", "watch:html", "watch:js", "watch:img"]);

gulp.task('watch:scss', function(){
	gulp.watch(watch.scss, ['scss']);
});

gulp.task('watch:html', function(){
	gulp.watch(watch.html, ['html']);
});

gulp.task('watch:js', function(){
	gulp.watch(watch.js, ['concat-min-js']);
});

gulp.task('watch:img', function(){
	gulp.watch(watch.img, ['img-min']);
});


gulp.task('html', function () {
	gulp.src(src.html)
		.pipe(gulp.dest(dist.root))
		.pipe(browserSync.stream());
});

gulp.task("scss-lint", function() {

	const processors = [
		stylelint(),
		reporter({
			clearMessages: true,
			throwError: true
		})
	];
  
	return gulp.src(['./app/scss/**/*.scss'])
		.pipe(postcss(processors, {syntax: syntax_scss}))
		.on('end', function() {
			gulp.start('scss')
		});
});

// Converting scss files to css files (add prefixes, minifyCSS)
gulp.task('scss', function(){
	gulp.src(src.scss)
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(cleanCSS({level: {1: {specialComments: 0}}}))
		.pipe(gulp.dest(dist.css))
		.pipe(browserSync.stream());  
});

// js concat and min
gulp.task('concat-min-js', function() {
	return gulp.src
		([
			src.js+'/libs/jquery.min.js',
			src.js+'/*.js'
		])
		.pipe(concat('main.js'), {newLine: ';'})
		.pipe(minify({
			ext:{
				min:'.js'
			},
			noSource: true
		}))
		.pipe(gulp.dest(dist.js))
		.pipe(browserSync.stream());
});

// img minimization
gulp.task('img-min', function() {
	gulp.src(src.img)
	.pipe(imagemin())
	.pipe(gulp.dest(dist.img))
	.pipe(browserSync.stream());;
});

gulp.task('fonts-dist', function() {
  	gulp.src(src.fonts)
	.pipe(gulp.dest(dist.fonts))
	.pipe(browserSync.stream());
});

gulp.task('default', ['run']);