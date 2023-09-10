const assert = require("chai").assert;
const expect = require("chai").expect;
const { equal } = require("assert");
const {ghoul , str} = require('../solutions/ex4')


describe('Test - ex4', () => {
       
      it('the value of variable exist', () => {
        expect(ghoul).to.not.be.an('undefined');
      })

     it('right result of ex1', () => {
       expect(str).to.equal("I'm Ken Kaneki I'm 23 years old and I'm a ghoul");
     });

});

