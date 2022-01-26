/**
 * 여러 개의 워커 스레드에 데이터를 넘기는 방법
 */
const {
    Worker, isMainThread, parentPort, workerData,
} = require('worker_threads');

if (isMainThread) {
    const threads = new Set();
    threads.add(new Worker(__filename, { 
        workerData: { start: 1 }, // workerData 속성으로 원하는 데이터를 보낼 수 있음.
    }));
    threads.add(new Worker(__filename, {
        workerData: { start: 2 },
    }));
    for (let worker of threads) {
        worker.on('message', message => console.log('from worker', message));
        worker.on('exit', () => {
            threads.delete(worker);
            if (threads.size === 0) {
                console.log('job done');
            }
        });
    }
} else { // 워커일 때
    const data = workerData;
    parentPort.postMessage(data.start + 100);
}
/**
 * 현재 두 개의 워커가 돌아가고 있으며, 각각 부모로부터 숫자를 받아서 100을 더해 돌려준다.
 * 돌려주는 순간 워커가 종료되어 worker.on('exit')가 실행된다.
 */