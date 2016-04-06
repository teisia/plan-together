app.service("TripService", function($http){
  var CatService = {};

  TripService.getCats = function(){
    return $http.get("http://localhost:3000/trips", {method: "jsponp"});
    // return $http.get("https://frozen-badlands-34577.herokuapp.com/cats", {method: "jsonp"});
  }

  TripService.getCat = function(cat_id){
    return $http.get("http://localhost:3000/cats/"+cat_id);
    // return $http.get("https://frozen-badlands-34577.herokuapp.com/cats/"+cat_id, {method: "jsonp"});
  }

  TripService.newCat = function(cat_object) {
    return $http.post("http://localhost:3000/cats/", cat_object);
  }

  return CatService;
});
