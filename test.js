const arr1 = [['*', 'b', '*'], ['a', '*', '*'], ['*', 'b', 'c']];
const arr2 = [['a', 'a', 'c', 'f'], ['d', 'b', 'f'], ['a', 'b', 'c']];
// results = '*','b','*' matches with 'd','b','f' and '*', 'b', 'c' mathes with 'a', 'b', 'c'
let innerArrayListOne;
let innerArrayListTwo;
let compareThis;
let index;
let toThat;
let doesMatch;
let objectPush;
let finalArr = [];
let previous = null;
let objectValue;
let objectKey;
sameLength(arr1, arr2)

function sameLength(arr1, arr2) {
  for (var x = 0; x < arr1.length; x++) {
    innerArrayListOne = arr1[x]

  for (var y = 0; y < arr2.length; y++) {
    innerArrayListTwo = arr2[y]
    if (innerArrayListOne.length == innerArrayListTwo.length) {
        doesMatch = sameLetters(innerArrayListOne, innerArrayListTwo)

      }
    }
  }
}


function sameLetters(arr1, arr2) {

  // console.log(arr1 + ' and ' + arr2);
  compareThis = arr1.join()
  toThat = arr2.join()
  toThat = toThat.replace(/[^a-zA-Z 0-9]+/g, '');
  compareThis = compareThis.replace(/[^a-zA-Z 0-9]+/g, '');
  // console.log(compareThis,'compareThis', toThat);
  index = toThat.indexOf(compareThis)
  // console.log(index,'index');

  if (index == 1) {
    console.log(arr1, 'and', arr2);
    // [ '*', 'b', '*' ] 'and' [ 'd', 'b', 'f' ]
    // [ '*', 'b', '*' ] 'and' [ 'a', 'b', 'c' ]
    // [ '*', 'b', 'c' ] 'and' [ 'a', 'b', 'c' ]
  final(arr1, arr2)
    }
  }

function final(arr1, arr2) {
  // console.log(arr1, 'and', arr2, count);
  objectPush = {[arr1] : arr2}
  // { '*,b,*': ['d', 'b', 'f' ] }  - objectPush turns into object.
  // { '*,b,*': [ 'a', 'b', 'c' ] } 'objectPush'
  // { '*,b,c': [ 'a', 'b', 'c' ] } 'objectPush'

  //On first run finalArr.length does equal zero.

  if (finalArr.length == 0) {
    finalArr.push(objectPush)
    // [ { '*,b,*': [ 'd', 'b', 'f' ] } ] 'first Step'
  }
  // on first run previous is null
  else if (previous != null) {
    for (var i = 0; i < previous.length; i++) {
      objectKey = Object.values(previous[i])
      // [ [ 'd', 'b', 'f' ] ] 'objectKey'
      objectValue = Object.values(objectPush)
      console.log(objectValue, 'objectValue')
      console.log(objectKey ,'objectKey')

      if (Object.values(finalArr[i]) == Object.values(objectPush)) {
      }
    }
  }
  else {
      previous = objectPush
      console.log(previous, 'previous');

    // { '*,b,*': [ 'a', 'b', 'c' ] } 'previous'
  }


}
// console.log(finalArr, 'finalArr');
