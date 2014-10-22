/**
 * Created by gregelisara on 21/10/14.
 */

(function () {
   'use strict';

   angular.module('app')
      .controller('expensesCtrl', ['expensesDataService', expensesCtrl]);

   function expensesCtrl(expensesDataService) {
      var vm = this; // vm - View Model

      vm.activate = activate;
      vm.expenseItems = [];

      activate();

      function activate() {
         return vm.expenseItems = expensesDataService.getExpenses();
      }
   }

})();