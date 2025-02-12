let k="";
function check(n){
    if(n%3==0&&n%5!=0)
        k="fizz";
    else if(n%3!=0&&n%5==0)
        k="buzz";
    else if(n%3==0&&n%5==0)
        k="fizz & buzz";
    else
        k="none";
}
var n = prompt("Number: ");
check(n);
var para = document.getElementById('p1');
para.innerHTML = k;
console.log(k);
