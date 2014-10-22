/**
 * Created by Greg Elisara on 21/10/14.
 */

describe('expensesDataService', function() {

   beforeEach(module('app'));

   it('should return three expense items', inject(function (expensesDataService) {
      expect(expensesDataService.getExpenses().length).toBe(3);
   }));

   it('should return a taxi expense', inject(function (expensesDataService) {
      var expenseItems = expensesDataService.getExpenses();
      var textExpenseItem = new ExpenseItem('Taxi', 'To airport', 89.95);
      expect(expenseItems).toContain(textExpenseItem);
   }));

   describe('reasonable expenses', function() {

      var taxi, dinner;

      beforeEach(function () {
         jasmine.addMatchers(customMatchers);
      });

      taxi = new ExpenseItem('Taxi', 'To airport', 89.95);
      dinner = new ExpenseItem('Dinner', 'Dinner with John and Ward', 189.50);

      it('should be a reasonable expense', function() {
          expect(taxi).toBeAReasonableExpense();
      });

      it('should not be a reasonable expense', function() {
          expect(dinner).not.toBeAReasonableExpense();
      });
   });

});