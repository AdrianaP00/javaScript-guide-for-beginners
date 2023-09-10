const assert = require("chai").assert;
const expect = require("chai").expect;
const { equal } = require("assert");
const character = require('../solutions/ex3')


describe('Test - ex3', () => {
       
      it('the value of variable exist', () => {
        expect(character.age).to.not.be.an('undefined');
      });

     it('right result of ex3', () => {
       expect(character.age).to.equal(14);
     });

});

