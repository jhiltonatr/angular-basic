var mi_aplicacion = angular.module('dojoApp', []);


mi_aplicacion.controller('PersonasCtrl', function($scope) {
	$scope.personas = [{nombre : 'Jairo', ciudad: 'Soacha', fecha_nacimiento: new Date()},
									{nombre : 'Enner', ciudad: 'Yolombo', fecha_nacimiento: new Date()},
									{nombre : 'Juan Camilo', ciudad: 'Medallo papa!!', fecha_nacimiento: new Date()},
									{nombre : 'Carolina', ciudad: 'Cisneros', fecha_nacimiento: new Date()},
									{nombre : 'Jhilton', ciudad: 'Jerico', fecha_nacimiento: new Date()}];
});