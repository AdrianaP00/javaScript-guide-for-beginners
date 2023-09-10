const assert = require("chai").assert;
const expect = require("chai").expect;
const { equal } = require("assert");
const result = require("../solutions/ex5");


describe('Test - ex5', () => {
       
      it('the value of variable exist', () => {
        expect(result).to.not.be.an('undefined');
      })

      it('right result of ex1', () => {
        expect(result).to.equal("I I'm a super javaScript");
      });

});

