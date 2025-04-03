angular
  .module("myApp")
  .controller("myController", function ($scope) {
    $scope.message = "Angular is working!";
  })
  .controller("listsController", ($scope, dataService) => {
    // arrow function
    const items = dataService.getItems();
    console.table(items);
    $scope.items = items;
  });
