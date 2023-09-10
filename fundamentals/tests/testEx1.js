const assert = require("chai").assert;
const expect = require("chai").expect;
const { equal } = require("assert");
const anime = require('../solutions/ex1')

describe('Test - ex1', () => {
  it('the value of variable exist', () => {
    expect(anime).to.not.be.an('undefined');
  });

  it('right result of ex1', () => {
    expect(anime).to.equal(50);
  });
});

