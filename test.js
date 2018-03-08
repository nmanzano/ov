let arr1 = [['*','b','*'], ['a', '*', '*'], ['*', 'b', 'c']]
let arr2 = [['a','a','c', 'f'], ['d','b','f'], ['a', 'b', 'c']]
//results = '*','b','*' matches with 'd','b','f' and '*', 'b', 'c' mathes with 'a', 'b', 'c'
let innerArrayListOne;
let innerArrayListTwo;
let compareThis;
let toThat;
let doesMatch;
let currentArr;

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
        sameLetters(innerArrayListOne, innerArrayListTwo)
      }
    }
  }
}
// [ '*', 'b', '*' ]
// [ 'a', '*', '*' ]
// [ '*', 'b', 'c' ]

function sameLetters(arr1, arr2){
  // console.log(arr1 + ' and ' + arr2);
  for (var x = 0; x < arr1.length; x++) {
    // console.log(x, 'postion/index');
    // console.log(arr1[x], 'This is the letter of the array');
    // console.log(arr1, 'arr1');
    for (var y = 0; y < arr2.length; y++) {
      // console.log(y, 'postion/index')
      // console.log(arr2[y], 'This is the letter of the array')
      if (y == x && arr1[x] == arr2[y]) {
        //if the postion and the letter match

        compareThis = arr1.join()
        toThat = arr2.join()
        compareThis = compareThis.replace(/[^a-zA-Z 0-9]+/g, '');
        toThat = toThat.replace(/[^a-zA-Z 0-9]+/g, '');
        doesMatch = toThat.includes(compareThis);

        // console.log(compareThis, 'is in', toThat);
        // tempArr1 = tempArr1
        // console.log(arr1.match);
        // console.log(compareThis + ' and ' + toThat);
      }

    }

  }
  if (doesMatch) {
    finalList(compareThis, toThat)
  }
}

function finalList(arr1, arr2){
  console.log(' compareThis ',arr1, ' toThat ', arr2 );
  

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
