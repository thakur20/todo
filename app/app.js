var myToDoApp = angular.module("myToDoApp", ['ui.router', 'ngAnimate']);

myToDoApp.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('home', {
      url: '',
      templateUrl: 'views/items.html',
      controller: 'ToDoController',
      controllerAs: 'todo'
    })
    .state('items', {
      url: '/items',
      templateUrl: 'views/items.html',
      controller: 'ToDoController',
      controllerAs: 'todo'
    })
    .state('itemdetails', {
      url: '/itemdetails',
      templateUrl: 'views/itemdetails.html',
      controller: 'ToDoController',
      controllerAs: 'todo'
    })  

}]);
