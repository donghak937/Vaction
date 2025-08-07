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
// 음수면 뒤에서 부터
```
- str.substring(n1, n2) : 문자열 자르기
```js
let str = '나는 고기가 좋다.';
console.log(str.substring(n1, n2)); // 고기
// 자르기 시작할 위치 부터 ~ 자르고 싶은 문자 다음 문자까지 반환
// n2가 없으면 n1부터 끝까지
// 음수 지원 X
// 4, 2 이런식으로 숫자가 안맞으면 자동으로 변경
```
- str.substr(n1, n2) : 문자열 자르기
```js
let str = '나는 고기가 좋다.';
console.log(str.substring(n1, n2)); // 고기
// 자르기 시작할 위치 부터 ~ 갯수 반환
```
- str.replace(n1, n2) : 문자열 변경하기
```js
let str = '나는 고기가 좋다.';
console.log(str.replace('고기','양고기')); // 나는 양고기가 좋다.
```
- str.toUpperCase(), str.toLowerCase(); : 대소문자 변경
```js
let str = 'aBcDeF';
console.log(str.toUpperCase()); // ABCDEF
```
- str.concat(str1, str2....) : 문자열 합치기
```js
let str = 'abc';
let str1 = '123';
let str2 = 'ㄱㄴㄷ';
console.log(str.concat(str1, str2)); // abc123ㄱㄴㄷ
```
- str.trim() : 처음과 끝의 공백 제거
```js
let str = 'as      ';
console.log(str.trim()); // as
```
- str.split('word') : 문자열을 word 기준으로 나누어서 배열에 저장
```js
let str = '서 보 르 미';
let part = str.split(' ');
for(int i = 0 ; i < part.length; i++){
    console.log(part[i]);
    // 서
    // 보
    // 르
    // 미
}
```
---
### 예제 문제

1. 연락처를 입력 받고, 마지막 네 번호를 ****로 만들어라

2. 사용자의 이메일에 @가 들어갔는지 확인하고, 없으면 다시 입력하라고 말한다.





