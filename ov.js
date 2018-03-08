/*
Two lists
First: list of patterns
Second: list of slash spererated paths

Job: print for each path the pattern which best matches the path.

Pattern: comma-separated sequence of non-empty fields.

INPUT
first line contains an integer "N", specifying the number of patterns

Steps:
1) Look to see if length matches. When doing this, I found that the length does not match.
Even through the pattern matches.
2)Attempt to seperater every item in array.
3) may consider object as option


What we need to do:
1) see if length matches. This can be done
2) it recognizes the '/' at the end and makes it a item. This throws off counts
3) if statments:
  if length and characters the same = matches
  if length and most characters the same = matches
  if length is the same and only one character matches then has to be at index = matches
*/
//


function seperateData(word) {
  let patternNumber = parseInt(word[0]) + 1;

  let N = word.split(' ', patternNumber);
  N.shift()

  let M = word.split(' ').slice(patternNumber);
  M.shift();
  // M = M.``toString()

  // changeIntoArrays(N, M)
  //[ '/w/x/y/z/', 'a/b/c', 'foo/', 'foo/bar/', 'foo/bar/baz/' ] 'M'
  //[ '*,b,*', 'a,*,*', '*,*,c', 'foo,bar,baz', 'w,x,*,*', '*,x,y,z' ] 'N'
  final(N, M)
}

// [ '', 'w', 'x', 'y', 'z', '' ] 'arr'
// [ 'a', 'b', 'c' ] 'arr'
// [ 'foo', '' ] 'arr'
// [ 'foo', 'bar', '' ] 'arr'
// [ 'foo', 'bar', 'baz', '' ] 'arr'

// ,w,x,y,z,
// a,b,c
// foo,
// foo,bar,
// foo,bar,baz,

function final(N, M){
    let mArr = []
    let nArr = []
    let object = {}
    let newArr = []
    M = M.join(" ")
    M = M.replace(/[&\/\\]/g, ',')
    M = M.split(' ')
    N = N.join(' ').split(' ')

    for (var i = 0; i < M.length; i++) {
      mArr = M[i].split(",")
      if (mArr[0] == '') {
         mArr.shift()
         if (mArr[mArr.length - 1] == '') {
           mArr.pop()
         }
        newArr.push(mArr);
      }
      else if (mArr[mArr.length - 1] == '') {
        mArr.pop()
        newArr.push(mArr);
      }
      else {
        newArr.push(mArr);
      }
    }
      console.log(newArr,'newArr');

    for (var i = 0; i < N.length; i++) {
        nArr = N[i].split(",")
        object[i] = nArr
    }
    console.log(object, 'object');
}

//
//
// function changeIntoArrays(listOne, listTwo) {
//   let newListOne = [];
//   let newListTwo = [];
//
//   for (let i of listOne) {
//     i = i.split(",")
//     newListOne.push(i.join('').split(' ').join());
//   }
//
//
//   for (let j of listTwo) {
//     j = j.split("")
//     while (j.includes("/")) {
//       j = removeSpecial(j, "/", ",")
//     }
//     while (j.includes(",")) {
//       j = removeSpecial(j, ",")
//     }
//     newListTwo.push(j.join('').split(" ").join())
//   }
//
//   compare(newListOne, newListTwo);
//   // [ '*b*', 'a**', '**c', 'foobarbaz', 'wx**', '*xyz' ] 'newListOne'
//   // [ 'wxyz', 'abc', 'foo', 'foobar', 'foobarbaz' ] 'newListTwo'
// }
//
// function removeSpecial(array, element) {
//   // array = array.split()
//   const index = array.indexOf(element);
//   if (element == ",") {
//     array.splice(index, 1);
//     return array
//   }
//   else if (element == "/") {
//     array.splice(index, 1, ",");
//     return array
//   }
// }
//
// // let found = arr1.some(r=> arr2.includes(r))
//
// function compare(listOne, listTwo) {
//   let onlyLetter = [/[a-z]/g];
//   let index;
//   let xLetter;
//   let same = listOne.filter((word) => listTwo.includes(word))
//
//   console.log(listOne);
//
//
// }



let file = "6 *,b,* a,*,* *,*,c foo,bar,baz w,x,*,* *,x,y,z 5 /w/x/y/z/ a/b/c foo/ foo/bar/ foo/bar/baz/"

seperateData(file);
