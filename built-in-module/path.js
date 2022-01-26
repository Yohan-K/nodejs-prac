/**
 * path 모듈이 필요한 이유는 운영체제별로 경로 구분자가 다르기 때문이다.
 * 윈도 타입 - C:\Users\yohank
 * [POSIX 타입(UNIX 기반) - mac, linux] - /home/yohank
 */
const path = require('path');
const string = __filename;

console.log('path.sep:', path.sep); // 경로 구분자(윈도 \, POSIX /)
console.log('path.delimiter:', path.delimiter); // 환경 변수 구분자(윈도 ;, POSIX :)
console.log('--------------------------------');
console.log('path.dirname():', path.dirname(string)); // 폴더 경로
console.log('path.extname():', path.extname(string)); // 확장자
console.log('path.basename():', path.basename(string)); // 파일의 이름(확장자 포함)
console.log('path.basename - extname:', path.basename(string, path.extname(string)));
console.log('--------------------------------');
console.log('path.parse()', path.parse(string));
console.log('path.format():', path.format({
    dir: '/Users/yohank',
    name: 'path',
    ext: '.js'
}));
console.log('path.normalize():', path.normalize('///Users///yohank///path.js')); // 정상적인 경로로 변환
console.log('--------------------------------');
console.log('path.isAbsolute(절대경로):', path.isAbsolute('/Users/yohank')); // 절대경로 true/false
console.log('path.isAbsolute(절대경로):', path.isAbsolute('./home'))
console.log('--------------------------------');


