describe("Numbers", () => {
  it("Should use remainder operator '%' ", () => {
    const a = 15;
    const b = 10;

    expect(a%10).toBe(5);
    expect(b%10).toBe(0);
  });

  function average(a,b,c){
    return (a+b+c)/3;
  }

  test("Should get average of 3 numbers", () => {
    expect( average(2, 4, 6)).toBe(4);
    expect( average(-5, 12, -7) ).toBe(0);
  });

  function last(a){
    return a%10;
  }

  test("Should get a last digit of the number", () => {
    expect(last(123) ).toBe(3);
    expect( last(3982) ).toBe(2);
  });

  function sumDigits(num){
    return eval(num.toString().split('').join('+'));
  }

  test("Should sum the digits of a given number", () => {
    expect( sumDigits(123) ).toBe(6);
    expect( sumDigits(53) ).toBe(8);
  });

  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if ( n % i == 0) return false;
    }
    return true;
  }

  test("Should return true if specified number is prime", () => {
    expect( isPrime(7) ).toBe(true);
    expect( isPrime(4) ).toBe(false);

    // TODO: Write additional tests
  });

  function convert(str){
    return +str;
  }

  test("Should convert string to number", () => {
    expect(convert('234') ).toBe(234);
  });

  function max(){
    let max = arguments[0];
    for(let i = 1; i < arguments.length; i++){
      if(arguments[i] > max){
        max = arguments[i];
      }
    }
    return max;
  }

  function max2(){
    return Math.max.apply(null, arguments);
  }

  test("Should find highest value", () => {
    // TODO: Write 2 functions max and max2. Only one of them should use Math

    expect(max(1, 2) ).toBe(2);
    expect( max2(1, 7, 2, 8, 5) ).toBe(8);
  });

  function min(){
    let min = arguments[0];
    for(let i = 1; i < arguments.length; i++){
      if(arguments[i] < min){
        min = arguments[i];
      }
    }
    return min;
  }

  function min2(){
    return Math.min.apply(null, arguments);
  }

  test("Should find lowest value", () => {
    expect( min(2, 3, 9, 4, 1, 5) ).toBe(1);
    expect( min2(2, 3, 9, 4, 1, 5) ).toBe(1);
    // TODO: Write additional tests
  });



  test("Should round up a value to the nearest integer", () => {
    expect(Math.round(1)).toBe(1);
    expect(Math.round(1.8)).toBe(2);
    expect(Math.round(1.2)).toBe(1);
    expect(Math.round(-1.2)).toBe(-1);
  });

  test("Should get the largest integer less than or equal to a given number.  ", () => {
    expect(Math.floor(1)).toBe(1);
    expect(Math.floor(1.2)).toBe(1);
    expect(Math.floor(1.8)).toBe(1);

    // TODO: Write additional tests
  });

  test("Should return the base10 representation of a binary string", function() {
    expect(parseInt('11000000',2)).toBe(192);
  });

  let a = 0o127;
  let b = 0o65;

  test("Should convert an eight-bit string number to a binary string", function() {
    expect(a.toString(2)).toBe("1010111");
    expect(b.toString(2)).toBe("110101");
  });
});
