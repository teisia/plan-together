app.controller('MainController', ['$scope', '$http', 'TripService', function($scope, $http, TripService){

     $scope.togglePostForm = function () {
       $scope.showme = !$scope.showme;
     };

     TripService.getTrips().then(function(payload){
      $scope.trip_collection = payload.data;
    }, function(error){
      console.log("an error occurred");
    });

}])

app.controller('LoginCtrl', function($scope, $auth) {
  $scope.authenticate = function(provider) {
  $auth.authenticate(provider);
  };
});
