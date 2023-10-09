const {src, dest, watch} = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const plumber = require('gulp-plumber');

function css(done){
    //Identificar el archivo de SASS
    //Compilarlo
    //Almacenarla en el disco duro
    src('src/scss/app.scss').
        pipe(plumber()).
        pipe(sass()).
        pipe(dest("build/css"));

    done();// Callback que avisa a gulp cuando llegamos al final
}

function javascript(done){
    src('src/js/**/*.js')
        .pipe(dest('build/js'));

    done();
}

function dev(done){
    watch('src/scss/**/*', css);//detectar cambios y compilar
    watch('src/js/**/*.js', javascript);

    done();
}



exports.css = css;
exports.js = javascript;
exports.dev = dev;