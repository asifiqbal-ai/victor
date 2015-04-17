'use strict'

//angular.module('victorApp.services', [])
victorApp.factory('registerFactory', ['$http',
    function ($http) {
        var urlBase = '/api/register/';
        var contactRequestFactory = {};

        contactRequestFactory.getContactRequests = function () {
            return $http.get(urlBase);
        };

        contactRequestFactory.getContactRequest = function (id) {
            return $http.get(urlBase + '/' + id);
        };

        contactRequestFactory.requestContact = function (request) {
            return $http.post(urlBase, request);
        };

        contactRequestFactory.updateRequest = function (request) {
            return $http.put(urlBase + '/' + request.id, request)
        };

        contactRequestFactory.deleteRequest = function (id) {
            return $http.delete(urlBase + '/' + id);
        };

        return contactRequestFactory;
    }]);