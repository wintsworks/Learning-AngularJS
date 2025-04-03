angular.module("myApp", ["ngRoute"]).config(function ($routeProvider) {
  $routeProvider.when("/", {
    templateUrl: "index.html",
    controller: "myController",
  });
});
