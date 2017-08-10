var app = angular.module('app.directives');

app.directive('collapsiblePanel', [function() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: '/js/templates/CollapsiblePanel.html',

        scope: {
            hideall: '&',
            show: '='
        },
        link: function postLink(scope) {

            scope.msg = 'foo';

            scope.togglePanel = function() {
                var show = scope.show;
                scope.hideall();
                scope.show = !show;
            }
        }
    };
}])