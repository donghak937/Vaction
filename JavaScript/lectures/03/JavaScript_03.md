## Welcome to Java Script

### 표현식 + 연산자

- 산술 연산자
    - \+ : 더하기
    - \- : 빼기
    - \* : 곱하기
    - / : 몫
    - % : 나머지

- 대입 연산자
    - = : 왼쪽은 오른쪽이다.
    - \+= : 왼쪽에 오른쪽 더한다.
    - \-= : 왼쪽에 오른쪽 뺀다.
    - *= : 왼쪽에 오른쪽 곱한다.
    - /= : 몫을 구한다.
    - %= : 나머지를 구한다.

- 비교 연산자
    - == : 같다.
    - <, > : 왼쪽 기준 크다 작다.
    - <= >=  : 같거나 크거나 작다.

- 논리 연산자
    - || : OR 둘 중 하나라도 true면
    - && : AND 둘다 true면
    - ! : true면이 아니라 false면

- 증감 연산자
    - ++ : 1 늘린다.
    - -- : 1 줄인다.

- 삼항 연산자
    - (조건식) ? 시행1 : 실행2; : 조건이 true면 1, 아니면 2를 실행한다.

---
```js
let x = 10, y = 4, z;

z = x + y;
console.log('x + y = ' + z); // x + y = 14;

z = x * y;
console.log('x * y = ' + z); // x + y = 40;

z = x % y;
console.log('x % y = ' + z); // x + y = 2;

x = 'Bo';
y = 'rmi';
console.log(x + y); // Bormi;
```


```js
let x = 20;

console.log('x = ' + x);

x += 5;
console.log('x += 5 -> x = ' + x); // x += 5 -> x = 25

x *= 5;
console.log('x *= 5 -> x = ' + x); // x *= 5 -> x = 125

x %= 5;
console.log('x %= 5 -> x = ' + x); // x %= 5 -> x = 0
```

- 사각형 넓이 구하는 프로그램을 만들어보자.

- 비교 연산자 사용법.


```js
let x = 5, y = 8;

console.log(x == y); // false
console.log(x === y); // false

console.log(x < y); // true
console.log(x > y); // false

console.log(x === 5); // true
console.log(x === '5'); // false
```

- 논리 연산자 사용법.


```js
let x = true, y = false;

console.log(x || y); // true
console.log(x && y); // false
console.log(!x); // false
```

- 증감 연산자 사용법.


```js
let x = 10;

console.log(x++); // 10
console.log(--x); // 12
```

- 삼항 연산자 사용법.


```js
let x = 10, y = 5;

console.log(x > y ? 'x가 더 큼' : 'y가 더 큼'); // x가 더 큼
```

- 비만도 판정 프로그램 만들기.
    - 키 : 170, 몸무게 : 50, 정상 bmi : 23
    - 삼항 연산자를 사용할 것
    - .toFixed(0) 으로 소숫점 0자리로 출력
    - bmi = kg / (cm * cm);

- 프로그램 결과 예측
```js
let x = 1, y = 1, z = 1;
y = x++;
console.log(x + ' ' + y);

z = ++x;
console.log(x + ' ' + z);

y +=z
console.log(y + ' ' + z);
```