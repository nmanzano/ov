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
*/
//


function seperateData(word){

  let patternNumber = parseInt(word[0]) + 1;
  let M = word.split(' ').slice(patternNumber);
  M.shift();

  let N = word.split(' ', patternNumber);
  N.shift()

   // console.log(M, M.length, 'M');
   // console.log(N, N.length, 'N');
   changeIntoArrays(N,M)
}


// function match(listOne, listTwo) {
//   let match = [];
//   //creates both items into array
//   listOne = changeIntoArrays(listOne, null);
//   listTwo = changeIntoArrays(null, listTwo);
//
//   // if both arrays length match
//   if (listOne.length == listTwo.length) {
//     for (var i = 0; i < listOne.length; i++) {
//
//       for (var j = 0; j < listTwo.length; j++) {
//         if (listOne[i] == listTwo[j]) {
//           match.push(listOne[i])
//         }
//       }
//     }
//     console.log(match, 'new match');
//     console.log(listOne.join(','), 'listOne');
//   }
//   else {
//     console.log('does not match');
//   }
// };

//changes both items lists into an array and removes ',' and '/'
function changeIntoArrays(listOne,listTwo){
  let newListOne = [];
  for(let i of listOne) {
    i = i.split("")
    while (i.includes("*")) {
      i = removeSpecial(i, "*")
    }
    while (i.includes(",")) {
      i = removeSpecial(i, ",")
    }

    newListOne.push(i.join('').split());
  }
  console.log(newListOne, 'newListOne');

}

function removeSpecial(array, element) {
    const index = array.indexOf(element);
    array.splice(index, 1);
    return array
}




// match("A,*,B,*,C", "A/foo/B/bar/C")
// match("*,x,y,z", "/w/x/y/z/")

// function seperateData(word){
//
//   let patternNumber = parseInt(word[0]) + 1;
//   let M = word.split(' ').slice(patternNumber);
//   M.shift();
//
//   let N = word.split(' ', patternNumber);
//   N.shift()
//
//    console.log(M, M.length, 'M');
//    console.log(N, N.length, 'N');
// }

let file = "6 *,b,* a,*,* *,*,c foo,bar,baz w,x,*,* *,x,y,z 5 /w/x/y/z/ a/b/c foo/ foo/bar/ foo/bar/baz/"

seperateData(file);
