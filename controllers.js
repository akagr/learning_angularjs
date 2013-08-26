var appModule = angular.module("myApp", []);
appModule.controller("StartUpController", function($scope) {
  $scope.funding = {startingEstimates: 0};
  $scope.computeNeeded = function() {
    $scope.funding.needed = $scope.funding.startingEstimate * 10;
  };

  $scope.$watch('funding.startingEstimate', "computeNeeded()");

  $scope.requestFunding = function() {
    alert("Sorry, please get more customers first.");
  };

  $scope.reset = function() {
    $scope.funding.startingEstimate = 0;
  };
});

var students = [{name:'Mary Contrary', id:'1'},
                {name:'Jack Sprat', id:'2'},
                {name:'Jill Hill', id:'3'}];
appModule.controller("StudentsController", function($scope) {
    $scope.students = students;
});

var album = [{name:'Southwest Serenade', duration: '2:34'},
             {name:'Northern Light Waltz', duration: '3:21'},
             {name:'Eastern Tango', duration: '17:45'}];
appModule.controller("AlbumController", function($scope) {
  $scope.album = album;
});

appModule.controller("DeathrayMenuController", function($scope) {
  $scope.menuState = false;
  $scope.toggleMenu = function() {
    $scope.menuState = !$scope.menuState;
  };
});
appModule.controller("CartController", function($scope) {
  $scope.bill = {};
  $scope.items = [
    {title: 'Paint pots', quantity: 8, price: 3.95},
    {title: 'Polka dots', quantity: 17, price: 12.95},
    {title: 'Pebbles', quantity: 5, price: 6.95}
  ];
  $scope.totalCart = function() {
    var total = 0;
      for (var i = 0, len = $scope.items.length; i < len; i++) {
        total = total + $scope.items[i].price * $scope.items[i].quantity;
      }
    return total;
  }
  $scope.subtotal = function() {
      return $scope.totalCart() - $scope.bill.discount;
  };
  function calculateDiscount(newValue, oldValue, scope) {
      $scope.bill.discount = newValue > 100 ? 10 : 0;
    }
  $scope.$watch($scope.totalCart, calculateDiscount);
});