var con2 = angular.module("con2", []);
con2.controller('newCtrl2', function($scope) {
  $scope.people = [
    {name: 'John', age: '21', skill: 'angularjs', salary: 5000},
    {name: 'Mark', age: '24', skill: 'Bootstrap', salary: 10000},
    {name: 'Joe', age: '32', skill: 'PHP', salary: 8000},
    {name: 'Garry', age: '35', skill: 'HTML5', salary: 6000},
    {name: 'Jackson', age: '20', skill: 'JavaScript', salary: 4000}
  ];
});
