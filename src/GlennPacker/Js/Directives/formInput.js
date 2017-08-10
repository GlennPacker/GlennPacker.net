var app = angular.module('app.directives');

app.directive('forminput', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        require: "^form",
        scope: {
            hideall: '&',
            show: '='
        },
        link: function postLink(scope, element, attributes, form) {

            const setupDom = function (element) {
                const input = element.querySelector("input, textarea, select, otf-rating");
                const type = input.getAttribute("type");
                const name = input.getAttribute("name");
                if (type !== "checkbox" && type !== "radio") {
                    input.classList.add("form-control");
                }

                const label = element.querySelector("label");
                label.classList.add("control-label");
                element.classList.add("form-group");
                return name;
            };

            const addMessages = function (form, element, name, $compile, scope) {
                const messages = "<div class='help-block' ng-messages='" +
                    form.$name + "." + name + ".$error" + "' ng-messages-include='/js/templates/messages.html'><div>";
                element.append($compile(messages)(scope));
            };

            const watcherFor = function (form, name) {
                return function () {
                    if (name && form[name]) {
                        return form[name].$invalid;
                    }
                };
            };

            const updaterFor = function (element) {
                return function (hasError) {
                    if (hasError) {
                        element.addClass("has-error");
                    }
                    else {
                        element.removeClass("has-error");
                    }

                    //if (hasError) {
                    //    element.removeClass("has-success").addClass("has-error");
                    //}
                    //else {
                    //    element.removeClass("has-error").addClass("has-success");
                    //}
                }
            };
            
            const name = setupDom(element[0]);
            addMessages(form, element, name, $compile, scope);
            scope.$watch(watcherFor(form, name), updaterFor(element));
        }
    };
}])