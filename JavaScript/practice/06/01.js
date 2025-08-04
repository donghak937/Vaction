let scores = [80, 90, 70, 81, 90];
let count = 0;
let total = 0;

for(let i = 0; i < scores.length; i++){
    if (scores[i] >= 80) count++;
    total += scores[i];
}

console.log((total / scores.length).toFixed(1));
console.log(count);
