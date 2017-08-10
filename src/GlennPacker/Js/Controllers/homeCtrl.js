var controllers = angular.module('app.controllers');

controllers.config(['slickCarouselConfig', function(slickCarouselConfig) {
    slickCarouselConfig.dots = true;
    slickCarouselConfig.autoplay = false;
}
]);

controllers.controller('homeController', ['$timeout', function($timeout) {
    var vm = this;

    vm.slickCurrentIndex = 0;
    vm.slickConfig = {
        dots: false,
        autoplay: true,
        initialSlide: 0,
        infinite: true,
        autoplaySpeed: 5000,
        method: {}
    };

    vm.hideTimelinePanels = function() {
        vm.show91 = false;
        vm.show95 = false;
        vm.show98 = false;
        vm.show99 = false;
        vm.show00 = false;
        vm.show03 = false;
        vm.show05 = false;
    }
    vm.hideTimelinePanels();

    vm.hideClientPanels = function() {
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
        vm.showC13 = false;
        vm.showC14 = false;
        vm.showC15 = false;
    }
    vm.hideClientPanels();
}]);