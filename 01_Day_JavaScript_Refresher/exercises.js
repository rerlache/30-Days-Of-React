// 01.
const emptyArray = [];
// 02.
const biggerThen5Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 03.
let arrayLength = biggerThen5Array.length;
// 04.
let firstArrayItem = biggerThen5Array[0];
let middleArrayItem = biggerThen5Array[Math.round(arrayLength / 2) - 1];
let lastArrayItem = biggerThen5Array[arrayLength - 1];
// 05.
let mixedDataTypes = [
  "string",
  19,
  "a",
  (arr = [1, 2, 3]),
  (tempObject = { name: "robin", age: 36 }),
  "another string",
];
// 06.
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
let itCompanies2 = []
let itCompanies3 = []
let itCompanies4 = []
let itCompanies5 = []
itCompanies.forEach(comp => {
    itCompanies2.push(comp)
    itCompanies3.push(comp)
    itCompanies4.push(comp)
    itCompanies5.push(comp)
})
console.log(itCompanies);
// 08.
console.log(itCompanies.length);
// 09.
console.log(
  itCompanies[0],
  itCompanies[Math.round(itCompanies.length / 2) - 1],
  itCompanies[itCompanies.length - 1]
);
// 10.
console.log(itCompanies.toString());
// 11.
console.log(itCompanies.toString().toUpperCase());
// 12.
let itLastIndex = itCompanies.length - 1;
let itCompOutput = [];
itCompanies.forEach((element) => {
  if (element != itCompanies[itLastIndex]) itCompOutput.push(element);
});
console.log(
  itCompOutput.toString() +
    " and " +
    itCompanies[itLastIndex] +
    " are big IT companies."
);
// 13.
let companyIndex = itCompanies.indexOf("Google");
if (companyIndex != -1) {
  console.log(itCompanies[companyIndex]);
} else {
  console.log("company not found");
}
// 14.
let singleOCompanies = [];
itCompanies.forEach((company) => {
  let oCounter = 0;
  let charArray = company.split("", company.length);
  charArray.forEach((char) => {
    if (char == "o") {
      oCounter++;
    }
  });
  if (oCounter <= 1) {
    singleOCompanies.push(company);
  }
});
console.log("companies with no more then 1 o: " + singleOCompanies);
// 15.
console.log("test");
itCompanies.sort();
// 16.
itCompanies.reverse();
console.log(itCompanies);
// 17.
console.log(itCompanies.slice(0, 3));
// 18.
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));
// 19.
console.log(
  itCompanies.slice(
    Math.round(itCompanies.length / 2) - 2,
    Math.round(itCompanies.length / 2) + 1
  )
);

// 20. remove first - itCompanies2
let removedFirstItemArr = itCompanies2.splice(1, itCompanies2.length - 1);
console.log(removedFirstItemArr);
// 21. remove middle - itCompanies3
let middleIndex = Math.round(itCompanies3.length / 2) - 1
let middleIndexVal = itCompanies3[middleIndex]
let removedMiddleItemArr = []
itCompanies3.forEach(comp => {
    if(comp != middleIndexVal){
        removedMiddleItemArr.push(comp)
    }
})
console.log(removedMiddleItemArr)
// 22. remove last - itCompanies4
let lastIndex = itCompanies4.length - 1
let lastIndexVal = itCompanies4[lastIndex]
let removedLastItemArr = []
itCompanies4.forEach(comp => {
    if(comp != lastIndexVal){
        removedLastItemArr.push(comp)
    }
})
console.log(removedLastItemArr)
// 23. remove all
console.log(itCompanies5)
console.log(itCompanies5.splice())