const assert = require("chai").assert;
const expect = require("chai").expect;
const { equal } = require("assert");
const sum = require("../solutions/ex6");


describe('Test - ex6', () => {
       
      it('the value of variable exist', () => {
        expect(sum).to.not.be.an('undefined');
      })

      it('right result of ex6', () => {
        expect(sum).to.equal(48);
      });

});

