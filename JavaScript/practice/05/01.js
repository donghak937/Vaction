let a = 10;
let b = 20;

function check(a ,b){

    if (a <= 0 || b <= 0){
        console.log('error');
        return;
    }

    if ( a % b == 0) console.log('a는 b의 배수입니다.');
    else console.log('a는 b의 배수가 아닙니다.');
}

check(a,b);
