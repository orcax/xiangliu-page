var myControllers = angular.module('myControllers', []);

myControllers.controller('NavCtrl', ['$scope', '$location',
  function($scope, $location) {
    $scope.isActive = function (viewLocation) { 
      return viewLocation === $location.path();
    };
  }
]);

myControllers.controller('HomeCtrl', function($scope, $http) {
  $http.get('data/home.json').success(function(data) {
    console.log(data);
    $scope.interests = data;
  });
});

myControllers.controller('PublicationCtrl', ['$scope',
  function($scope) {
  }
]);

myControllers.controller('ResearchCtrl', ['$scope',
  function($scope) {
  }
]);

myControllers.controller('TeachCtrl', ['$scope',
  function($scope) {
  }
]);

myControllers.controller('StudentCtrl', ['$scope',
  function($scope) {
  }
]);

myControllers.controller('MaterialCtrl', ['$scope',
  function($scope) {
  }
]);
