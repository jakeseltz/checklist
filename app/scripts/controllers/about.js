'use strict';

/**
 * @ngdoc function
 * @name prodCheckApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the prodCheckApp
 */
angular.module('prodCheckApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
