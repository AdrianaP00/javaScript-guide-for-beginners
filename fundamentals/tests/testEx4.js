const assert = require("chai").assert;
const { equal } = require("assert");
const index = require('../solutions/ex4')


describe('Test - ex4', () => {
       
      it('the value of variable exist', () => {
        expect(index.ghoul).to.not.be.an('undefined');
      });

     it('right result of ex1', () => {
       expect(index.console.log()).to.equal("I'm Ken Kaneki I'm 23 years old and I'm a ghoul");
     });

});

