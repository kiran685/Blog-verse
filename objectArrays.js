let person ={
    name:"Kiran",
    age:19
}
console.log(person.name)
console.log(person["age"])

const {name,age}=person;
console.log(name)
console.log(age)

let fruits=["apple","mango","green apple"]
console.log(fruits[0])



let colors =["red","orange","blue"]
let persons = [{
    name:"sai",
    marks:50
},{
    name: "manoj",
    marks: 60
},{
    name:"kiran",
    marks:70
}]
console.log(persons)
let max=0;
let topper="";
for(let persons of persons){
    if(person.marks>max){

        max=person.marks;
        topper=person.name;
    }

}
console.log(`Topper is ${topper} and he get ${max}`)