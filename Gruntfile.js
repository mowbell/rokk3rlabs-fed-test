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
                files: ['Gruntfile.js', 'index.html', 'scripts/*.js','scripts/**/*.js', 'views/*.html', 'css/*.css'],
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
                    livereload: true,
                    middleware: function(connect, options, middlewares) {
                        //https://blog.gaya.ninja/articles/static-mockup-data-endpoints-connect/
                        middlewares.push(function(req, res, next) {
                            //stuff will go here
                            var endpoints = {
                                "api/buytable.json": "api/buytable.json",
                                "api/carousel.json": "api/carousel.json",
                            };
                            var match = false;
                            var fileToRead = "";

                            Object.keys(endpoints).forEach(function(url) {
                                if (req.url.indexOf(url) === 0) {
                                    match = true;
                                    fileToRead = endpoints[url];
                                }
                            });

                            //no match with the url, move along
                            if (match === false) {
                                return next();
                            }

                            res.end(grunt.file.read(fileToRead));
                        });

                        return middlewares;
                    }
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
