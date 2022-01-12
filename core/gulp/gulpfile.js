// https://coder-coder.com/quick-guide-to-browsersync-gulp-4/
const concat = require("gulp-concat");
const purgecss = require("gulp-purgecss");
const imagemin = require("gulp-imagemin");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const del = require("del");

const { src, dest, watch, series } = require("gulp");

function cleanTask() {
  return del("../../core/static/core/css/app.min.css", { force: true });
}

function purgeTask() {
  return src("../../core/static/core/css/*.css")
    .pipe(concat("app.min.css"))
    .pipe(
      purgecss({
        content: ["../../**/templates/**/*.html", "../../**/static/**/*.js"],
      })
    )
    .pipe(dest("../../core/static/core/css"));
}

// Watch Task
function watchTask() {
  watch(
    ["../../**/templates/**/*.html", "../../**/static/**/*.js"],
    series(cleanTask, purgeTask)
  );
}

//exports.default = series(cleanTask, purgeTask, watchTask);

exports.default = series(cleanTask, purgeTask);
