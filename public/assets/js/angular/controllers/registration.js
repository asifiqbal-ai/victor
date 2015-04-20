//ContactController.js
'use strict'

angular.module('victorApp.controllers', [])
    .controller('registerController', ['$scope', 'registerFactory',
        function ($scope, registerFactory) {
            $scope.registerForm = {};
            $scope.registerForm.parent = {};
            $scope.registerForm.player = {};
            $scope.registerForm.alternate = {};
            $scope.registerForm.player.birthDay = {};

            $scope.playerGenders = [
                {'id': 'gender', 'name': 'Gender'}, {
                    'id': 'male',
                    'name': 'Male'
                }, {'id': 'female', 'name': 'Female'},
                {'id': 'other', 'name': 'Other'}];
            $scope.birthMonths = [
                {'id': 'january', 'name': 'January'},
                {'id': 'february', 'name': 'February'},
                {'id': 'march', 'name': 'March'},
                {'id': 'april', 'name': 'January'},
                {'id': 'may', 'name': 'May'},
                {'id': 'june', 'name': 'June'},
                {'id': 'july', 'name': 'July'},
                {'id': 'august', 'name': 'August'},
                {'id': 'september', 'name': 'September'},
                {'id': 'october', 'name': 'October'},
                {'id': 'november', 'name': 'November'},
                {'id': 'december', 'name': 'December'}
            ];
            $scope.selectedMonth = $scope.birthMonths[0];
            $scope.selectedGender = $scope.playerGenders[0];
            //$scope.registerForm.playerGender = $scope.playerGenders[0];

            $scope.processForm = function () {
                $scope.registerForm.player.birthDay.month = $scope.selectedMonth;
                $scope.registerForm.gender = $scope.selectedGender;
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