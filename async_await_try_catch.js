// Promise 기본형
function findAndSaveUser(Users) {
    Users.findOne({})
        .then((user) => {
            user.name = 'zero';
            return user.save();
        })
        .then((user) => {
            return Users.findOne({ gender: 'm' });
        })
        .then((user) => {
            // 생략
        })
        .catch(err => {
            console.error(err);
        })
};

// async/await
// 함수 선언부를 일반 함수 대신 async function으로 교체한 후, 프로미스 앞에 await를 붙인다.
// 이제 함수는 해당 프로미스가 resolve될 때까지 기다린 뒤 다음 로직으로 넘어간다.
// 에러를 처리하는 부분(프로미스가 reject된 경우)이 없으므로 추가 작업(try/catch)이 필요하다.
async function findAndSaveUser(Users) {
    try {
        let user = await Users.findOne({}); 
        user.name = 'zero'; // await Users.findOne({})이 resolve될 때까지 기다린 다음에 user 변수를  초기화한다.
        user = await user.save();
        user = await Users.findOne({ gender: 'm' });
    } catch (error) {
        console.error(error);
    }
}