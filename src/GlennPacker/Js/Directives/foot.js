var app = angular.module('app.directives');

app.directive('foot', [function() {
    return {
        restrict: 'E',
        replace: true,
        transclude: false,
        templateUrl: '/js/templates/Footer.html',
        scope: {},
        link: function postLink(scope) {}
    };
}])