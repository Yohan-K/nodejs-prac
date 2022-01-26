// 프로미스를 순차적으로 실행할 수 있는 노드 10 버전부터 지원하는 ES2018문법
// for await of문을 사용해서 프로미스 배열을 순회하는 모습
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async() => {
    for await (promise of [promise1, promise2]) {
        console.log(promise);
    }
})();
