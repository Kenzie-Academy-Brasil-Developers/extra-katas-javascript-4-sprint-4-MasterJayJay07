const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

const arrays = document.getElementById("arrays");

//função que retorna os resultados
function showResults(numeros){
    return numeros;
}   

//kata 1
let header1 = document.createElement("header");
    header1.textContent = "Kata 1";
    document.body.appendChild(header1);
function kata1() {
    let newArr = gotCitiesCSV.split(",");
    let newElement = document.createElement("div");
    newElement.textContent = JSON.stringify(newArr);
    document.body.appendChild(newElement)
    return newArr
}
showResults(kata1())

//kata 2
let header2 = document.createElement("header");
    header2.textContent = "Kata 2";
    document.body.appendChild(header2);
function kata2() {
    let newArr = bestThing.split(" ");
    let newElement = document.createElement("div");
    newElement.textContent = JSON.stringify(newArr);
    document.body.appendChild(newElement)
    return newArr;  
}
showResults(kata2())

//kata 3
let header3 = document.createElement("header");
    header3.textContent = "Kata 3";
    document.body.appendChild(header3);
function kata3() {
    let newArr = gotCitiesCSV.split(",").join(";")
    let newElement = document.createElement("div");
    newElement.textContent = JSON.stringify(newArr);
    document.body.appendChild(newElement)
    return newArr;  
}
showResults(kata3())

//kata 4
let header4 = document.createElement("header");
    header4.textContent = "Kata 4";
    document.body.appendChild(header4);
function kata4() {
    let newArr = lotrCitiesArray.join(",")
    let newElement = document.createElement("div")
    newElement.textContent = JSON.stringify(newArr);
    document.body.appendChild(newElement)
    return newArr;
}    
showResults(kata4())

//kata 5
let header5 = document.createElement("header");
    header5.textContent = "Kata 5";
    document.body.appendChild(header5);
function kata5() {
    let newArr = lotrCitiesArray.slice(0,5)
    let newElement = document.createElement("div")
    newElement.textContent = JSON.stringify(newArr);
    document.body.appendChild(newElement)
    return newArr;
}    
showResults(kata5())

//kata 6
let header6 = document.createElement("header");
    header6.textContent = "Kata 6";
    document.body.appendChild(header6);
function kata6() {
    let newArr = lotrCitiesArray.slice(-5)
    let newElement = document.createElement("div")
    newElement.textContent = JSON.stringify(newArr);
    document.body.appendChild(newElement)
    return newArr;
}    
showResults(kata6())

//kata 7
let header7 = document.createElement("header");
    header7.textContent = "Kata 7";
    document.body.appendChild(header7);
function kata7() {
    let newArr = lotrCitiesArray.slice(2,5)
    let newElement = document.createElement("div")
    newElement.textContent = JSON.stringify(newArr);
    document.body.appendChild(newElement)
    return newArr;
}    
showResults(kata7())    

//kata 8
let header8 = document.createElement("header");
    header8.textContent = "Kata 8";
    document.body.appendChild(header8);
function kata8() {
    lotrCitiesArray.splice(2,1)
    let newElement = document.createElement("div")
    newElement.textContent = JSON.stringify(lotrCitiesArray);
    document.body.appendChild(newElement)
    return lotrCitiesArray;
}    
showResults(kata8())     

//kata9
let header9 = document.createElement("header");
    header9.textContent = "Kata 9";
    document.body.appendChild(header9);
function kata9() {
    lotrCitiesArray.splice(5)
    let newElement = document.createElement("div")
    newElement.textContent = JSON.stringify(lotrCitiesArray);
    document.body.appendChild(newElement)
    return lotrCitiesArray;
}    
showResults(kata9())

//kata10
let header10 = document.createElement("header");
    header10.textContent = "Kata 10";
    document.body.appendChild(header10);
function kata10() {
    lotrCitiesArray.splice(2,0, "Rohan")
    let newElement = document.createElement("div")
    newElement.textContent = JSON.stringify(lotrCitiesArray);
    document.body.appendChild(newElement)
    return lotrCitiesArray;
}    
showResults(kata10())

//kata11
let header11 = document.createElement("header");
    header11.textContent = "Kata 11";
    document.body.appendChild(header11);
function kata11() {
    lotrCitiesArray.splice(-1,1, "Deadest Marshes")
    let newElement = document.createElement("div")
    newElement.textContent = JSON.stringify(lotrCitiesArray);
    document.body.appendChild(newElement)
    return lotrCitiesArray;
}    
showResults(kata11())

//kata12
let header12 = document.createElement("header");
    header12.textContent = "Kata 12";
    document.body.appendChild(header12);
function kata12() {
    let newArr = bestThing.slice(0,14);
    let newElement = document.createElement("div")
    newElement.textContent = JSON.stringify(newArr);
    document.body.appendChild(newElement)
    return newArr;
}    
showResults(kata12())

//kata13
let header13 = document.createElement("header");
    header13.textContent = "Kata 13";
    document.body.appendChild(header13);
function kata13() {
    let newArr = bestThing.slice(-12);
    let newElement = document.createElement("div")
    newElement.textContent = JSON.stringify(newArr);
    document.body.appendChild(newElement)
    return newArr;
}    
showResults(kata13())

//kata14
let header14 = document.createElement("header");
    header14.textContent = "Kata 14";
    document.body.appendChild(header14);
function kata14() {
    let newArr = bestThing.slice(23, 38);
    let newElement = document.createElement("div")
    newElement.textContent = JSON.stringify(newArr);
    document.body.appendChild(newElement)
    return newArr;
}    
showResults(kata14())

//kata15
let header15 = document.createElement("header");
    header15.textContent = "Kata 15";
    document.body.appendChild(header15);
function kata15() {
    let newArr = bestThing.substring(bestThing.length-12);
    let newElement = document.createElement("div")
    newElement.textContent = JSON.stringify(newArr);
    document.body.appendChild(newElement)
    return newArr;
}    
showResults(kata15())

//kata 16
let header16 = document.createElement("header");
    header16.textContent = "Kata 16";
    document.body.appendChild(header16);
function kata16() {
    let newArr = bestThing.substring(23, 38);
    let newElement = document.createElement("div")
    newElement.textContent = JSON.stringify(newArr);
    document.body.appendChild(newElement)
    return newArr;
}    
showResults(kata16())

//kata17
let header17 = document.createElement("header");
    header17.textContent = "Kata 17";
    document.body.appendChild(header17);
function kata17() {
    lotrCitiesArray.pop()
    let newElement = document.createElement("div")
    newElement.textContent = JSON.stringify(lotrCitiesArray);
    document.body.appendChild(newElement)
    return lotrCitiesArray;
}    
showResults(kata17())

//kata18
let header18 = document.createElement("header");
    header18.textContent = "Kata 18";
    document.body.appendChild(header18);
function kata18() {
    lotrCitiesArray.push("Deadest Marshes")
    let newElement = document.createElement("div")
    newElement.textContent = JSON.stringify(lotrCitiesArray);
    document.body.appendChild(newElement)
    return lotrCitiesArray;
}    
showResults(kata18())

//kata19
let header19 = document.createElement("header");
    header19.textContent = "Kata 19";
    document.body.appendChild(header19);
function kata19() {
    lotrCitiesArray.shift()
    let newElement = document.createElement("div")
    newElement.textContent = JSON.stringify(lotrCitiesArray);
    document.body.appendChild(newElement)
    return lotrCitiesArray;
}    
showResults(kata19())

//kata20
let header20 = document.createElement("header");
    header20.textContent = "Kata 20";
    document.body.appendChild(header20);
function kata20() {
    lotrCitiesArray.unshift("Mordor")
    let newElement = document.createElement("div")
    newElement.textContent = JSON.stringify(lotrCitiesArray);
    document.body.appendChild(newElement)
    return lotrCitiesArray;
}    
showResults(kata20())

let divisor = document.createElement("header");
    divisor.textContent = "BÔNUS";
    document.body.appendChild(divisor);
    divisor.classList.add("dividir")

//BÔNUS

//bonus 1
let headerB1 = document.createElement("header");
    headerB1.textContent = "Bônus 1";
    document.body.appendChild(headerB1);
function bonus1() {
    let newArr = bestThing.split(" ");
    let indice = newArr.indexOf("only");
    let newElement = document.createElement("div");
    newElement.textContent = JSON.stringify(indice);
    document.body.appendChild(newElement)
    return indice;
}
showResults(bonus1())

//bonus 2
let headerB2 = document.createElement("header");
    headerB2.textContent = "Bônus 2";
    document.body.appendChild(headerB2);
function bonus2() {
    let newArr = bestThing.split(" ");
    let indice = newArr.length-1;
    let newElement = document.createElement("div");
    newElement.textContent = JSON.stringify(indice);
    document.body.appendChild(newElement)
    return indice;
}
showResults(bonus2())

//bonus3
let headerB3 = document.createElement("header");
    headerB3.textContent = "Bônus 3";
    document.body.appendChild(headerB3);
function bonus3() {
    let newElement = document.createElement("div");
    newElement.textContent = JSON.stringify();
    document.body.appendChild(newElement)
    return "-";
}
showResults(bonus3())

//bonus4
let headerB4 = document.createElement("header");
    headerB4.textContent = "Bônus 4";
    document.body.appendChild(headerB4);
function bonus4() {
    let newElement = document.createElement("div");
    newElement.textContent = JSON.stringify();
    document.body.appendChild(newElement)
    return "-";
}
showResults(bonus4())

//bonus5
let headerB5 = document.createElement("header");
    headerB5.textContent = "Bônus 5";
    document.body.appendChild(headerB5);
function bonus5() {
    let newElement = document.createElement("div");
    newElement.textContent = JSON.stringify();
    document.body.appendChild(newElement)
    return "-";
}
showResults(bonus5())

//bonus6
let headerB6 = document.createElement("header");
    headerB6.textContent = "Bônus 6";
    document.body.appendChild(headerB6);
function bonus6() {
    let trueFalse = lotrCitiesArray.includes("Mirkwood");
    let newElement = document.createElement("div");
    newElement.textContent = JSON.stringify(trueFalse);
    document.body.appendChild(newElement)
    return trueFalse;
}
showResults(bonus6())

//bonus7
let headerB7 = document.createElement("header");
    headerB7.textContent = "Bônus 7";
    document.body.appendChild(headerB7);
function bonus7() {
    let trueFalse = lotrCitiesArray.includes("Hollywood");
    let newElement = document.createElement("div");
    newElement.textContent = JSON.stringify(trueFalse);
    document.body.appendChild(newElement)
    return trueFalse;
}
showResults(bonus7())

//bonus8
let headerB8 = document.createElement("header");
    headerB8.textContent = "Bônus 8";
    document.body.appendChild(headerB8);
function bonus8() {
    let indice = lotrCitiesArray.indexOf("Mirkwood");
    let newElement = document.createElement("div");
    newElement.textContent = JSON.stringify(indice);
    document.body.appendChild(newElement)
    return indice;
}
showResults(bonus8())

//bonus9
let headerB9 = document.createElement("header");
    headerB9.textContent = "Bônus 9";
    document.body.appendChild(headerB9);
function bonus9() {
    let newElement = document.createElement("div");
    newElement.textContent = JSON.stringify();
    document.body.appendChild(newElement)
    return "-";
}
showResults(bonus9())

//bonus10
let headerB10 = document.createElement("header");
    headerB10.textContent = "Bônus 10";
    document.body.appendChild(headerB10);
function bonus10() {
    let newArr = lotrCitiesArray.reverse();
    let newElement = document.createElement("div");
    newElement.textContent = JSON.stringify(newArr);
    document.body.appendChild(newElement)
    return newArr;
}
showResults(bonus10())

//bonus11
let headerB11 = document.createElement("header");
    headerB11.textContent = "Bônus 11";
    document.body.appendChild(headerB11);
function bonus11() {
    let newArr = lotrCitiesArray.sort();
    let newElement = document.createElement("div");
    newElement.textContent = JSON.stringify(newArr);
    document.body.appendChild(newElement)
    return newArr;
}
showResults(bonus11())

//bonus12
let headerB12 = document.createElement("header");
    headerB12.textContent = "Bônus 12";
    document.body.appendChild(headerB12);
function bonus12() {
    let newElement = document.createElement("div");
    newElement.textContent = JSON.stringify();
    document.body.appendChild(newElement)
    return "-";
}
showResults(bonus12())