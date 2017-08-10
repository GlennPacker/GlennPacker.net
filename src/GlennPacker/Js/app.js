var app = angular.module('app', ['ui.router', 'app.controllers', 'app.directives', 'app.services']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
        var viewBasePath = '/js/templates/';

        $locationProvider.html5Mode(false);
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home',
            {
                url: '/home',
                title: 'GlennPacker.net',
                controller: 'homeController as vm',
                templateUrl: viewBasePath + 'home.html'
            })
            .state('clients',
            {
                url: '/clients',
                title: 'GlennPacker.net',
                controller: 'clientsController as vm',
                templateUrl: viewBasePath + 'Clients.html'
            })
            .state('frontenddevelopment',
                {
                    url: '/frontenddevelopment',
                    title: 'GlennPacker.net',
                    controller: 'frontEndController as vm',
                    templateUrl: viewBasePath + 'frontEnd.html'
                })
            .state('backenddevelopment',
                {
                    url: '/backenddevelopment',
                    title: 'GlennPacker.net',
                    controller: 'backEndController as vm',
                    templateUrl: viewBasePath + 'backEnd.html'
                })
            .state('contact',
            {
                url: '/contact',
                title: 'GlennPacker.net',
                controller: 'contactController as vm',
                templateUrl: viewBasePath + 'contact.html'
            });
    }
])