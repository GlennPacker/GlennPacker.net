var services = angular.module("app.services", ['restangular']);
var directives = angular.module("app.directives", []);
var controllers = angular.module("app.controllers", ['slickCarousel']);
var app = angular.module('app', ['ui.router', 'app.controllers', 'app.services', 'app.directives']);

   