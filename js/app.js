var scutechApp = angular.module('jsonApp', [
    'ngRoute',
    'controllers'
]);

scutechApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/products', {
                templateUrl: 'views/list.html',
                controller: 'ListCtrl'
            }).
            when('/products/:productId', {
                templateUrl: 'views/detail.html',
                controller: 'DetailCtrl'
            }).
            otherwise({
                redirectTo: '/products'
            });
    }]);