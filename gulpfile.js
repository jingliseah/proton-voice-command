var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');
var del = require('del');
var log = require('fancy-log');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var browserSync = require("browser-sync").create();
const uglifyes = require('uglify-es');
const composer = require('gulp-uglify/composer');
const uglify = composer(uglifyes, console);
var babel = require('gulp-babel');


// ===================================== Sass to Css =====================================
gulp.task("sass", function () {
  gulp.src(["src/sass/vendor/**/*"])
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("src/css/vendor/"));

  return gulp.src(["src/sass/**/*"])
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("src/css/"));
});


// ===================================== CSS concat and bundle =====================================
gulp.task("css", function () {
  return gulp.src(["src/css/vendor/**/*.css", "src/css/**/*"])
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(concat("bundle.css"))
    .pipe(gulp.dest("dist/assets/x70/2020/css/"));
});


// ===================================== clean Src css Folder =====================================
gulp.task('clean:css', function () {
  return del([
    'src/css/**/**/*.css', '!src/css/vendor/'
  ]);
});


// ===================================== JS concat and bundle =====================================
gulp.task("js", function () {
  return gulp.src(["src/js/0-vendor/*.js", "src/js/components/*.js"])
    .pipe(uglify())
    .pipe(concat("bundle.js"))
    .pipe(gulp.dest("dist/assets/x70/2020/js/"));
});



// ===================================== clean Src js Folder =====================================
gulp.task('clean:js', function () {
  return del([
    'src/js/**/*',
  ]);
});


// ===================================== Move Images to Dist =====================================
gulp.task('img', function () {
  return gulp.src(['./src/img/**'])
    .pipe(gulp.dest('dist/assets/x70/2020/img/'));
});


// ===================================== Move Fonts to Dist =====================================
gulp.task('fonts', function () {

  return gulp.src(['./src/fonts/*'])
    .pipe(gulp.dest('dist/assets/x70/2020/fonts/'));

});


// ===================================== Handlebars template setup =====================================
gulp.task('html', function () {

  return gulp.src('./src/pages/*.hbs')
    .pipe(handlebars({}, {
      ignorePartials: true,
      batch: ['./src/pages/partials']
    }))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(gulp.dest('./dist'));

});


// ===================================== Clean Dist folder ===================================== //
gulp.task('clean:dist', function () {
  return del([
    'dist/*',
  ]);
});


// =================================== Copy Dist Folder to IIS Inet pub local host ======================== //
gulp.task('copy-iis', () => {

  return gulp.src('dist/**')
    .on('end', function () {
      log("Copying Dist folder to IIS");
    })
    .pipe(gulp.dest("C:/inetpub/wwwroot/html-static"))
    .on('end', function () {
      log("files successfully copied");
    });

});


// ===================================== Watch file changes and run Build ======================
gulp.task('watch', function () {

  gulp.watch(
    ['./src/pages', './src/sass/', './src/js/', './src/img/'],
    gulp.series('build', reload)
  )

});


// ===================================== Build Dist files =====================================
gulp.task('build',
  gulp.series(
    'clean:css',
    'clean:dist',
    'sass',
    'css',
    'js',
    'img',
    'fonts',
    'html'
  ),
);


// ===================================== Reload browser =====================================
function reload(done) {
  browserSync.reload();
  done();
}


// ===================================== serve files using Browser sync =====================================
gulp.task('serve',
  gulp.series('build', serve, 'watch')
);


function serve(done) {
  browserSync.init({
    open: false,
    server: {
      baseDir: './dist/'
    }
  });
  done();
}
