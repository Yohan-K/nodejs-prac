// 프로미스를 쉽게 설명하자면, 실행은 바로 하되 결괏값은 나중에 받는 객체이다. 
// 즉, new Promise는 바로 실행되지만, 결괏값은 then을 붙였을 때 받게 된다.
// 프로미스 내부에서 resolve가 호출되면 then이 실행되고 reject가 호출되면 catch가 실행된다. finally는 성공/실패 여부와 상관없이 실행된다.
const condition = true;
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});
// 다른 코드가 들어갈 수 있음.
promise
    .then((message) => {
        console.log(message); // 성공(resolve)한 경우 실행
    })
    .catch((error) => {
        console.error(error); // 실패(reject)한 경우 실행
    })
    .finally(() => {
        console.log('무조건');  // 끝나고 무조건 실행
    });