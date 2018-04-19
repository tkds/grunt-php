module.exports = function (grunt) {

    grunt.initConfig({

        // Built-in PHP-Server
        php: {
            server: {
                options: {
                    //keepalive: true,
                    hostname: 'localhost',
                    port: 5000,
                    base: './'
                }
            }
        },

        watch: {
                files: [
                    './**/*.php'
                ]
        },

 		browserSync: {
            dev: {
                bsFiles: {
                    src : './**/*.php'
                },
                options: {
                	proxy: "localhost:5000",
                    watchTask: true // < VERY important
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-php');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', ['php:server', 'browserSync', 'watch']);
};