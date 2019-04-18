const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require ('gulp-uglify');
const del = require ('del');
const imagemin = require('gulp-imagemin'); 
const browserSync = require('browser-sync').create();
const fontmin = require('gulp-fontmin');


sass.compiler = require('node-sass');

function styles(){
	return gulp.src('./src/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(autoprefixer(
			{browsers: ['>0.1%'],
            cascade: false}))
		.pipe(sass({
		    includePaths: require('node-normalize-scss').includePaths
		}))
		.pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.stream());
}


function scripts(){
	return gulp.src('./src/js/**/*.js')
	.pipe(uglify ())
	.pipe(uglify({
			toplevel: true
		}))
	.pipe(gulp.dest('./dist/js'))
	.pipe(browserSync.stream());
}

function lib(){
	return gulp.src([
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/slick-carousel/slick/slick.min.js',
    ])
	.pipe(gulp.dest('./dist/js'))

}

function images(){
	return gulp.src('./src/img/*')
    .pipe(imagemin([
	    imagemin.gifsicle({interlaced: true}),
	    imagemin.jpegtran({progressive: true}),
	    imagemin.optipng({optimizationLevel: 5}),
	    imagemin.svgo({
	        plugins: [
	            {removeViewBox: true},
	            {cleanupIDs: false}
	        ]
	    })
	]))
	.pipe(gulp.dest('./dist/img'))
	.pipe(browserSync.stream());
}

function fonts() {
    return gulp.src('./src/fonts/**/*')
    	.pipe(fontmin())
        .pipe(gulp.dest('./dist/fonts'));
}


function watch(){
	browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

	gulp.watch('./src/sass/**/*.scss', styles);
	gulp.watch('./src/js/*.js', scripts);
	gulp.watch('./dist/*.html', browserSync.reload);
}

function clean(){
	return del(['dist/css/*', 'dist/js/*','./dist/img/*', './dist/fonts/*']);
}

gulp.task('styles',styles);
gulp.task('scripts',scripts);
gulp.task('lib', lib);
gulp.task('images', images);
gulp.task('fonts', fonts);
gulp.task('watch', watch);

gulp.task('build', gulp.series(clean,
	gulp.parallel(styles, scripts, lib, images, fonts)
	));

gulp.task('default', gulp.series('build','watch'));