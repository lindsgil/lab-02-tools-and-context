'use strict';

const assert = require('assert');
const app = require('../lib/app.js');

describe('app.js', function() {
  describe('UltraEater', function() {
    it('should return scarfing if scarfing is assigned to action', function() {
      assert.equal(new app.UltraEater('scarfing', 'pizza').action, 'scarfing');
    });
    it('should return boolean type of for parameter isFull', function() {
      assert.equal(typeof new app.UltraEater().isFull, 'boolean');
    });
  });
  describe('SlowEater', function() {
    it('should return spaghetti and burger if spaghetti and burger are assigned to food', function() {
      assert.equal(new app.SlowEater('scarfing', ['spaghetti, burger']).food, 'spaghetti, burger');
    });
    it('should return boolean for the type of parameter stillEating', function() {
      assert.equal(typeof new app.SlowEater().stillEating, 'boolean');
    });
  });
});
