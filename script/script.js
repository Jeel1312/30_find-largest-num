function find() {
    let a = [document.getElementById("a").value , document.getElementById("b").value , document.getElementById("c").value];

    let b = Math.max(...a)

    document.getElementById("large").innerHTML = "The largest number is : "+ b;

}

// or
// function find() {
//     let a = document.getElementById("a").value;
//     let b = document.getElementById("b").value;
//     let c = document.getElementById("c").value;
//     a = Number(a);
//     b = Number(b);
//     c = Number(c);

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