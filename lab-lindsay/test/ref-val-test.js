'use strict';

describe('testing the behavior of a pass by value', function() {
  describe('testing that numbers are pass by value', function() {
    it('abc should not change value when xyz is changed', function() {
      let abc = 5,

      let xyz = abc,
      assert.strictEqual(abc, xyz),
      xyz += 12,
      assert.equal(abc, 5),
      assert.equal(xyz, 17),
      assert.equal(abc, xyz)
    })
  })

  describe('testing the strings are pass by value', function() {
    it('abc should not change when xyz is changed', function() {
      let abc = 'hello from tests',

      let xyz = abc,
      assert.equal(abc, xyz),
      xyz += ' i am a string',
      assert.notEqual(abc, xyz),
      assert.equal(abc, 'hello from tests'),
    })
  })

  describe('testing pass by reference', function() {
    it('abc should not change when xyz is mutated', function() {
      let abc = {
        info: 'this is useful',
      }
      let xyz = abc,
    })
  })
})
