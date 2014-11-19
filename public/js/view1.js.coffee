# global angular
# js/view1.js.coffee
app = angular.module('app')
app.controller 'app.view1', ['$scope', ($scope) ->
  $scope.greetings = 'hello,view1'
]