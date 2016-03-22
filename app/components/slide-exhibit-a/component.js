import Ember from 'ember';
import { fetchData } from '../shared';

// BEGIN-SNIPPET exhibit-a
export default Ember.Component.extend({
  data: null,

  actions: {
    refreshData() {
      fetchData().then(data => {
        this.set('data', data);
      });
    }
  }
});
// END-SNIPPET

