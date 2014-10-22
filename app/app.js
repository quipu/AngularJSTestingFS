/**
 * Created by Greg Elisara on 21/10/14.
 */

(function () {
   'use strict';

   var app = angular.module('app', ['ngRoute']);

   app.config(['$routeProvider', function ($routeProvider) {
      $routeProvider
         .when('/', {
            templateUrl: 'app/Expense/expense.html'
         })
         .when('/admin', {
            templateUrl: 'app/Admin/admin.html'
         })
         .otherwise({ redirectTo: '/' })
   }])

})();
