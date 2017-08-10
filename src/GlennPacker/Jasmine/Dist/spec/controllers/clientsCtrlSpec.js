/// <reference path="~/Scripts/angular.js" />
/// <reference path="~/Scripts/angular-mocks.js" />
/// <reference path="~/Jasmine/Dist/lib/jasmine-2.5.2/jasmine.js"/>
/// <reference path="~/Jasmine/Dist/src/basicapp.js"/>

describe('clientsController', function() {
    var scope, rootscope, controller, cut;
    beforeEach(module('app'));

    beforeEach(inject(function(_$controller_, $rootScope) {

        scope = $rootScope.$new();
        controller = _$controller_;
    }));

    it("Should be defined",
        function() {
            cut = controller('clientsController', {});
            expect(typeof cut).toBe('object');
            expect(typeof cut.hideClients).toBe('function');
        });

    it("Should have correct values on init",
        function() {
            cut = controller('clientsController', {});

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
        });

    it("Should set all pannels to hidden when hide clients is called",
        function() {
            cut = controller('clientsController', {});
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

            cut.hideClients();

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
        }
    );

});