/* js/app.js */

angular.module('app', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home', {templateUrl: 'partials/home.html'})
            .when('/view1', {templateUrl: 'partials/view1.html', controller: 'app.view1'})
            .when('/view2', {templateUrl: 'partials/view2.html', controller: 'app.view2'})
            .otherwise({redirectTo: '/home'});
    }]);
