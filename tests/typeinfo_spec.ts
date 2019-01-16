import { Num, typeInfo } from '../src/typeinfo'

var should = require('should');

describe('typeinfo', () => {

  it('should allow creating a new type', () => {
      const t = typeInfo();
      t.id.length.should.equal(32);
  })

  describe('Num', () => {

    describe('validate', () => {
      it('should return values that successfully validate', () => {
        Num.validate(0).should.equal(0);
        Num.validate(1).should.equal(1);      
      })
  
      it('should throw an error for values that do not validate', () => {
        should(() => Num.validate('1')).throw();
        should(() => Num.validate(true)).throw();
        should(() => Num.validate([1])).throw();
        should(() => Num.validate({})).throw();
        should(() => Num.validate(null)).throw();
        should(() => Num.validate(undefined)).throw();
      })  
    })

    describe('cast', () => {
      it('should allow casting values to numbers', () => {
        Num.cast('1').should.equal(1);
        Num.cast('a').should.eql(NaN);
      })
    })

    describe('match', () => {
      it('should return true for values that match', () => {
        Num.validate(0).should.equal(0);
        Num.validate(1).should.equal(1);
      })

      it('should return false for values that do not', () => {
        Num.match('1').should.equal(false);
        Num.match(true).should.equal(false);
        Num.match([1]).should.equal(false);
        Num.match({}).should.equal(false);
        Num.match(null).should.equal(false);
        Num.match(undefined).should.equal(false);
      })
    })
  })
})