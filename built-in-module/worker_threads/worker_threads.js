/**
 * 노드에서 멀티 스레드 방식으로 작업하는 방법
 * 메인 스레드(기존에 동작하던 싱글 스레드를 메인 스레드 또는 부모 스레드라고 부른다.)
 */
const {
    Worker, isMainThread, parentPort,
} = require('worker_threads');

if (isMainThread) { // 부모(메인 스레드)일 때
    const worker = new Worker(__filename);
    worker.on('message', message => console.log('from worker', message)); // 'on' 이벤트 리스너로 워커의 메시지를 받을 준비
    worker.on('exit', () => console.log('worker exit'));
    worker.postMessage('ping'); // 워커에 데이터를 보냄.
} else { // 워커일 때
    parentPort.on('message', (value) => { // 'on' 이벤트 리스너로 부모의 메시지를 받을 준비
        console.log('from parent', value);
        parentPort.postMessage('pong'); // 부모에 메시지를 보냄
        parentPort.close();
    });
}
