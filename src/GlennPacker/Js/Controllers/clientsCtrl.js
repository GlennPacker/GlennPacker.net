var controllers = angular.module('app.controllers');

controllers.controller('clientsController', [
    function() {
        var vm = this;

        vm.hideClients = function () {
            vm.showC1 = false;
            vm.showC2 = false;
            vm.showC3 = false;
            vm.showC4 = false;
            vm.showC5 = false;
            vm.showC6 = false;
            vm.showC7 = false;
            vm.showC8 = false;
            vm.showC9 = false;
            vm.showC10 = false;
            vm.showC11 = false;
            vm.showC12 = false;
        }
        vm.hideClients();
    }
]);