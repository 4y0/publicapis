var app = angular.module('publicapis', []);

function paCtrl($scope){

	$scope.APIS = APIS;

}
paCtrl.$inject = ['$scope'];
app
.controller('paCtrl', paCtrl);