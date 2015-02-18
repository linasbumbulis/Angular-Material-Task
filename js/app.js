(function() {
    //application. Will be using Angular Material and Routing.
    var app = angular.module('myApp', ['ngMaterial','ngRoute','ngTouch']);
    //controller for form and list
    app.controller('AppCtrl', function($scope){

        //Premade array with some information in it for printing list.
        $scope.subjects = [{
            name: 'Linas',
            surname: 'Bumbulis',
            phone: '+370 658 85300',
            email: "linbum@gmail.com"
        },

        {
            name: 'John',
            surname: 'Smith',
            phone: '+370 658 01010',
            email: "smith@gmail.com"
        }];

        //function triggers when "SUBMIT FORM" is clicked
        $scope.addToList = function () {
            // Push input values to array
            $scope.subjects.push({
                name: $scope.itemName,
                surname: $scope.itemSurname,
                phone: $scope.itemPhone,
                email: $scope.itemEmail
            });

            // Clear input fields after push
            $scope.itemName = "";
            $scope.itemSurname = "";
            $scope.itemPhone = "";
            $scope.itemEmail = "";
            };


    });
    //controlling box with selectable tabs
    app.controller('TabsCtrl', function($scope){
        //define next tab.
        $scope.next = function() {
            $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
        };
        //define previous tab.
        $scope.previous = function() {
            $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
        };
    });

    //defining routes.
    app.config(['$routeProvider',
        function($routeProvider) {
            //checking links, giving required data from hardcoded files.
            $routeProvider.
                when('/', {
                    templateUrl: 'route1.html'
                }).
                when('/route1', {
                    templateUrl: 'route1.html'
                }).
                when('/route2', {
                    templateUrl: 'route2.html'
                }).
                when('/route3', {
                    templateUrl: 'route3.html'
                }).
                otherwise({
                    redirectTo: 'route1.html'
                });
        }]);
    app.controller( 'TabsCtrl', function ( $scope ) {

    });

})();