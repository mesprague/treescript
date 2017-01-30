
const gulp = require("gulp");
const ts = require("gulp-typescript");
// const emojify = require("gulp-emojify");
const shelljs = require("shelljs");
const gulpUtil = require('gulp-util');
const proj = ts.createProject("tsconfig.json");

gulp.task("default", ["info"], function() {
    gulpUtil.log("Running default task","It has nested task");
});

gulp.task('build', function() {
    let tscOutput =  gulp.src('src/**/*.ts').pipe(proj());
    return tscOutput.js.pipe(gulp.dest("dist"));
});

gulp.task('info', function() {
    const {name,version,description} = require("./package.json");
    console.log("")
    console.log(`Project: ${name} ${version}`);
    console.log(`Description: ${description}\n`);
});