

;(function(window, document, undefined) {'use strict';
/**
* cccApp Module;
*
* Description
*/
var app = angular.module('cccApp', []);

app.controller('cccCtrl', ['$scope', function($scope){

	// Char to Code
	var inChar = function() {
		if($scope.inputValChar.length > 1){
			return $scope.inputValChar[0];
		} else {
			return $scope.inputValChar;
		}
	}

	$scope.inputValChar = '';

	$scope.charCode = function() {
		var charToConvert = inChar();
		return charToConvert.charCodeAt(0);
	};
	

	// Code to Char
	$scope.inputValCode = '';

	$scope.character = function() {
		var code = $scope.inputValCode;
		return String.fromCharCode(code);
	}



}]);




})(window, document);
