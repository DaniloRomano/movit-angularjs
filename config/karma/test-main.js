var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
    return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
    }
});

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base/src',
    
    paths: {
        
        angular: 'public/vendor/angular/angular',
        ngRoute: 'public/vendor/angular-route/angular-route',
        angularMocks: 'public/vendor/angular-mocks/angular-mocks',
        jquery: 'public/vendor/jQuery/dist/jquery',
        bootstrap: 'public/vendor//bootstrap/dist/js/bootstrap',        
        controllers: 'public/js/controller'        
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        ngRoute: {
            deps: ['angular']
        },
        angularMocks:{
            deps: ['angular']
        },
        jquery: {
            exports: '$'
        },
        bootstrap: {
            deps: ['jquery']
        }
    },

    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});