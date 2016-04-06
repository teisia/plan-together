app.service("TripService", function($http){
  var TripService = {};

  TripService.getTrips = function(){
    //return $http.get("http://localhost:3000/trips", {method: "jsonp"});
    return $http.get("https://teisia-capstone-api.herokuapp.com/trips", {method: "jsonp"});
  }

  TripService.getTrip = function(trip_id){
  //return $http.get("http://localhost:3000/cats/"+cat_id);
  return $http.get("https://teisia-capstone-api.herokuapp.com/trips/"+trip_id, {method: "jsonp"});
  }

  TripService.newTrip = function(trip_object) {
  return $http.post("https://teisia-capstone-api.herokuapp.com/trips", trip_object);
}


  return TripService;

});
