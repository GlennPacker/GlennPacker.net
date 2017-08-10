/// <reference path="~/Scripts/angular.js" />
/// <reference path="~/Scripts/angular-mocks.js" />
/// <reference path="~/Jasmine/Dist/lib/jasmine-2.5.2/jasmine.js"/>
/// <reference path="~/Jasmine/Dist/src/basicapp.js"/>

describe('backEndController', function () {
    var scope, rootscope, timeout, controller, cut;
    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_, $rootScope, _$timeout_) {
        
        scope = $rootScope.$new();
        timeout = _$timeout_;
        controller = _$controller_;
    }));

    it("Should be defined", function () {
        cut = controller('backEndController', { $timeout: timeout });
        expect(typeof cut).toBe('object');
        expect(typeof cut.slickCurrentIndex).toBe('number');
        expect(typeof cut.slickConfig).toBe('object');
    });

    it("Should have correct values on init", function () {
        cut = controller('backEndController', { $timeout: timeout });

        expect(cut.slickCurrentIndex).toBe(0);
        expect(cut.slickConfig.dots).toBe(false);
        expect(cut.slickConfig.autoplay).toBe(true);
        expect(cut.slickConfig.initialSlide).toBe(0);
        expect(cut.slickConfig.infinite).toBe(true);
        expect(cut.slickConfig.autoplaySpeed).toBe(5000);
    });
});