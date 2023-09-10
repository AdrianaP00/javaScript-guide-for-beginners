const assert = require("chai").assert;
const { equal } = require("assert");
const index = require('../solutions/ex3')


describe('Test - ex3', () => {
       
      it('the value of variable exist', () => {
        expect(index.character.age).to.not.be.an('undefined');
      });

     it('right result of ex1', () => {
       expect(index.character.age).to.equal(14);
     });

});

