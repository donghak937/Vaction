let cm = 170;

let kg = 50;

let bmi = kg / ((cm / 100) * (cm / 100));
console.log(bmi.toFixed(0));
bmi.toFixed(0) > 23 ? console.log('비만 입니다.') : console.log('정상입니다'); 