let name = 'Bormi';

function myFunction(){
    let name = 'Johnson';
    console.log(name);
}

myFunction();
console.log(name);


let name2 = 'Bormi';

function myFunction2(){
    let name2 = 'Luge';
    console.log('지역 변수 : ' + name2);
}

myFunction2();
console.log('전역 변수 : ' + name2);