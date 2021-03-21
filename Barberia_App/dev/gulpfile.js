const {src,dest,series} = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('dart-sass');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const copy = require('gulp-copy'); //npm install --save-dev gulp-copy
const image = require('gulp-image'); //npm install --save-dev gulp-image

function css(destino){
	src('./css/font-face-icon.woff2')
	.pipe(copy(`./${destino}`));
	return src("./sass/**/*.scss")
			.pipe(sass())
			.pipe(cleanCSS())
			.pipe(rename("main.min.css"))
			.pipe(dest(`./${destino}/css`));
}

function js(destino){
	return src(['./js/navegation.js', './js/backCortes.js' , './js/localStorage.js', './js/select.js'])
			.pipe(concat("main.min.js"))
			.pipe(uglify())
			.pipe(dest(`./${destino}/js/`));
}

function images(destino){
	return src('./img/**/*')
	.pipe(image())
	.pipe(dest(`./${destino}/img`));
}

function html(destino){
	return src('./index.html')
	.pipe(copy(`./${destino}`));
}

function build_dev(){
	css("build");
	js("build");
	html("build");
	return Promise.resolve("Build finished on dev");
}

function build_rel(){
	css("../www");
	js("../www");
	images("../www");
	html("../www");
	return Promise.resolve("Build finished on www");
}

exports.build_dev = build_dev;
exports.build_rel = build_rel;
exports.css = function(){ css("build");};
exports.js = function(){ js("build");};
exports.images = function(){ images("build");};
exports.default= ()=>{};