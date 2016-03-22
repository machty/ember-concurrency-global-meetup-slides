import Ember from 'ember';
import { fetchData } from '../shared';
import { task } from 'ember-concurrency';

// BEGIN-SNIPPET exhibit-e
export default Ember.Component.extend({
  data: null,

  refreshData: task(function * () {
    let data = yield fetchData();
    this.set('data', data);
  }).drop(),
});
// END-SNIPPET

