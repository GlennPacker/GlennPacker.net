var app = angular.module('app.directives');

app.directive('navigation', [function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: '/js/templates/nav.html',
        scope: {},
        link: function postLink(scope) {
            scope.itemSelected = function () {
                $('.cd-header').removeClass('nav-is-visible');
                $('.cd-3d-nav-container').removeClass('nav-is-visible');
                $('main').removeClass('nav-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {});
            }
        }
    };
}])