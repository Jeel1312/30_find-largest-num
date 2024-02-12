function find() {
    let a = [document.getElementById("a").value , document.getElementById("b").value , document.getElementById("c").value];

    let b = Math.max(...a)

    document.getElementById("large").innerHTML = "The largest number is : "+ b;

}

//or
// function find() {
//     let a = Number(document.getElementById("a").value);
//     let b = Number(document.getElementById("b").value);
//     let c = Number(document.getElementById("c").value);

//     if (a > b && a > c) {
//         document.getElementById("large").innerHTML = "The largest number is : " + a;
//     }
//     else if (b > a && b > c) {
//         document.getElementById("large").innerHTML = "The largest number is : " + b;
//     }
//     else {
//         document.getElementById("large").innerHTML = "The largest number is : " + c;
//     }
// }