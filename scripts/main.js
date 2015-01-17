/* 
 Initialization
 */

var app = angular.module('appDEV', ['firebase', 'ui.router', 'ngAnimate']);

var remoteDB = new Firebase('');

/*
 Routing And Stuff
 */

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: 'partials/home.html',
            controller: 'homeCtrl'
        })

        .state('about', {
            url: '/about',
            templateUrl: 'partials/about.html',
            controller: 'aboutCtrl'
        })

        .state('contact', {
            url: '/contact',
            templateUrl: 'partials/contact.html',
            controller: 'contactCtrl'
        })

});

/*
 Services
 */

app.factory('eMails', function ($firebase) {

    /*
     Init
     */

    /*
     Show time
     */

    return {

        addEmail: function (email) {

            if (email.indexOf('@') !== -1) {

                remoteDB.child('Emails').push(email);

                swal("Done!", "You are on our mailing list!", "success")

            } else {

                swal("Something Went Wrong!", "The email you entered was invalid!", "error")

            }

        }

    };

});

/*
 Controllers
 */

app.controller('homeCtrl', function ($scope, eMails) {

    /*
     Initialization
     */

    $scope.form = {

        email: ''

    };

    $scope.signUp = function () {
        console.log(1);

        eMails.addEmail($scope.form.email);

    };

    /*
     Ui Tweaks
     */

});

app.controller('contactCtrl', function ($scope) {

    /*
     Initialization
     */

    /*
     Ui Tweaks
     */

});

app.controller('aboutCtrl', function ($scope) {

    /*
     Initialization
     */

    /*
     Ui Tweaks
     */

});

/*
 Directives
 */