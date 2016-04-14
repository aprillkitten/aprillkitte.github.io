var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope){
  $scope.names = [
    {
      name:'Jani',
      country:'Norway'
    },
    {
      name:'Carl',
      country:'Sweden'
    },
    {
      name:'Margareth',
      country:'England'
    }
  ];
});
