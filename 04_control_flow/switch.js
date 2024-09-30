// syntax:        use of wsitch is we dont have to put conditions and conditional operators and multiple if-else
/* switch (key) {
    case value:
        
        break;

    default:
        break;
} */

const month = "march"
switch (month) {
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("february");
        break;
    case "march":
        console.log("March");
        break;                            // after break (condition matched), no statement will executed or no conditions will be checked
    case "april":
        console.log("April");
        break;

    default:                                 //if we didn't write break, then after condtion has beedn matched it will execute rest of all conditions except default
        console.log("no month matched!")
        break;
}
// NOTE: if we didn't write break, then after condtion has beedn matched it will execute rest of all conditions except default