import Ember from 'ember';
import { fetchData } from '../shared';

// BEGIN-SNIPPET exhibit-b
export default Ember.Component.extend({
  data: null,
  isIdle: true,

  actions: {
    refreshData() {
      this.set('isIdle', false);
      fetchData().then(data => {
        this.set('data', data);
      }).finally(() => {
        this.set('isIdle', true);
      });
    }
  }
});
// END-SNIPPET

