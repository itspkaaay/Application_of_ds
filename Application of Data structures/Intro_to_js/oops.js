//// json 

var bird={
    x:100,
    y:50,
    eggs: ['one','two','three','four'],

    fly: function(){
        console.log("bird is flying at ",this.x,this.y)
    }
}

/// for loop
for(let i=0;i<bird.eggs.length;i++){
    console.log(bird.eggs[i]);
}

/// for each loop
bird.eggs.forEach(function(val,ind){
    console.log(ind,val)
})


/// alternate method for making an object

function Bird(x,y,eggs){
    this.x=x;
    this.y=y;
    this.eggs=eggs;

}
console.log("New bird->")
var b1= new Bird(100,20,["seven","eight","nine"]);
console.log(b1);


/// using the class keywords ECMAScript2015

// class declaration

class BirdNew{
    constructor(x,y,eggs){
        this.x= x;
        this.y=y;
        this.eggs=eggs
    }
}

let parrot= new BirdNew(100,50,["p1","p2","p3"])
console.log(parrot);

// class expression

let BirdNew2= class{
    constructor(x,y,eggs){
    this.x=x;
    this.y=y;
    this.eggs=eggs;
}
}

let swan = new BirdNew2(50,50,['s1','s2','s3']);
console.log(swan)
