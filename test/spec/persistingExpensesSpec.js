/**
 * Created by Greg Elisara on 21/10/14.
 */

describe('persisting expenses', function() {

   beforeEach(module('app'));

   describe('call backs', function() {

      it('should call back when persisted', inject(function (expensesDataService) {
         var spyCallBack = jasmine.createSpy('callBackSpy'); // create the callback spy
         expensesDataService.persistExpenses(spyCallBack); // pass the callback spy as the callback
         expect(spyCallBack).toHaveBeenCalled(); // test for it
      }))

   });

   describe('spy on', function() {

      it('should spy on persistExpenses', inject(function (expensesDataService) {
         var spy = spyOn(expensesDataService, 'persistExpenses'); // pass in object, name of method
         expensesDataService.persistExpenses(); // call the object method we're testing
         expect(spy).toHaveBeenCalled(); // check it was called
      }));

      it('should spy on persistExpenses and fake a reply', inject(function (expensesDataService) {
         var spy = spyOn(expensesDataService, 'persistExpenses').and.callFake(function () {
            return 3;
         });
         var numRecordsPersisted = expensesDataService.persistExpenses();
         expect(numRecordsPersisted).toBe(3);
      }))

   });

});