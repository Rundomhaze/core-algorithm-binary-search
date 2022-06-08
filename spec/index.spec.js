const { binarySearchRecur } = require('../index')


describe("binarySearchRecur()", function () {

  it("возвращает -1 если массив пустой или если элемента нет в массиве", function () {
    let target = 7;
    let arr = []
    let target2 = 8;
    let arr2 = [1, 2, 3, 4, 5, 6]
    expect(binarySearchRecur(arr, target)).toEqual(-1);
    expect(binarySearchRecur(arr2, target2)).toEqual(-1);
  });

  it("возвращает 0 если массив состоит из одного элемента", function () {
    let target = 77;
    let arr = [77]
    expect(binarySearchRecur(arr, target)).toEqual(0);
  });

  it("возвращает индекс найденного элемента в массиве чисел, если оно в нем есть", function () {
    let target = 15;
    let target2 = 8;
    let target3 = 1;
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    expect(binarySearchRecur(arr, target)).toEqual(14);
    expect(binarySearchRecur(arr, target2)).toEqual(7);
    expect(binarySearchRecur(arr, target3)).toEqual(0);
  });
  
  it("возвращает индекс найденного элемента в массиве букв, если он в нем есть", function () {
    let target = 'I';
    let target2 = 'D';
    let target3 = 'A';
    let arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
    expect(binarySearchRecur(arr, target)).toEqual(8);
    expect(binarySearchRecur(arr, target2)).toEqual(3);
    expect(binarySearchRecur(arr, target3)).toEqual(0);
  });
});




