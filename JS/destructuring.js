let candyMachine = {
    status:{
        name: 'node',
        count: 5,
    },
    getCandy(){
        this.status.count--;
        return this.status.count;
    }
};

const {status,getCandy} = candyMachine; // 객체의 비구조화 할당

console.log(status);

console.log(getCandy);  // getCandy 가 this를 못찾아서 오류남
//getCandy가 candyMachine이랑 상관이 없어짐
//getCandy.call(candyMachine); this를 바꿔줌

console.log(candyMachine.getCandy());
console.log(status);

const array = ['nodejs',{},10,20,true];
const [node,obj,...bool] = array; // 배열의 비구조화 할당

console.log(node);
console.log(obj);
console.log(bool);

const m = (x,...y) => console.log(x,y);
m(5,6);
m(5,6,7,8,9);

const p = (...rest) => console.log(rest);
// rest 는 배열이다.
p(1,2,3,4,5);

const x = { a:1 , b:2 };
let y = x;  // y는 x를 가리키고 있다.
x.a = 3;
console.log(y);
y.a = 5;
console.log(x); // y값 바꾸니까 x값도 바뀜
console.log(y);