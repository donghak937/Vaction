## Welcome to Java Script

### 문자열

- String은 사실 객체다.
```js
// 객체기에 밑에 처럼 선언도 가능하다.
// 1번 처럼 생성하는 것을 리터럴 방식이라고 한다.
let fruit = '사과';
let fruit = new String('사과');
```

- 문자열안에 " 쓰기
```js
let name = '보르미'; // 보르미
let name1 = '\'보르미\''; // '보르미'

// ' , " 글자를 문자열안에 포함하고 싶을 때
//  \ or (한국돈 원 사인)을 먼저 치고 다음에 따음표를 사용한다.
```

- \\' : '
- \\" : "
- \\\ : \
- \\t : tap 한 번

- new로 만든 문자열과 리터럴로 만든 문자열
```js
let food = new String('김치찜');
let food2 = '김치찜';

console.log(food == food2) // true;
console.log(food === food2) // false;
```
---
### 문자열 메소드

- str.length : 문자열의 길이 반환
```js
let str = '12345';
console.log(str.length); // 5
```
- str.indexof(str2) : 문자열의 위치 반환
```js
let str = '12345';
console.log(str.indexof('3')); // 2
console.log(str.indexof('6')); // -1
```
- str.slice(n1, n2) : 문자열 자르기
```js
let str = '나는 고기가 좋다.';
console.log(str.slice(3, 5)); // 고기
// 자르기 시작할 위치 부터 ~ 자르고 싶은 문자 다음 문자까지 반환
```
- str.slice(n1, n2) : 문자열 자르기
```js
let str = '나는 고기가 좋다.';
console.log(str.slice(3, 5)); // 고기
// 자르기 시작할 위치 부터 ~ 자르고 싶은 문자 다음 문자까지 반환
// n2가 없으면 n1부터 끝까지
```


