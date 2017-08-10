/// <reference path="~/Scripts/angular.js" />
/// <reference path="~/Scripts/angular-mocks.js" />
/// <reference path="~/Jasmine/Dist/lib/jasmine-2.5.2/jasmine.js"/>
/// <reference path="~/Jasmine/Dist/src/basicapp.js"/>

describe('homeController', function () {
    var scope, rootscope, timeout, controller, cut;
    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_, $rootScope, _$timeout_) {
        
        scope = $rootScope.$new();
        timeout = _$timeout_;
        controller = _$controller_;
    }));

    it("Should be defined", function () {
        cut = controller('homeController', { $timeout: timeout });
        expect(typeof cut).toBe('object');
        expect(typeof cut.slickCurrentIndex).toBe('number');
        expect(typeof cut.slickConfig).toBe('object');
        expect(typeof cut.hideTimelinePanels).toBe('function');
        expect(typeof cut.hideClientPanels).toBe('function');
    });

    it("Should have correct values on init", function () {
        cut = controller('homeController', { $timeout: timeout });

        expect(cut.slickCurrentIndex).toBe(0);
        expect(cut.slickConfig.dots).toBe(false);
        expect(cut.slickConfig.autoplay).toBe(true);
        expect(cut.slickConfig.initialSlide).toBe(0);
        expect(cut.slickConfig.infinite).toBe(true);
        expect(cut.slickConfig.autoplaySpeed).toBe(5000);

        expect(cut.show91).toBe(false);
        expect(cut.show95).toBe(false);
        expect(cut.show98).toBe(false);
        expect(cut.show99).toBe(false);
        expect(cut.show00).toBe(false);
        expect(cut.show03).toBe(false);
        expect(cut.show05).toBe(false);


        expect(cut.showC1).toBe(false);
        expect(cut.showC2).toBe(false);
        expect(cut.showC3).toBe(false);
        expect(cut.showC4).toBe(false);
        expect(cut.showC5).toBe(false);
        expect(cut.showC6).toBe(false);
        expect(cut.showC7).toBe(false);
        expect(cut.showC8).toBe(false);
        expect(cut.showC9).toBe(false);
        expect(cut.showC10).toBe(false);
        expect(cut.showC11).toBe(false);
        expect(cut.showC12).toBe(false);
        expect(cut.showC13).toBe(false);
        expect(cut.showC14).toBe(false);
        expect(cut.showC15).toBe(false);
    });


    it("Should set all client pannels to hidden when hide is called",
        function() {
            cut = controller('homeController', {});
            cut.showC1 = true;
            cut.showC2 = true;
            cut.showC3 = true;
            cut.showC4 = true;
            cut.showC5 = true;
            cut.showC6 = true;
            cut.showC7 = true;
            cut.showC8 = true;
            cut.showC9 = true;
            cut.showC10 = true;
            cut.showC11 = true;
            cut.showC12 = true;
            cut.showC13 = true;
            cut.showC14 = true;
            cut.showC15 = true;

            cut.hideClientPanels();

            expect(cut.showC1).toBe(false);
            expect(cut.showC2).toBe(false);
            expect(cut.showC3).toBe(false);
            expect(cut.showC4).toBe(false);
            expect(cut.showC5).toBe(false);
            expect(cut.showC6).toBe(false);
            expect(cut.showC7).toBe(false);
            expect(cut.showC8).toBe(false);
            expect(cut.showC9).toBe(false);
            expect(cut.showC10).toBe(false);
            expect(cut.showC11).toBe(false);
            expect(cut.showC12).toBe(false);
            expect(cut.showC13).toBe(false);
            expect(cut.showC14).toBe(false);
            expect(cut.showC15).toBe(false);
        });

    it("Should set all timeline pannels to hidden when hide is called",
        function () {
            cut = controller('homeController', {});
            cut.show91 = true;
            cut.show95 = true;
            cut.show98 = true;
            cut.show99 = true;
            cut.show00 = true;
            cut.show03 = true;
            cut.show05 = true;

            cut.hideTimelinePanels();

            expect(cut.show91).toBe(false);
            expect(cut.show95).toBe(false);
            expect(cut.show98).toBe(false);
            expect(cut.show99).toBe(false);
            expect(cut.show00).toBe(false);
            expect(cut.show03).toBe(false);
            expect(cut.show05).toBe(false);
        });
});