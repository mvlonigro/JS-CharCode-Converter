

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
		var code = charToConvert.charCodeAt(0);
		if(isNaN(code)) {
			return "";
		} else {
			return code;
		}
	};
	
	// Code to Char
	$scope.inputValCode = '';

	$scope.character = function() {
		var code = $scope.inputValCode;
		return String.fromCharCode(code);
	}

	$scope.copyToClipboard = function() {
		clipboardPrompt($scope.character());
	}

}]);

function clipboardPrompt(text) {
	if(getOS() == "Mac"){
		window.prompt("Copy to clipboard: Cmd+C, Enter", text);
	} else {
		window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
	}
}

function getOS() {
	if(navigator.appVersion.indexOf("Win") != -1) {
		return "Windows";
	} else if(navigator.appVersion.indexOf("Mac") != -1) {
		return "Mac";
	} else if(navigator.appVersion.indexOf("X11") != -1) {
		return "UNIX";
	} else if(navigator.appVersion.indexOf("Linux") != -1) {
		return "Linux";
	} 
}

})(window, document);
