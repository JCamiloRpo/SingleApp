const {src,dest} = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('dart-sass');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const copy = require('gulp-copy');

function css(){
	return src("./sass/**/*.scss")
			.pipe(sass())
			.pipe(cleanCSS())
			.pipe(rename("main.min.css"))
			.pipe(dest("./css"));
}

function js(){
	return src(['./js/navegation.js', './js/backCortes.js' , './js/localStorage.js', './js/select.js'])
			.pipe(concat("main.min.js"))
			.pipe(uglify())
			.pipe(dest("./js"));
}

function build(){
	css();
	js();
	return src(['./index.html','./css/font-face-icon.woff2','./css/main.min.css','./js/main.min.js', './img/**/*.*'])
			.pipe(copy('./bundle/'))
}

exports.css = css;
exports.js = js;
exports.build = build;
exports.default= ()=>{};