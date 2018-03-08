let arr1 = [['*','b','*'], ['a', '*', '*'], ['*', 'b', 'c']]
let arr2 = [['a','a','c', 'f'], ['d','b','f'], ['a', 'b', 'c']]
//results = '*','b','*' matches with 'd','b','f' and '*', 'b', 'c' mathes with 'a', 'b', 'c'
let innerArrayListOne;
let innerArrayListTwo;
let compareThis;
let index;
let toThat;
let doesMatch;
let currentArr;
let objectReturnToSame = {};
let returnToSame = []
let count = 0

// let match = []
// let newx;
// let newy;
// let count = 0

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
  // console.log(doesMatch);
}

// [ '*', 'b', '*' ] 'and' [ 'd', 'b', 'f' ]
// [ '*', 'b', '*' ] 'and' [ 'a', 'b', 'c' ]
// [ 'a', '*', '*' ] 'and' [ 'd', 'b', 'f' ]
// [ 'a', '*', '*' ] 'and' [ 'a', 'b', 'c' ]
// [ '*', 'b', 'c' ] 'and' [ 'd', 'b', 'f' ]
// [ '*', 'b', 'c' ] 'and' [ 'a', 'b', 'c' ]



// [ [ '*', 'b', '*' ], [ 'd', 'b', 'f' ] ] 'doesMatch'
//
//
// [ [ '*', 'b', '*' ],[ 'a', 'b', 'c' ],
//   [ '*', 'b', '*' ],[ 'd', 'b', 'f' ] ]

function sameLetters(arr1, arr2){
  count ++
  // console.log(arr1 + ' and ' + arr2);
  compareThis = arr1.join()
  toThat = arr2.join()
  toThat = toThat.replace(/[^a-zA-Z 0-9]+/g, '');
  compareThis = compareThis.replace(/[^a-zA-Z 0-9]+/g, '');
  // console.log(compareThis,'compareThis', toThat);
  index = toThat.indexOf(compareThis)
  // console.log(index,'index');

  if (index == 1) {
    // console.log(arr2, 'arr2');
    returnToSame.push(arr1, arr2)
    // [ '*', 'b', '*' ] 'arr1' [ 'd', 'b', 'f' ] 'arr2'
    // [ '*', 'b', '*' ] 'arr1' [ 'a', 'b', 'c' ] 'arr2'
    // [ '*', 'b', 'c' ] 'arr1' [ 'a', 'b', 'c' ] 'arr2'

    // console.log(objectReturnToSame);

    // console.log(returnToSame, 'returnToSame');


    // [ [ '*', 'b', '*' ], [ 'd', 'b', 'f' ] ] 'returnToSame'
    // [ [ '*', 'b', '*' ], [ 'a', 'b', 'c' ] ] 'returnToSame'
    // [ [ '*', 'b', 'c' ], [ 'a', 'b', 'c' ] ] 'returnToSame'
    // console.log(returnToSame,'returnToSame');
    return returnToSame
  }


  //
  // for (var x = 0; x < arr1.length; x++) {
  //   // console.log(x, 'postion/index');
  //   // console.log(arr1[x], 'X This is the letter of the array');
  //   // console.log(arr1, 'arr1');
  //   for (var y = 0; y < arr2.length; y++) {
  //     // console.log(y, 'postion/index')
  //     // console.log(arr2[y], 'Y This is the letter of the array')
  //     if (y == x && arr1[x] == arr2[y]) {
  //       // console.log(arr1, 'and', arr2);
  //       //if the postion and the letter match
  //       compareThis = arr1.join()
  //       toThat = arr2.join()
  //       compareThis = compareThis.replace(/[^a-zA-Z 0-9]+/g, '');
  //       toThat = toThat.replace(/[^a-zA-Z 0-9]+/g, '');
  //       if(toThat.includes(compareThis)){
  //
  //         // console.log(compareThis, 'and', toThat , 'in the if statments');
  //       }
  //       // doesMatch = toThat.includes(compareThis);
  //
  //       // console.log(compareThis, 'is in', toThat);
  //       // tempArr1 = tempArr1
  //       // console.log(arr1.match);
  //     }
  //
  //   }
  //
  // }
  // if (doesMatch) {
  //   finalList(compareThis, toThat)
  // }
}

function finalList(arr1, arr2){
  // console.log(' compareThis ',arr1, ' toThat ', arr2 );


}

// for (var x = 0; x < arr1.length; x++) {
//   newx = arr1[x]
//   console.log(newx);
//
//   for (var a = 0; a < newx.length; a++) {
//
//   for (var y = 0; y < arr2.length; y++) {
//     newy = arr2[y]
//     console.log(newy);
//     for (var b = 0; b < newy.length; b++) {
//       console.log(newx, 'arr1[x]')
//       console.log(x, 'x');
//       console.log(newy[b], 'newy[b]')
//       console.log(b, 'index or b');
//       console.log(newy.length, 'length');
//       // if any of the letters and postions match and if length of array matches. push array
//     }
//
//   }
// }
//
// }


// main(arr1, arr2)
//
// function main(arr1, arr2){
//   innerArray(arr1)
// }
//
// function innerArray(array){
//   let newArr;
//   for (var x = 0; x < array.length; x++) {
//     newArr = arr2[x]
//     console.log(newArr)
//     for (var y = 0; y < newArr.length; y++) {
//       console.log(newArr[y], 'newArr[y]')
//       console.log(y, 'index or y');
//       console.log(newArr.length, 'length');
//       // if any of the letters and postions match and if length of array matches. push array
//     }
//
//   }
// }




// for (var i = 0; i < newy.length; i++) {
//   // console.log(i);
//   // if (i == x && arr1[x] == newy[i]) {
//   //   console.log(newy[i].split());
//   //   console.log((arr1[x]));
//   // }
// }


//loops through array and says how many letters are in here and at what index.  Then compares to other array and says this matches. Then if its multiple
//it is decided by index
