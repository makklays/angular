(function() {

  'use strict';

  /**
   * angular
   * Description: Angular!
   */
  angular

  /**
   * app
   * Description:
   */
  .module('app', [])
  
  /**
   * AppController
   * Description: Sets up a controller
   */
  /*.controller('AppController', ['$scope', function($scope) {
	$scope.username = 'Nick';
	
	$scope.changeUsername = function(username) {
		$scope.username = username;
    };
	
	$scope.usersArray = [
	  ['BB', 'King'],
	  ['Ray', 'Charles'],
	  ['Muddy', 'Waters'],
	  ['Lightnin', 'Hopkins'],
	  ['Howlin', 'Wolf']
	];
  }]);*/
  
  .controller('ApppController', ['$scope', function($scope) {
	$scope.username = 'Nick';
	
	$scope.changeUsername = function(username) {
		$scope.username = username;
    };
	
	$scope.usersObject = [
	  {
		firstname: 'BB',
		lastname: 'King'
	  },
	  {
		firstname: 'Ray',
		lastname: 'Charles'
	  },
	  {
		firstname: 'Muddy',
		lastname: 'Waters'
	  },
	  {
		firstname: 'Lightnin',
		lastname: 'Hopkins'
	  },
	  {
		firstname: 'Howlin',
		lastname: 'Wolf'
	  }
	];
	
	$scope.randomUserModel = 'random user';
	$scope.randomUserModelAlert = function() {
	  alert($scope.randomUserModel);
	};
	
	$scope.textClass = '';
	$scope.changeTextClass = function(name) {
	  $scope.textClass = name;
	}
  }]);

})();
