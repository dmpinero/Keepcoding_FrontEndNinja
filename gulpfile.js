var gulp = require('gulp'); // Importa gulp de la carpeta node_modules
var sass = require('gulp-sass'); // Importa gulp-sass

// Definimos tarea por defecto
gulp.task("default", function(){
	console.log("Hello World");
});

// Definimos tarea para compiplar SASS
gulp.task("compile-sass", function(){
	gulp.src("./src/scss/style.scss") // cargamos el archivo
	.pipe(sass()) // compilamos el archivo sass
	.pipe(gulp.dest("./dist/css/")) // guardamos el archivo en dist/css
});