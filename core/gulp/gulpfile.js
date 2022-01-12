// https://coder-coder.com/quick-guide-to-browsersync-gulp-4/
const concat = require("gulp-concat");
const purgecss = require("gulp-purgecss");
const imagemin = require("gulp-imagemin");
const sass = require("gulp-sass")(require("sass"));
var browserSync = require("browser-sync").create();

const { src, dest, watch, series } = require("gulp");

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
    series(purgeTask)
  );
}

exports.default = series(purgeTask, watchTask);
