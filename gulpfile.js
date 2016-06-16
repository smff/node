// Dependencies
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

var notify = require('gulp-notify');
var livereload = require('gulp-livereload');

// Task
gulp.task('dev', function () {
    // listen for changes
    // livereload.listen();
    // // configure nodemon
    // nodemon({
    //     // the script to run the app
    //     script: './dist/app.js',
    //     ext: 'js'
    // }).on('restart', function () {
    //
    //     setTimeout(function () {
    //         livereload.changed('./dist/app.js');
    //         gulp.src('./dist/app.js')
    //             .pipe(notify('Reloading page, please wait...'));
    //     }, 1000); // 1 second pause
    //
    // });

     nodemon({
        script: './src/app.js',
        exec: './node_modules/.bin/babel-node'
    });

});