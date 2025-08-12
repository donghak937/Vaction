## Welcome to Java Script

### 조건문, 반복문

- 조건문
    - if : true면 실행
    - if - else : true면 실행, 아니면 else 실행
    - if else if : true면 실행, 아니면 else if가 true면 실행
    - switch : 경우를 확인
- 반복문
    - for : 조건이 true면 실행
    - while : 조건이 true면 실행
    - do - while : 한 번 먼저 하고 다음부터 true면 실행

---
### 예제
- if 
```js
let x = 10;

if (x > 100) { // 안에 있는 값이 100 보다 작으면,
    console.log('x값은 ' + x + '입니다.');
    console.log('x값은 100보다 작습니다.');
}
```

- if - else

```js
let x = 10;

if (x > 100) { // 안에 있는 값이 100 보다 작으면,
    console.log('x값은 짝수 입니다.');
}
else{ // 아니면
    console.log('x값은 홀수 입니다.');
}
```
```js
let x = 10;

if (???) { // 짝수면
    console.log('x값은 100보다 작습니다.');
}
else{ // 아니면
    console.log('x값은 100보다 큽니다.');
}
```

- if - else if

```js
let x = 10;

if (x <= 10 ) { // 안에 있는 값이 100 보다 작으면,
    console.log('x값은 10보다 작습니다.');
}
else if (x <= 20){
    console.log('x값은 20보다 큽니다.');
}
else{
    .....
}
```

- switch

```js
let fruit = '포도';

switch (fruit){
    case '사과':
        console.log(fruit + ' 선택');
        break;
    case '포도':
        console.log(fruit + ' 선택');
        break;
    case '수박':
        console.log(fruit + ' 선택');
        break;
    default:
        console.log('도데체 뭘 고른거야');
        break;
}
```

---
### 반복문

- for
```js
let x;
// 초깃값, 조건, 증가
// 조건식이 true일때 까지 반복
// false면 나가진다.

// 증감식에  x += 2 일 경우 예상 출력 값을 적어보자.
for(x = 1; x <= 5; x++){
    console.log(x);
}
```
- while
```js
let x = 1;
let result = 0;
// 조건식이 true일때 실행
while (x <= 5){
    result = x * x;
    console.log(x + ' * ' + x + ' = ' + result);
    x++; //마지막에 꼭 증감
}
```
- break , continue
```js
let x;
// break를 사용하면 반복문을 중단 시킬 수 있다.
// continue를 사용하면, 실행를 제외할 수 있다.
//예상 출력을 적어보자
for(x = 1; x <= 10; x++){
    if (x == 7){
        break;
    }
    if (x == 4 || x == 1){
        continue; //여긴 스팁
    }
    console.log(x);
}
```

- prompt

```js
// 사용자에게 입력을 받을 수 있다.
let name = prompt('이름을 입력하시오. ');
console.log(name);
// document.write(name); 웹페이지에 출력하려면 이 명령어를 사용한다.
```

- 예제문제
    - 정해진 id가 있다.
    - 숫자, id (string) 입력 받는다.
    - 숫자만큼 반복해서 사용자에게 id를 입력 받는다.
    - 만약 정해진 id가 맞다면 통과 출력.
    - 아니면 틀린 문자열 출력하고 반복