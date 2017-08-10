var services = angular.module('app.services');

services.factory('ContactService', ['Restangular', (restangular) => {
    var contactService = restangular.all('api/contact');
    return contactService;
}]);