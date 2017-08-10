var controllers = angular.module('app.controllers');

controllers.config(['slickCarouselConfig', function (slickCarouselConfig) {
    slickCarouselConfig.dots = true;
    slickCarouselConfig.autoplay = false;
}]);

controllers.controller('frontEndController', ['$timeout', function($timeout) {
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
    }
]);