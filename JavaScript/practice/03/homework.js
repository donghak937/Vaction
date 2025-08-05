// 1. 인하와 민건의 점수
let inha_math = 85;
let inha_kor = 90;

let mingun_math = 92;
let mingun_kor = 88;

// 2. 평균 함수
function average(math, korean) {
    return (math + korean) / 2;
}

// 3. 수학 점수 비교 (삼항 연산자 사용)
let math_winner = (inha_math > mingun_math) ? "인하" : "민건";
let math_score = (inha_math > mingun_math) ? inha_math : mingun_math;

console.log("수학 점수가 더 높은 사람:", math_winner, "점수:", math_score);

// 4. 국어 점수 비교
let kor_winner = (inha_kor > mingun_kor) ? "인하" : "민건";
let kor_score = (inha_kor > mingun_kor) ? inha_kor : mingun_kor;

console.log("국어 점수가 더 높은 사람:", kor_winner, "점수:", kor_score);

// 5. 평균 비교
let inha_avg = average(inha_math, inha_kor);
let mingun_avg = average(mingun_math, mingun_kor);

let avg_winner = (inha_avg > mingun_avg) ? "인하" : "민건";
let avg_score = (inha_avg > mingun_avg) ? inha_avg : mingun_avg;
let diff = (inha_avg > mingun_avg) ? inha_avg - mingun_avg : mingun_avg - inha_avg;

console.log("평균 점수가 더 높은 사람:", avg_winner, "평균:", avg_score);
console.log("평균 점수 차이:", diff);
