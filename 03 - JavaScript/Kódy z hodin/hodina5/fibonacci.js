let c1 = 0;
console.log(c1);
let c2 = 1;
console.log(c2);
for(let i = 2; i < 10; i++){
    let c3 = c1 + c2;
    c1 = c2;
    c2 = c3;
    console.log(c3);
}