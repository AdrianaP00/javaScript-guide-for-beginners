const assert = require("chai").assert;
const { equal } = require("assert");
const index = require('../solutions/ex2')


describe('Test - ex2', () => {
  
      it('the value of variable exist', () => {
        expect(index.x).to.not.be.an('undefined');
      });
      it('the value of variable exist', () => {
        expect(index.y).to.not.be.an('undefined');
      });      
      it('the value of variable exist', () => {
        expect(index.z).to.not.be.an('undefined');
      });

     it('right result of ex1', () => {
       expect(index.y).to.equal(11);
     });

});

