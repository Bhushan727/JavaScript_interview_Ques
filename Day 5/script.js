console.log("Working");

document.querySelector('.changeHead').addEventListener('click',function(){
    document.getElementsByTagName('h1')[0].innerText = "MERN Stack";

})

let header = document.getElementsByTagName('h1')[0];
console.log(header);



setInterval(() => {
    const date =new Date();
    const hr = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    
    
    document.getElementsByClassName('hour')[0].innerHTML = `${hr} : ${min} : ${sec}`;
}, 1000);


document.querySelector('.hideHeader').addEventListener('click',function()
{

    document.getElementsByTagName('h1')[0].style.display = "none";
    
});



let arr = [0,1,1,0,0,1,1,0,0,1];
let count = 0;
for(let i=0; i<arr.length; i++)
{
    if(arr[i] == 0)
    {
        count++;
    }
}
console.log(`number of 0's in given array is ${count}`);



let array = [10,11,21,40,23,22,13,30,10,41];
let countEven = 0;
let countOdd = 0;

for(let i=0; i<arr.length; i++)
{
    if(arr[i]%2 === 0)
    {
        countEven++;
    }
    else{
        countOdd++;
    }
}
console.log(`even nos are ${countEven} and odd nos are ${countOdd}`);



let str = "This a i o u is a String";
let vowel = "aeiou";
let counts = 0;
for(let i=0; i<str.length; i++)
{
    // for(let j=0; j<vowel.length; j++)
    // {
    //     if(str[i].toLowerCase() === vowel[j])
    //     {
    //         counts++;
    //     }
    // }
    
    if(vowel.includes(str[i].toLowerCase()))
    {
        counts++;
    }
}

console.log(`total number of vowel in given String is ${counts}`);


// Ques
// Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same

let empOne = {
    id : "phase1",
    products : ['apple', 'samsung', 'oneplus', 'Nokia']
}

let empTwo = {
    id : "phase2",
    products : ['apple', 'samsung', 'oneplus', 'Nokia']
}

console.log(empOne.products);
let counted = 0;
let i;

for(i=0; i<empOne.products.length; i++)
{
    if(empOne.products[i] === empTwo.products[i])
    {
        counted++;
    }
}

if(i == counted)
{
    console.log("Elements in array of both the objects are same");
}
else{
    console.log("not same");
}


