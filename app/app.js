var myToDoApp = angular.module("myToDoApp", ['ui.router', 'ngAnimate']);

myToDoApp.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('home', {
      url: '',
      templateUrl: 'views/items.html',
      controller: 'ToDoController'
    })
    .state('items', {
      url: '/items',
      templateUrl: 'views/items.html',
      controller: 'ToDoController'
    })
    .state('itemdetails', {
      url: '/itemdetails',
      templateUrl: 'views/itemdetails.html',
      controller: 'ToDoController'
    })

}]);

myToDoApp.controller("ToDoController", ["$scope", function($scope) {
  $scope.removeItem = function(items) {
    var removeItem = $scope.todos.indexOf(items);
    $scope.todos.splice(removeItem, 1);

  };
  $scope.additem = function() {
    $scope.todos.push({
      item: $scope.newitem.todoitem,
      assignto: $scope.newitem.assignto,
      date: $scope.newitem.date,
      complete: false,
      description: $scope.newitem.description
    });
    $scope.newitem.todoitem = "",
      $scope.newitem.assignto = "",
      $scope.newitem.date = "",
      $scope.newitem.description = ""
  };
  $scope.removeAll = function() {
    $scope.todos = [];
  };

  $scope.todos = [{
      item: "Pay Wifi Bill",
      assignto: "Raghav",
      date: new Date("07/20/2017"),
      complete: false,
      description: "Pay WiFi bill for June and July month"

    },
    {
      item: "Deposite Cash",
      assignto: "Kapil",
      date: new Date("05/06/2017"),
      complete: false,
      description: "Deposit Cash in A/C: XXXXXXX, bank: BOI, Account-holder:akshay"
    },
    {
      item: "Improve Login Gui",
      assignto: "sameer",
      date: new Date("07/09/2017"),
      complete: false,
      description: "make the login screen responsive"
    },
    {
      item: "book movie ticket",
      assignto: "Aman",
      date: new Date("06/30/2017"),
      complete: false,
      description: "book four movie ticket for evening show"
    }
  ];

}]);
