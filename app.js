// Code goes here

var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope){
	console.log("My controller.....");
		
		
		$scope.products = [
			{name: "product one", price: "$22.5"},
			{name: "product Two", price: "$15.00"},
			{name: "product three", price: "$123.82"},
			{name: "product Four", price: "$123.82"}

		];

	$scope.addproduct = function(){
		$scope.products.push($scope.newproduct);
		$scope.newproduct = {};
		$scope.message = "New product Added successfully";
	};
	
	$scope.selectproduct = function(product){
		console.log(product);
		$scope.clickedproduct = product;
	};

	$scope.editproduct = function(){
		$scope.message = "product Edited successfully";
	};

	$scope.deleteproduct = function(){
		let i = $scope.products.indexOf($scope.clickedproduct);
		$scope.products=$scope.products.filter((item,index)=> index!=i)
		$scope.message = "product Deleted successfully";
	};

	$scope.clearMessage = function(){
		$scope.message = "";
	};

});