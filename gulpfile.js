var gulp = require('gulp'); // Importa gulp de la carpeta node_modules
var sass = require('gulp-sass'); // Importa gulp-sass
var notify = require('gulp-notify'); // Notificaciones de escritorio

// Definimos tarea por defecto
gulp.task("default", function(){
	gulp.watch("./src/scss/*.scss", ["compile-sass"]); // Observa cambios en SASS , si se producen se ejecuta la tarea compile-sass
});

// Definimos tarea para compiplar SASS
gulp.task("compile-sass", function(){
	gulp.src("./src/scss/style.scss") // cargamos el archivo
	.pipe(sass().on('error', sass.logError)) // compilamos el archivo sass. En caso de error lo muestra por el log
	.pipe(gulp.dest("./dist/css/")) // guardamos el archivo en dist/css
	.pipe(notify({
		title: "SASS",
		message: "Compiled!!"
	}));
});

// Notificaciones de escritorio



