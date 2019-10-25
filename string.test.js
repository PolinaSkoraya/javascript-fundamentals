describe("Strings", () => {

  function combine1(str1, str2){
    return str1+" "+str2;
  }
  function combine2(str1, str2){
    let str=""
    return str.concat(str1," ",str2)
  }

  it("Should join two strings with a space.", () => {
    expect(combine1("hello", "world")).toBe("hello world");
    expect(combine2("hello", "world")).toBe("hello world");
  });

  function getLength(str){
    return str.length;
  }

  it("Should get string length", () => {
    expect( getLength("") ).toBe(0);
    expect( getLength("word") ).toBe(4);
  });

  function greeting(name){
    return `Hello, ` + `${name}` +`!`;
  }

  it("Should create greeting message from template", () => {
    expect( greeting("Ivan") ).toBe("Hello, Ivan!");
  });

  it("Should strip leading and trailing spaces from a string", () => {
    expect(' aaaa bbb   '.trim()).toBe("aaaa bbb");
  });

  it("Replace all word occurence in the sentences", () => {
    expect('aaa bbb ccc aaa bb'.replace(/aaa/g, 'eeeee') ).toBe(
      "eeeee bbb ccc eeeee bb"
    );
  });

  function validateLength(str,min,max){
    return (str.length < 1 || str.length > 5) ? false : true;
  }

  it("Should validate string length", () => {
    expect( validateLength('abcde', 1, 5)).toBe(true);
    expect( validateLength('a', 1, 5)).toBe(true);
    expect( validateLength('ab', 1, 5)).toBe(true);
    expect( validateLength('', 1, 5)).toBe(false);
    expect( validateLength('abcdef', 1, 5)).toBe(false);
  });

  function compare(str1, str2){
    return str1.toUpperCase()===str2.toUpperCase();
  }

  it("Should do case insensitive strings comparison", () => {
    expect( compare('aBc', 'ABC') ).toBe(true);
    expect( compare('abc', 'abc') ).toBe(true);
  });

  function mytrim(str, maxlength){
    return (str.length > maxlength) ? str.slice(0, maxlength).trim() : str;
  }

  it("Should trim string according symbols limit", () => {
    expect( mytrim('Lorem ipsum dolor sit amet', 7) ).toBe("Lorem i");
    expect( mytrim('Lorem ipsum dolor sit amet', 12) ).toBe("Lorem ipsum");
    expect( mytrim('Lorem ipsum dolor sit amet', 11) ).toBe("Lorem ipsum");
    expect( mytrim('Lorem ipsum dolor sit amet', 100) ).toBe("Lorem ipsum dolor sit amet");
  });
});
