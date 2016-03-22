import Ember from 'ember';
import { fetchData } from '../shared';

// BEGIN-SNIPPET exhibit-c
export default Ember.Component.extend({
  data: null,
  isIdle: true,

  actions: {
    refreshData() {
      if (!this.isIdle) { return; }
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

