var mi_aplicacion = angular.module('paisesApp', []);


mi_aplicacion.controller('PaisesCtrl', function($scope, $http) {
	$scope.paises = [];
	$scope.region = "";
	$scope.regiones = ["africa", "asia", "europe", "americas"];
	
	$scope.consultarPaisesRegion = function() {
		$http({method: 'GET', url: 'http://restcountries.eu/rest/v1/region/'+ $scope.region}).
          success(function(data) {
            $scope.paises = data;
          }).
          error(function(data, status, header, config) {
            alert(angular.toJson(data));
			$scope.paises = [];
          }); 
	};
});