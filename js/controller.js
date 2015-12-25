var myControllers = angular.module('myControllers', []);

myControllers.controller('NavCtrl', ['$scope', '$location',
  function($scope, $location) {
    $scope.isActive = function (viewLocation) { 
      return viewLocation === $location.path();
    };
  }
]);

myControllers.controller('HomeCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('data/interest.json').success(function(data) {
      $scope.interests = data;
    });
  }
]);

myControllers.controller('PublicationCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('data/journal.json').success(function(data) {
      $scope.journals = data;
    });
    $http.get('data/magzine.json').success(function(data) {
      $scope.magzines = data;
    });
    $http.get('data/conference.json').success(function(data) {
      $scope.conferences = data;
    });
  }
]);

myControllers.controller('ResearchCtrl', ['$scope',
  function($scope, $http) {
  }
]);

myControllers.controller('TeachCtrl', ['$scope',
  function($scope, $http) {
  }
]);

myControllers.controller('StudentCtrl', ['$scope',
  function($scope, $http) {
  }
]);

myControllers.controller('MaterialCtrl', ['$scope',
  function($scope, $http) {
  }
]);
