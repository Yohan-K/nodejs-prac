/**
 * 단방향 암호화 - 한 번 암호화하면 원래 문자열을 찾을 수 없다. 복호화할 수 없으므로 암호화라고 표현하는 대신 '해시 함수'라고 부른다.
 * 단방향 암호화 알고리즘은 주로 '해시 기법'을 사용한다. '해시 기법'이란 어떠한 문자열을 고정된 길이의 다른 문자열로 바꿔버리는 방식이다.
 * e.g. abcdefgh -> qvew
 * e.g. ijklm -> zvsf
 * 입력 문자열의 길이는 다르지만, 출력 문자열의 길이는 같다.
 */
const crypto = require('crypto');

console.log('base64:', crypto.createHash('sha512').update('abcd1234').digest('base64'));
console.log('hex:', crypto.createHash('sha512').update('abcd1234').digest('hex'));
console.log('base64:', crypto.createHash('sha512').update('abcd5678').digest('base64'));

/**
 * createHash - 사용할 해시 알고리즘을 넣는다. ex) md5, sha1, sha256, sha512, sha3(md5, sha1은 이미 취약점 발견되었다.)
 * digest - 인코딩할 알고리즘을 넣는다. ex) base64, hex, latin1(base64가 결과 문자열이 가장 짧아 애용된다.)
 */
