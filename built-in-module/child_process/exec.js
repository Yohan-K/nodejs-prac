/**
 * 노드에서 다른 프로그램을 실행하고 싶거나 명령어를 수행하고 싶을 때 사용하는 모듈 
 * ex) 다른 언어의 코드(e.g. 파이썬)를 실행하고 결괏값을 받을 수 있다.
 * 이름이 child_process(자식 프로세스)인 이유는 현재 노드 프로세스 외에 새로운 프로세스를 띄워서 명령을 수행하고, 노드 프로세스에 결과를 알려주기 때문이다.
 */
const exec = require('child_process').exec;

var process = exec('ls');

process.stdout.on('data', function(data) { // data 이벤트 리스너에 버퍼 형태로 전달된다.
    console.log(data.toString());
}); // 실행 결과

process.stderr.on('data', function(data) {
    console.error(data.toString());
}); // 실행 에러

