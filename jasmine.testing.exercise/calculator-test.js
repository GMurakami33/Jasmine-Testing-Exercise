describe('calculateMonthlyPayment tests', function() {
  it('should calculate the monthly rate correctly', function () {
    const values = {amount:10000, years: 10, rate: 3.5}; 
    expect(calculateMonthlyPayment(values)).toEqual('98.89')
  });
  it("should return a result with 2 decimal places", function() {
    const values = {amount:10064, years: 10, rate: 10};
    expect(calculateMonthlyPayment(values)).toEqual('133.00')
  });
  it("should not calculate correctly without a set intrest rate", function() {
    const values = {amount: 1000, years: 3, rate:0};
    expect(calculateMonthlyPayment(values)).toEqual('NaN');
  }); 
  it("should not calculate correctly without a set yearly term", function() {
    const values = {amount: 1000, years: 0, rate:5};
    expect(calculateMonthlyPayment(values)).toEqual('Infinity');
  });
  it("should return 0 if loan amount is entered as 0 ", function() {
    const values = {amount: 0, years: 5, rate:5};
    expect(calculateMonthlyPayment(values)).toEqual('0.00');
  });
});
