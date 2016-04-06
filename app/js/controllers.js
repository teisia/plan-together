app.controller('MainController', ['$scope', '$http', '$routeParams', 'TripService', function($scope, $http, $routeParams, TripService){

     $scope.togglePostForm = function () {
       $scope.showme = !$scope.showme;
     };

     TripService.getTrips().then(function(payload){
      $scope.trip_collection = payload.data;
    }, function(error){
      console.log("an error occurred");
    });

  /*  $scope.trip = {};
    $scope.postTrip = function() {
      TripService.newTrip($scope.trip).then(function(new) {
      })
    }*/

}])

app.controller('TripShowController', function($scope, $http, $routeParams, TripService) {
  the_id = $routeParams.id;
  console.log("my params are "+the_id);
  TripService.getTrip(the_id).then(function(payload){
    $scope.singleTrip = payload.data;
  }, function(error){
    console.log("an error occurred");
  });
})


app.controller('LoginCtrl', function($scope, $auth) {
  $scope.authenticate = function(provider) {
  $auth.authenticate(provider);
  };
});
