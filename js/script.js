angular.module("waitstaff", [])
.controller("waitstaffCtrl", function($scope){

	$scope.form = {
		basePrice : '',
		taxRate : '',
		tipPercentage : ''
	}

	var getPerc = function(a, b){
		return a * b / 100;
	}

	var getTotal = function(a, b){
		return a+b;
	}

	$scope.tipTotal = 0;
	$scope.mealCount = 0;
	$scope.avrTip = 0;

	$scope.subtotal = 0;
	$scope.tip = 0;
	$scope.customerTotal = 0;


	$scope.submitMealDetails = function(){
		if( $scope.mealDetails.$valid ) {

			$scope.subtotal = getPerc($scope.mealDetails.taxRate.$modelValue, $scope.mealDetails.basePrice.$modelValue) + $scope.mealDetails.basePrice.$modelValue;
			$scope.tip = getPerc($scope.mealDetails.tipPercentage.$modelValue, $scope.mealDetails.basePrice.$modelValue);

			$scope.customerTotal = getTotal($scope.subtotal, $scope.tip);

			$scope.tipTotal = $scope.tipTotal + $scope.tip;
			$scope.mealCount = $scope.mealCount + 1;
			$scope.avrTip = $scope.tipTotal / $scope.mealCount;

			$scope.form = {};
			$scope.mealDetails.$setPristine();
			$scope.mealDetails.$setUntouched();

		}else{

		}
	}

	$scope.resetData = function(){

			$scope.form = {};
			$scope.mealDetails.$setPristine();
			$scope.mealDetails.$setUntouched();

			$scope.tipTotal = 0;
			$scope.mealCount = 0;
			$scope.avrTip = 0;

			$scope.subtotal = 0;
			$scope.tip = 0;
			$scope.customerTotal = 0;
			
	}
	

});