var should = chai.should()
describe('fizzbuzz', function() {
  it('should return Fizz if the input is divisible by 3', function() {
    var result = fizzBuzz(3)
    result.should.be.equal('Fizz')
  })
  it('should return Buzz if the input is divisible by 5', function() {
    var result = fizzBuzz(5)
    result.should.be.equal('Buzz')
  })
  it('should return FizzBuzz if the input is divisible by 5 and 3', function() {
    var result = fizzBuzz(15)
    result.should.be.equal('FizzBuzz')
  })
  it('should return the input if the input is not divisible by 5 and 3', function() {
    var result = fizzBuzz(1)
    result.should.be.equal(1)
  })
})