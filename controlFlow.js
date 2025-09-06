let marks=85;
if(marks>=90){
    console.log("A+ Grade")
}
else if(marks>=80){
    console.log("A Grade")
}
else if(marks>=70){
    console.log("B Grade")
}else{
    
    console.log("Fail")
}
let day=5
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid");
        break;

}
// 1. For Loop
console.log("For Loop:");
for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}

// 2. While Loop
console.log("\nWhile Loop:");
let j = 1;
while (j <= 5) {
  console.log("Iteration:", j);
  j++;
}

// 3. Do-While Loop

let k = 1;
do {
  console.log("Iteration:", k);
  k++;
} while (k <= 5);


let colors = ["Red","Orange","Blue"]
for(let i=0;i<colors.length;i++){
    console.log(colors[i])
}
let person = {
    name:"Kiran",
    age:18,
    college:"JNTUGV"
}
for(let key in person)
{
    console.log(`${key}:${person[key]}`)
}
for(let i=5;i>0;i--){
    if(i===3){
        continue;
    }else if(i===2){
        break;
    }
    console.log(i)
}