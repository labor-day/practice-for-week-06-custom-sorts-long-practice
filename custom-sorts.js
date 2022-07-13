function ageSort(users) {
  // Your code here
  return users.sort(compareAge);
}

function compareAge(a, b) {
  return a.age - b.age
}

function oddEvenSort(arr) {
  // Your code here
  return arr.sort(evenOdd);
}

function evenOdd(a, b) {
  if (a % 2 === 0 && b % 2 === 1) {return 1}
  if (b % 2 === 0 && a % 2 === 1) {return -1}

  return a-b;
}

function validAnagrams(s, t) {
  // Your code here
  let sLetters = s.split("");
  let tLetters = t.split("");
  sLetters.sort();
  tLetters.sort();

  return(tLetters.join("")===sLetters.join(""));
}

function reverseBaseSort(arr) {
  // Your code here
  return arr.sort(baseSort);
}

function baseSort(a, b) {
  if (a.toString().length > b.toString().length) {return -1};
  if (a.toString().length < b.toString().length) {return 1};
  return a-b;
}

function frequencySort(arr) {
  // Your code here
  let frequencies = {};
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (frequencies[number]) {frequencies[number]++;}
    else {
      frequencies[number] = 1;
    }
  }

  let frequency = (a, b) => {
    if (frequencies[a] === frequencies[b]) {
      return b-a
    }
    return frequencies[a] - frequencies[b];
  }


  return arr.sort(frequency);
}


module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
