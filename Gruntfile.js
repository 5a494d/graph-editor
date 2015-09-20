'use strict'
var LIVERELOAD_PORT = 35729
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT})
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir))
}

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

    grunt.initConfig({
        connect: {
	    server: {
            options: {
                port: 9000,
		protocol: 'http',
                hostname: '*',
		keepalive: true
            }
	    }
        }
    })

    grunt.registerTask('serve', function (target) {

        grunt.task.run([
            'connect:server'
        ])
    })
}

