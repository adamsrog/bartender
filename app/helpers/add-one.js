import Ember from 'ember';

export function addOne(number/*, hash*/) {
  return number[0]+1;
}

export default Ember.Helper.helper(addOne);
