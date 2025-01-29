let val1 : boolean = true;
let val2 : number = 3.14;
let val3 : string = "pi";
console.log("val1 is a boolean: "+ val1)
console.log("val2 is a number: "+ val2)
console.log("val3 is a string: "+ val3)
let arr : number[] = [1,2,3,4]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log("num "+element+" in array")
}

type address = {
    street : string,
    num : number
}
let myAddress : address = {
    street : "Green Street", 
    num: 145
}
console.log(myAddress)