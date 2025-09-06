let x=10,y=3

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x**y)
console.log(x%y)

//Assignment operators
let z=5
z+=3
console.log(z)
z*=2
console.log(z)
z-=4
console.log(z)
z/=2
console.log(z)
z%=2
console.log(z)

//Comparasion operators

let a=10;b="18"

console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a===b)
console.log(a!==b)
console.log(a>=b)
console.log(a<=b)
console.log(a>b)
console.log(a<b)
console.log(a=b)

//Logical operators

let age=20
console.log(age>=20 && age<=40)
console.log(age>=20 || age<=40)
console.log(!(age<18))

//String operators

let firstName="Satya Siva"
let lastName="Kiran"
let fullName=firstName+" " +lastName
console.log(fullName)
let correctName=`Hello ${firstName} ${lastName},Welcome to Dev Astra`
console.log(correctName)

//Ternary operators
let myAge=19
if(myAge>=18){
    console.log("Eligible to vote")
}else{
    console.log("You Cannot Vote")
}
let result=myAge>=18 ? "ELIGIBLE TO VOTE":"You Cannot Vote"
console.log(result)

//Increment and Decrement operators

let count=5;
console.log(count++)
console.log(count)
console.log(++count)
console.log(--count)
console.log(count--)

//typeof operators
console.log(typeof count)
console.log(typeof "kiran")
console.log(typeof 18)
