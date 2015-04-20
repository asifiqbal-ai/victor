//ContactController.js
'use strict'

angular.module('victorApp.controllers', [])
    .controller('registerController', ['$scope', 'registerFactory',
        function ($scope, registerFactory) {
            $scope.registerForm = {};
            $scope.playerGenders = [ 'Male', 'Female', 'Other'];
            //$scope.registerForm.playerGender = $scope.playerGenders[0];

            $scope.processForm = function () {
                console.log($scope.registerForm)
            };
            /*$scope.reqContact = {};
             //$scope.contactForm = {};
             $scope.requestContact = function () {
             if ($scope.contactForm && $scope.contactForm.$valid) {
             contactRequestFactory.requestContact($scope.reqContact).
             success(function (responseData, status, headers, config) {
             console.log("Response Data: " + responseData);
             $scope.reqContact = {}; //reset the data object
             $scope.contactForm.$setPristine(); //reset the form.
             }).error(function (errorData) {
             console.log(errorData);
             $scope.status = 'Failed Request ' + error.message;
             });
             } else {
             $scope.contactForm.submitted = true;
             }
             };*/

        }]);