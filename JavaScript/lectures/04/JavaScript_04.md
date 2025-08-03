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
    console.log('x값은 100보다 작습니다.');
}
else{ // 아니면
    console.log('x값은 100보다 큽니다.');
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
for(x = 1; x <= 5; x++){
    
}

```