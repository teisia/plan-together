app.service("TripService", function($http){
  var TripService = {};

  TripService.getTrips = function(){
    //return $http.get("http://localhost:3000/trips", {method: "jsonp"});
    return $http.get("https://teisia-capstone-api.herokuapp.com/trips", {method: "jsonp"});
  }
  return TripService;
});
