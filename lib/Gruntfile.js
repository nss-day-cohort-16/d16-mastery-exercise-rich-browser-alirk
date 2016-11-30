module.exports = function(grunt) {

grunt.initConfig({

browserify: {
    js: {
        src: ['../src/main.js'],
        dest: '../dist/app.js'
    },
    options: {
        transform: ['hbsfy'],
        browserifyOptions: {
            paths: [
                "./node_modules"
            ]
        }
    }
},

jshint: {
    files: ['../src/**/*.js'],
    options: {
        predef: ["document", "console", "$", "require"],
        esnext: true,
        browser: true,
        globalstrict: true,
        browserify: true
    }
},

copy: {
    bootstrap: {
        expand: true,
        cwd: 'node_modules/bootstrap/dist',
        src: ['**'],
        dest: '../dist'
    },
    jquery: {
        expand: true,
        cwd: 'node_modules/jquery/dist',
        src: ['jquery.min.js'],
        dest: '../dist'
    }
},

sass: {
    dist: {
        files: {
            '../css/main.css': '../scss/main.scss'
        }
    }
},

watch: {
    src: {
        files: ['../src/**/*.js'],
        tasks: ['jshint', 'browserify']
    },
    sass: {
        files: ['../scss/**/*.scss'],
        tasks: ['sass']
    },
    hbs: {
        files: ['../src/templates**/*.hbs'],
        tasks: ['browserify']
    }
}

});

require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

grunt.registerTask('default', ['jshint', 'copy', 'sass', 'browserify', 'watch']);
};
