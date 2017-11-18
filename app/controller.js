var con2 = angular.module("con2", []);
con2.controller('newCtrl2', function($scope) {
  $scope.people = [
    {name: 'John', age: '21', skill: 'angularjs'},
    {name: 'Mark', age: '24', skill: 'Bootstrap'},
    {name: 'Joe', age: '32', skill: 'PHP'},
    {name: 'Garry', age: '35', skill: 'HTML5'},
    {name: 'Jackson', age: '20', skill: 'JavaScript'}
  ];
});
