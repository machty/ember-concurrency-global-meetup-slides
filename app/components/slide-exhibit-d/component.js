import Ember from 'ember';
import { fetchData } from '../shared';

// BEGIN-SNIPPET exhibit-d
export default Ember.Component.extend({
  data: null,
  isIdle: true,

  actions: {
    refreshData() {
      if (!this.isIdle) { return; }
      this.set('isIdle', false);

      fetchData().then(data => {
        if (this.isDestroyed) { return; }
        this.set('data', data);
      }).finally(() => {
        if (this.isDestroyed) { return; }
        this.set('isIdle', true);
      });
    }
  }
});
// END-SNIPPET

