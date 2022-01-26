const crypto = require('crypto');
/**
 * sha512로 변환된 결괏값을 다시 sha512로 변환하는 과정을 10만 번 반복하는 로직
 */
crypto.randomBytes(64, (err, buf) => { // randomBytes 메서드로 64바이트 길이의 문자열을 만든다. 이것이 'salt' 이다.
    const salt = buf.toString('base64'); 
    console.log('salt:', salt);
    crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => { // 비밀번호, salt, 반복 횟수, 출력 바이트, 해시 알고리즘
        console.log('password:', key.toString('base64'));
    });
});

/**
 * salt를 잘 보관하고 있어야 비밀번호를 찾을 수 있다.
 * crypto.randomBytes와 crypto.pbkdf2 메서드는 내부적으로 스레드풀을 사용해 멀티 스레딩으로 동작한다.
 * 보안 등급: pbkdf2 < bcrypt, scrypt
 */