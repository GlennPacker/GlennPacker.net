/// <reference path="~/Scripts/angular.js" />
/// <reference path="~/Scripts/angular-mocks.js" />
/// <reference path="~/Jasmine/Dist/lib/jasmine-2.5.2/jasmine.js"/>
/// <reference path="~/Jasmine/Dist/src/basicapp.js"/>

describe('contactController', function () {
    var scope, rootscope, contact, controller, cut, httpBackend, restangular;
    beforeEach(module('app.services'));
    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_, $rootScope, _ContactService_, _$httpBackend_, _Restangular_) {
        httpBackend = _$httpBackend_;
        scope = $rootScope.$new();
        contact = _ContactService_;
        controller = _$controller_;
    }));

    it("Should be defined", function () {
        cut = controller('contactController', { ContactService: contact });
        expect(typeof cut).toBe('object');
        expect(typeof cut.contact).toBe('object');
        expect(typeof cut.send).toBe('function');
    });

    it("Should call backend on send", function () {
        cut = controller('contactController', { ContactService: contact });
        spyOn(contact, 'post').and.callThrough();
        var apiResult = [{ "name": "a" }, { "name": "b" }];
        httpBackend.expectPOST('/api/contact').respond(apiResult);

        cut.send();

        httpBackend.flush();
        expect(typeof cut.data).toBe('object');
        expect(cut.data[0].name).toEqual(apiResult[0].name);
    });

});