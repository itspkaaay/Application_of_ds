/// number
var a= 10;
console.log(a)
console.log(typeof(a));


// array
let b2=[1,2,3,4]
console.log(b2)
console.log(typeof(b2))


//// string
console.log(typeof("hello world"))

////// variables
// let has function scope
// var has block scope if while for
// c=10 has global scope

function f(){
let a =100;
if(a==100){
    console.log(a)
}
}
f()
console.log(a)

///functions


sqrt_1(10);
//sqrt_2(10);         not hoisted




function sqrt_1(n){
    console.log("1st");
    return Math.sqrt(n);
}



//// function hoisting

var sqrt_2= function(){
    console.log("in 2nd");
}

////  ^ this function is not taken to the top

sqrt_1(10)
sqrt_2(20)

///// arrays

c=['apple','banana','orange']   /// def

console.log(c.length)           /// getting the length of an array

for(let i=0;i<c.length;i++)
{
    console.log(c[i])
}
/// array push
c.push('lemon')
console.log(c)
/// array pop
console.log(c.pop())
console.log(c)
//// get index of element
console.log(c.indexOf('mango'))
/// add to front
c.unshift('plum')
console.log(c)
/// move from front
c.shift();
console.log(c)