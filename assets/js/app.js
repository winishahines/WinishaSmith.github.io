"use strict";

(function(){
  angular
  .module("portfolio", ["ui.router"])
  .config([
    "$stateProvider",
    routerFunction
  ]);

  function routerFunction($stateProvider){
    $stateProvider
    .state("index", {
      url: "/home",
      templateUrl: "views/home.html"
    })
    .state("about", {
      url: "/about",
      templateUrl: "views/about.html"
    })
    .state("projects", {
      url: "/projects",
      templateUrl: "views/projects.html"
    })
    .state("contact", {
      url: "/contact",
      templateUrl: "views/contact.html"
    });
  }


})();
