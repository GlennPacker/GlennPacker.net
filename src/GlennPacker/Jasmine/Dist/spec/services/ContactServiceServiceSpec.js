/// <reference path="~/Scripts/angular.js" />
/// <reference path="~/Scripts/angular-mocks.js" />
/// <reference path="~/Jasmine/Dist/lib/jasmine-2.5.2/jasmine.js"/>
/// <reference path="~/Jasmine/Dist/src/basicapp.js"/>

describe('contactService', function () {
    var restangular, contactService, httpBackend;
    beforeEach(module('app.services'));

    beforeEach(inject(function (_Restangular_, _ContactService_, _$httpBackend_) {
        httpBackend = _$httpBackend_;
        restangular = _Restangular_;
        contactService = _ContactService_;       
    }));
    
    it("Should have all been defined", function () {
        expect(typeof contactService).toBe('object');
    });

    it("Should call the correct url", function () {
        spyOn(restangular, 'all').and.callThrough();

        var apiResult = [{ "name": "a" }, { "name": "b" }];
        httpBackend.expectGET('/api/contact').respond(apiResult);

        var data;
        contactService.getList().then(function (result) {
            data = result;
        });

        httpBackend.flush();

        expect(data[0].name).toEqual(apiResult[0].name);
    });
});






