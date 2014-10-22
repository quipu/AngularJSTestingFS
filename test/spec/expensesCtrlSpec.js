/**
 * Created by Greg Elisara on 21/10/14.
 */

describe('expensesCtrl', function() {

   // Set up our controller
   var $controllerConstructor;
   var scope;

   beforeEach(module('app')); // Get access to the module with our controller

   beforeEach(inject(function ($controller, $rootScope) {
      $controllerConstructor = $controller; // the controller
      scope = $rootScope.$new(); // a scope to work on
   }));

   it('it should have three expense items', function() {
      // Get access to controller, passing in it's scope, our local scope
      var ctrl = $controllerConstructor('expensesCtrl', { $scope: scope });
      expect(ctrl.expenseItems.length).toBe(3);
   });
});