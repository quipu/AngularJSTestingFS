/**
 * Created by Greg Elisara on 21/10/14.
 */

function ExpenseItem(title, description, amount) {
   this.title = title;
   this.description = description;
   this.amount = amount;
}

ExpenseItem.prototype.isReasonable = function () {
   return this.amount <= 100;
};