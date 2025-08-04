## Welcome to Java Script

### 객체와 배열

- 객체는 데이터의 집합이다.
```js
let person = {
    name : 'bormi';
    age : 20;
    sayInfo : function(){
        console.log('안녕 나는 ' + name + ' 이야.');
        return;
    }
}

console.log('나이 : ' + person.name);
person.sayInfo();
```

- 하나하나 일일이 지정할 수 도 있지만, 틀로 찍어낼 수 도 있다.

```js
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let p1 = new Person("보르미", 20);
let p2 = new Person("루지", 25);

console.log(p1.name); // "보르미"
console.log(p2.age);  // 25

```

- new 키워드로 Person이라는 객체를 마음껏 만들 수 있다.

---
### 배열

- 데이터 여러개의 묶음이다.

```js
let arrayName = new Array (10, 20, '고기', 0.1); //객체로 직접 선언    
let food = ['김치','고기','소금빵']; // 그냥 안에 넣기 
```
#### 배열의 첫 원소는 0이다.

- 배열은 쓸 수 있는 몇가지 메소드가 있다.
    - name.length : 길이를 반환한다.
    - name.sort() : 가나다순으로 정렬한다.
    - name.join('-') : 배열 안에 있는 것들을 '-' 로 연결한다. 바꿀 수 있다.
    - name.pop() : 마지막 원소를 제거한다.
    - name.push(원소) : 마지막에 원소를 추가한다. 
    - name.shift() : 첫 원소를 제거한다.
    - name.unshift() : 첫 위치에 원소를 추가한다.
    - name.splice(index1, index2, '데이터') : 1부터 2까지 지우고, 1에 데이터를 추가한다.
    - name.slice(1, 2) : 1부터 2까지의 원소를 반환한다.
    - name.concat(name2) : name에 name2를 붙인다
