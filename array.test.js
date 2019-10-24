describe('Array', () => {
  it('Should find the position of the first occurrence', () => {
    const arr1 = [1, 5, 8, 3, 2];
    expect(arr1.indexOf(5)).toBe(1);
    expect(arr1.indexOf(3)).toBe(3);

    // TODO: Write additional its
  });

  it('Should return the specified array twice', () => {
    expect(double([1, 2, 3])).toStrictEqual([1, 2, 3, 1, 2, 3]);

    function  double(arr) {
      return arr.concat(arr);
    }
  });

  it('Convert the number array to  the array of string values', () => {
    expect(convertToStringArr([1, 2, 3]) ).toStrictEqual(['1', '2', '3']);

    // TODO: Write additional its
    function convertToStringArr(arr) {
      return arr.map(item => item.toString());
    }
  });

  it('Should return the number of all occurrences of specified item in an array', () => {
    expect( calculateOccurences([1, 2, 1, 4, 1], 1)).toBe(3);

    // TODO: Write additional its
    function calculateOccurences(arr, elem) {
      let result = arr.reduce((sum, x) => sum + (x === elem), 0);
      return result;
    }
  });

  it('Should convert strings from specified array to uppercase', () => {
    function toUppercase(arr){
      return String.prototype.toUpperCase.apply(arr).split(',');
    }

    expect(toUppercase(["aaaa", "abc"])).toStrictEqual(['AAAA', 'ABC']);
  });

  it('Insert an item at specified position', () => {
    function insert(arr, num, pos){
      arr.splice(pos, 0, num);
      return arr;
    }

    expect(insert([1, 2, 4], 3, 2)).toStrictEqual([1, 2, 3, 4]);
  });

  it('Should return the n last items from the specified array', () => {
    function last(arr, num){
      return arr.slice(arr.length - num);
    }

    expect(last([1, 2, 3, 4, 5, 6, 7], 3) ).toStrictEqual([5, 6, 7]);
  });

  it('Return the 3 largest items from integer array', () => {
    function find3Largest(arr){
      let newArr = arr.slice();
      let maxs=[];
      let minmax;
      for(let i = 0; i<3; i++){
        maxs[i] = Math.max.apply(null, newArr);
        let index = newArr.indexOf(maxs[i]);
        newArr.splice(index, 1);
      }
      minmax = Math.min.apply(null, maxs);
      return arr.filter(item => item >= minmax);
    }

    expect( find3Largest([1, 3, 8, 3, 29, 11, 2, 17, 9, 1]) ).toStrictEqual(
      [29, 11, 17]
    );
  });

  it('Sort numbers array by using array method', () => {
    function sort(arr){
      return arr.sort((a, b) => {
        if (a > b) return -1;
        if (a == b) return 0;
        if (a < b) return 1;
      });
    }

    expect( sort([2, 3, 1, 8, 4, 5] ) ).toStrictEqual([8, 5, 4, 3, 2, 1]);
  });

  it('Should summarize of all items of numbers array', () => {
    function sum(arr){
      let sum = 0;
      sum = arr.reduce(function (sum, current) {
        return sum + current;
      }, 0);
      return sum;
    }

    expect( sum([1, 5, 7, 9, 3]) ).toBe(25);
  });

  it('Should return the numbers of falsy value in the specified array', () => {
    function getNumberOfFalsy(arr) {
      let result = 0;
      for (let i = 0; i < arr.length; i++) {
        if (Boolean(arr[i]) === false) {
          result++;
        }
      }
      return result;
    }

    expect( getNumberOfFalsy([1, 0, "", null, "hello", "0"]) ).toBe(3);
  });

  it('Should return an array of unique items from the specified array', () => {
    /*function unique(arr){
      let result = [];

      for (let elem of arr) {
        if (!result.includes(elem)) {
          result.push(elem);
        }
      }
      return result;
    }*/

    function unique(arr) {
      return Array.from(new Set(arr));
    }

    expect( unique(["a", "b", "a", "c", "e", "b", "o"]) ).toStrictEqual([
      'a',
      'b',
      'c',
      'e',
      'o'
    ]);
  });

  it('Should return a map of grouped data by key and value selector', function() {
    function group(arr, key){
      let result = [];

    }

    let arr = [
      { country: 'Belarus', city: 'Brest' },
      { country: 'Russia', city: 'Omsk' },
      { country: 'Russia', city: 'Samara' },
      { country: 'Belarus', city: 'Grodno' },
      { country: 'Belarus', city: 'Minsk' },
      { country: 'Poland', city: 'Lodz' }
    ];

    expect( group(arr, 'country') ).toStrictEqual([
      ['Belarus', ['Brest', 'Grodno', 'Minsk']],
      ['Russia', ['Omsk', 'Samara']],
      ['Poland', ['Lodz']]
    ]);
  });

  it('Should creates an array with all falsy values removed.', () => {
    function compact(arr){
      return arr.filter(Boolean);
    }

    expect( compact([1, 0, null, "a"]) ).toStrictEqual([1, 'a']);
  });

  it('Should flattens array a single level deep', () => {
    function flatten(arr){
      return arr.flat(1);
    }

    expect(flatten([1, [2, [3, [4]], 5]]) ).toStrictEqual([
      1,
      2,
      [3, [4]],
      5
    ]);
  });

  it('Should recursively flattens array.', () => {
    function flattenDeep(arr1) {
      return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
    }

    expect( flattenDeep([1, [2, [3, [4]], 5]]) ).toStrictEqual([
      1,
      2,
      3,
      4,
      5
    ]);
  });

  it('Should creates an array of unique values that are included in all given', () => {
    function intersection(arr1, arr2){
      let set2 = new Set(arr2);
      let intersection = new Set([...arr1].filter(x => set2.has(x)));
      return [...intersection];
    }

    expect(intersection([1, 2, 3, 4], [8, 3, 1, 0, 9]) ).toStrictEqual([
      1,
      3
    ]);
  });

  it('Should remove all elements from array that predicate returns truthy for and returns an array of the removed elements. The predicate is invoked with two arguments: (value, index).', () => {
    const arr = [1, 7, 5, 2, 8];
    const gt5 = v => v > 5;
    let removed =[];

    function remove(arr, func){
      let arrIndex = [];
      arr.forEach(function (elem) {
       if(func(elem)) {
         removed.push(elem);
         arrIndex.push(arr.indexOf(elem));
       }
      })
      console.log(arrIndex);
      for(let i=0; i<arrIndex.length; i++){
        arr.splice(arrIndex[i]-i,1);
      }
    }


    remove(arr, gt5);
    expect(arr).toStrictEqual([1, 5, 2]);
    expect(removed).toStrictEqual([7, 8]);
  });
});
