/**
 * 양방향 암호화 - 암호화된 문자열을 복호화할 수  있으며, 키(열쇠)가 사용된다.
 * 암호화할 때 사용한 키와 같은 키를 사용해야 한다.
 */
const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyz123456'; // 32byte
const iv = '1234567890123456'; // 16byte

const cipher = crypto.createCipheriv(algorithm, key, iv); // 암호화
let result = cipher.update('암호화할 문장', 'utf8', 'base64'); // utf8, base64
result += cipher.final('base64'); // 출력 결과물의 인코딩
console.log('암호화:', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv); // 복호화
let result2 = decipher.update(result, 'base64', 'utf8'); // base64, utf8
result2 += decipher.final('utf8');
console.log('복호화:', result2);

/**
 * 간단하게 암호화하고 싶다면 npm 패키지인 crypto-js를 추천
 */