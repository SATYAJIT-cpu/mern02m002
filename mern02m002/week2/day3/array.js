console.log("hello array");
let a=20
console.log("the value is :" ,a+1)
console.log('the value is : $(a+1)')



let str="welcome"
console.log(str[1]);
str[0]="D"
console.log(str);

console.log(str.length);

console.log(str.toLowerCase());

console.log(str.toLocaleUpperCase());

console.log(str.charAt(0));
console.log(str.charAt("qlith").charAt("innovation"));

const newstring=str.replace("w","d")

console.log(str.slice(-2));
console.log(str.slice(4,4));

console.log(str.slice(4));



//let name=prompt("enter your name")
//console.log("".concat("@").concat(name.length))



//arrays
let starr=["babul","puja"];
console.log(starr[0]);
for(let e of starr);


let number=[2,3,4,6,7]
console.log(number[0]);
let sum=0
for(let e  of number){
    sum=sum+e;
}

console.log(sum/(number.length));

let arra2=[1,2,3,4,5];
let arra3=[6,7,8]
arra2.push(6,7,"string",true);
console.log(arra2);
arra2.pop()
console.log(arra2);

console.log(arra2.concat(arra3));

arra2.unshift(0);
console.log(arra2);
arra2.shift();
console.log(arra2);


console.log(arra2.slice(0,4));



arra2.pop()
console.log(arra2)
arra2.splice(1,2,10)
console.log(arra2);

arra2.splice(4,1)
console.log(arra2);

console.log(arra2.includes(10));


console.log(arra2.reverse());

let array=["bloomberg","microsoft","uber","olla"]
array.shift();
console.log(array);

array.splice(1,1,"olla")
console.log(array);




