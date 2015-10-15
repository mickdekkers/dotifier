/* global describe it */

var expect = require('chai').expect;
var dotifier = require('./index.js');

describe('dotifier', function () {
  describe('._splitMail()', function () {
    it('should return [\'example\', \'@gmail.com\'] for example@gmail.com', function () {
      var result = dotifier._splitMail('example@gmail.com');
      expect(result).to.be.an.instanceof(Array);
      expect(result).to.have.length(2);
      expect(result[0]).to.equal('example');
      expect(result[1]).to.equal('@gmail.com');
    });
  });
  describe('._getCapacity()', function () {
    it('should return 63 for \'example\'.length', function () {
      expect(dotifier._getCapacity('example'.length)).to.equal(63);
    });
  });
  describe('._binRep()', function () {
    it('should return 001010 when n = 10', function () {
      expect(dotifier._binRep(10, 'example')).to.equal('001010');
    });
  });
  describe('.encode()', function () {
    it('should return example@gmail.com when n = 0', function () {
      expect(dotifier.encode('example@gmail.com', 0)).to.equal('example@gmail.com');
    });
    it('should return exampl.e@gmail.com when n = 1', function () {
      expect(dotifier.encode('example@gmail.com', 1)).to.equal('exampl.e@gmail.com');
    });
    it('should return e.x.a.m.p.l.e@gmail.com when n = 63', function () {
      expect(dotifier.encode('example@gmail.com', 63)).to.equal('e.x.a.m.p.l.e@gmail.com');
    });
    it('should return null when n > capacity', function () {
      expect(dotifier.encode('example@gmail.com', 64)).to.be.null;
    });
    it('should return null when n < 0', function () {
      expect(dotifier.encode('example@gmail.com', -1)).to.be.null;
    });
    it('should return null when email is invalid', function () {
      expect(dotifier.encode('examplegmail.com', 0)).to.be.null;
      expect(dotifier.encode('@l.com', 0)).to.be.null;
      expect(dotifier.encode('e@', 0)).to.be.null;
      expect(dotifier.encode('@', 0)).to.be.null;
    });
    it('should return null when n is not an integer', function () {
      expect(dotifier.encode('example@gmail.com', undefined)).to.be.null;
      expect(dotifier.encode('example@gmail.com', null)).to.be.null;
      expect(dotifier.encode('example@gmail.com', 'Hello, world!')).to.be.null;
      expect(dotifier.encode('example@gmail.com', 1.23456789)).to.be.null;
    });
  });
});