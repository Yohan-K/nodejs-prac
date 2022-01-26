// 프로미스가 여러 개 있을 때 Promise.all에 넣으면 모두 resolve될 때까지 기다렸다가 then으로 넘어간다.
// Promise 중 하나라도 reject가 되면 catch로 넘어간다.
const promise1 = Promise.resolve('성공1'); // 즉시 resolve하는 프로미스를 만드는 방법 ex) Promise.reject도 있음.
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2 ])
    .then((result) => {
        console.log(result); // ['성공1', '성공2']
    })
    .catch((error) => {
        console.error(error);
    });