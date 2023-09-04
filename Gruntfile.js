module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: ['./dist/**/*.css'],
                dest: './dist/main.css'
            }
        },
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'compressed'
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'assets/scss/',
                    src: ['main.scss'],
                    dest: 'dist/',
                    ext: '.css'
                }]
            }
        },
        watch: {
            scripts: {
                files: ['./assets/scss/**/*.scss'],
                tasks: ['sass', 'concat'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ["sass", "concat"]);

};