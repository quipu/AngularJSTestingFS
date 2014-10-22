/**
 * Created by Greg Elisara on 21/10/14.
 */

var customMatchers = {
   toBeAReasonableExpense: function () {
      return {
         compare: function (actual) {
            var pass = actual.isReasonable();
            var judgement = pass ? 'unreasonable' : 'reasonable';

            return {
               pass: pass,
               message: 'Expected to be a ' + judgement + ' expense.'
            }
         }
      }
   }
};