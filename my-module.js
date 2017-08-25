'use strict';
var myModule = require('./my-module');
var chai   = require('chai');
var expect = chai.expect;
describe('My Module', function() {
  it('should add 2 to a number', function () {
    expect(myModule(3)).to.be.equal(5);
  });
});