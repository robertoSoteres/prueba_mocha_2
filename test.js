'use strict';
var myModule = require('./my-module');
var assert   = require('assert');
describe('My Module', function() {
  it('should add 2 to a number', function () {
    assert.equal(5, myModule(3));
  });
});