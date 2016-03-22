import Ember from 'ember';

export function fetchData() {
  return new Ember.RSVP.Promise(r => {
    Ember.run.later(r, {
      value: Math.random()
    }, 1500);
  });
}

