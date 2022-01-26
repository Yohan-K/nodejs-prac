const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
   if (err) {
       throw err;
   } 
   console.log(data);
   console.log(data.toString());
});
/**
 * 결과물은 버퍼(Buffer) 형식으로 제공되기 때문에 toString()으로 치환해준다.
 * fs는 기본적으로 콜백 형식의 모듈이므로 실무에서 사용하기 어렵다. 따라서 fs 모듈을 '프로미스' 형식으로 바꿔주는 방법을 사용한다.
 */