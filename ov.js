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


function seperateData(word) {
  let patternNumber = parseInt(word[0]) + 1;

  let N = word.split(' ', patternNumber);
  N.shift()

  let M = word.split(' ').slice(patternNumber);
  M.shift();

  changeIntoArrays(N, M)
}

function changeIntoArrays(listOne, listTwo) {
  let newListOne = [];
  let newListTwo = [];
  for (let i of listOne) {
    i = i.split(" ")
    // while (i.includes("*")) {
    //   i = removeSpecial(i, "*")
    // }
    while (i.includes(",")) {
      i = removeSpecial(i, ",")
    }
    newListOne.push(i.join('').split());
  }

  for (let j of listTwo) {
    j = j.split("")
    while (j.includes("/")) {
      j = removeSpecial(j, "/")
    }
    newListTwo.push(j.join('').split(" "))
  }

  // console.log(newListTwo,'newListTwo');
  match(newListOne, newListTwo);
}

function removeSpecial(array, element) {
  const index = array.indexOf(element);
  if (element == ",") {
    array.splice(index, 1);
    return array
  }
  else if (element == "/") {
    array.splice(index, 1, ",");
    return array
  }
}


function match(listOne, listTwo) {
  // console.log(listOne, 'listOne');
  listOne = listOne.join(" ").split(' ')
  listTwo = listTwo.join(" ").split(' ')
  console.log(listOne, 'listOne');
  console.log(listTwo, 'listTwo');
  let match = [];
  // for(let i of listOne){
  //   for(let j of listTwo){
  //     if (i == j) {
  //       console.log('works');
  //     }
  //   }
  // }
};

//changes both items lists into an array and removes ',' and '/'





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
