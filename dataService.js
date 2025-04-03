angular.module("myApp").service("dataService", function () {
  this.getItems = function () {
    return [
      { id: 1, name: "Retrieved Item 1", price: 10 },
      { id: 2, name: "Retrieved Item 2", price: 20 },
      { id: 3, name: "Retrieved Item 3", price: 30 },
    ];
  };
});
