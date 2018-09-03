var app = angular.module('myApp', []);
app.controller('greenCars', function($scope, $http) {
  $http.get('voiture.json')
  .then(function(response) {
    $scope.voiture = response.data;
  });
});
