module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Task configuration will be written here
        jshint: {
            //Se configura que archivos se les debe validar la sintaxis y errores de javascript
            all: ['Gruntfile.js', 'scripts/*.js', 'scripts/**/*.js']
        },
        watch: {
            options: {
                livereload: true
            },
            //se configura que archivos se monitorean para ejecutar instantaneamente cambios
            dev: {
                files: ['Gruntfile.js', 'scripts/*.js','scripts/**/*.js', 'views/*.html', 'css/*.css'],
                tasks: ['jshint'],

                options: {
                    atBegin: true
                }
            }
        },
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 8080,
                    livereload: true
                }
            }
        }
        /*compress: {
            dist: {
                options: {
                    archive: 'dist/<%= pkg.name %>-<%= pkg.version %>.zip'
                },
                src: [ 'index.html', 'dist/*.js', 'dist/*.css', 'libs/**', 'css/**', 'api/**', 'images/**' ]
            }
        }*/
    });
    // Loading of tasks and registering tasks will be written here
    grunt.loadNpmTasks('grunt-contrib-jshint');
    
    grunt.loadNpmTasks('grunt-contrib-connect');
    //grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-task');


    grunt.registerTask('dev', ['connect:server', 'watch:dev']);

};
