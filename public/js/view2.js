/* global angular */
/* js/view2 */
var app = angular.module('app')
app.controller('app.view2', ['$scope', function ($scope) {
    $scope.greetings = 'hello,view2';
}]);