// 처음 then에서 message를 reslove하면 다음 then에서 message2로 받을 수 있다.
// 단, then에서 new Promise를 return해야 다음 then에서 받을 수 있다.
const condition = true;
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});

promise
    .then((message) => {
        return new Promise((resolve, reject) => {
            resolve(message);
        });
    })
    .then((message2) => {
        console.log(message2);
        return new Promise((resolve, reject) => {
            resolve(message2);
        });
    }).then((message3) => {
        console.log(message3); // return new Promise가 없으므로 출력 안됨.
    })
    .catch((error) => {
        console.log(error);
    });