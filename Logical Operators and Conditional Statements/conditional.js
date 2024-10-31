// if ,else if ,else

let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}


//switch 

let dish = "briyani";

switch (dish) {
    case "curdrice":
        console.log("veg food");
        break;
    case "briyani":
        console.log("non veg food");
        break;
    default:
        console.log("select valid option");
}
