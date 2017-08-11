var controllers = angular.module('app.controllers');

controllers.controller('contactController', ['ContactService',
    function(contactService) {
        var vm = this;
        vm.contact = {};
        vm.sent = false;

        vm.send = function () {
            contactService.post(vm.contact).then(function(result) {
                vm.data = result;
                vm.sent = true;
            });
        }

    }
]);