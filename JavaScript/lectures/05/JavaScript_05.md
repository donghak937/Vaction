## Welcome to Java Script

### 함수 재활용

- 자바 스크립트에서는 함수라는 것을 지원한다. 함수는 쉽게 말하면 매크로 같은 것이다. 
```js
// 함수의 기본 형태
// 파라미터는 함수가 일 할 때 줄 재료들이다.
function 함수이름(파라미터1, 파라미터2 ...){
    // 매크로 (할 일)
    return; //종료를 알려줌
}
```
- 예를 들어 곱하기 함수를 만들어보자
```js
function mult(x, y){
    let result;
    result = x * y;
    return result; // return으로 값을 돌려준다.
}

// 사용 시
let result = mult(5, 6);
console.log(mult); // 30
```
- 같은 프로그램 안에서 언제든지 사용가능하다.
---
### 예제

- 수 2개를 넣으면 더 큰 수를 리턴하는 함수를 만들어보자.

- 입력 받은 숫자가 음수면, 오류 출력, 아니면 숫자만큼의 별을 출력하자.

---

### 재귀함수 (어려움)

- 재귀함수는 함수안에 함수를 불러서 반복하는 형식의 함수다.

```js
let sum = 0;
let num = 1;

fuction sumRecursion(){
    sum += num;
    console.log('sum = ' + sum); // 처음에 sum은 1이다.
    if (num == 10){ // base case라 불린다. num이 10이 되면 종료한다.
        return;
    }
    num++; //여기서 num을 ++ 했기에 다음 번 함수에서는 num이 2다.
    sumRecursion(); // num == 10이 아니니, 반복
}

sumRecursion();

```
---
### 지역변수, 전역변수

- 함수 안에서 사용한 변수는 밖에서 사용 못 한다.
```js
function a(){
    let x = 10;
    console.log(x);
}

console.log(x); // 오류
```

- 이름이 같은 경우, 지역변수가 우선된다.
```js
let x = 5;
function a(){
    let x = 10;
    console.log(x); // 10
}

console.log(x); // 5
```

---
### 연습 문제

- 두 수를 넣으면 서로 배수인지 확인해서 출력해라.
    - 음수일 경우에, 오류 출력
    - 출력 양식은 a는b의 배수입니다. a는 b의 배수가 아닙니다로 해라.
