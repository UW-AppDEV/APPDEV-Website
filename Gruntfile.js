module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        uglify: {
            dist: {
                files: [
                    {src: 'scripts/main.js', dest: 'build/main.min.js'},
                    {src: 'scripts/ui.js', dest: 'build/ui.min.js'}

                ],
                options: {
                    mangle: false
                }
            }
        },
        clean: {
            temp: {
                src: [ 'tmp' ]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'stylesheets',
                    src: ['*.css'],
                    dest: 'build',
                    ext: '.min.css'
                }]
            }
        },
        connect: {
            server: {
                options: {
                    port: 3030,
                    base: '',
                    hostname: 'localhost',
                    livereload: true
                    //keepalive: true
                }
            }
        },
        watch: {
            scripts: {
                files: ['css/*.css','scripts/*.js', 'index.html', 'partials/*.html', 'build/*.css'],
                tasks: ['uglify', 'cssmin', 'clean'],
                options: {
                    spawn: false
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['uglify', 'cssmin', 'clean']);
    grunt.registerTask('serve', ['connect', 'watch']);

};