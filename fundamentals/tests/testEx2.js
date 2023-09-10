const assert = require("chai").assert;
const expect = require("chai").expect;
const { equal } = require("assert");
const { x, y, z } = require("../solutions/ex2");

describe("Test - ex2", () => {
  it("the value of variable x exist", () => {
    expect(x).to.not.be.an("undefined");
  });
  it("the value of variable y exist", () => {
    expect(y).to.not.be.an("undefined");
  });
  it("the value of variable z exist", () => {
    expect(z).to.not.be.an("undefined");
  });

  it("right result of ex1", () => {
    expect(z).to.equal(11);
  });
});
