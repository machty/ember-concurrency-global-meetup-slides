import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

// BEGIN-SNIPPET task-4-iter-component
export default Ember.Component.extend({
  header: "Loops? No Problem",
  words: ['One', 'Two', 'Three'],

  myTask: task(function * () {
    for (let word of this.get('words')) {
      this.set('header', word);
      yield timeout(1000);
    }
  })
});
// END-SNIPPET

