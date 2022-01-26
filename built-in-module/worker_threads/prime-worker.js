/**
 * 워커 스레드를 사용하여 2부터 1,000만까지의 숫자 중에 소수가 모두 몇 개 인지 구하는 작업
 * 여덟 개의 스레드가 일을 나눠서 처리하도록 구현. 워커 스레드를 8개 사용했다고 8배 빨라지는게 아니다!
 */
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

const min = 2;

let primes = [];

function findPrimes(start, range) {
    let isPrime = true;
    let end = start + range;
    for (let i = start; i < end; i++) {
        for (let j = min; j < Math.sqrt(end); j++) {
            if (i !== j && i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
        isPrime = true;
    }
}

if (isMainThread) {
    const max = 10000000;
    const threadCount = 8;
    const threads = new Set();
    const range = Math.ceil((max - min) / threadCount);
    let start = min;
    console.time('prime');
    for (let i = 0; i < threadCount - 1; i++) {
        const wStart = start;
        threads.add(new Worker(__filename, { workerData: { start: wStart, range } }));
        start += range;
    }
    threads.add(new Worker(__filename, { workerData: { start, range: range + ((max - min + 1) % threadCount) } }));
    for (let worker of threads) {
        worker.on('error', (err) => {
            throw err;
        });
        worker.on('exit', () => {
            threads.delete(worker);
            if (threads.size === 0) {
                console.timeEnd('prime');
                console.log(primes.length);
            }
        });
        worker.on('message', (msg) => {
            primes = primes.concat(msg);
        });
    } 
} else {
    findPrimes(workerData.start, workerData.range);
    parentPort.postMessage(primes);
}
/**
 * 스레드를 생성하고 스레드 사이에서 통신하는 데 상당한 비용이 발생하므로, 이 점을 고려해서 멀티 스레딩을 해야 한다.
 * 잘못하면 멀티 스레딩을 할 때 싱글 스레딩보다 더 느려지는 현상도 발생할 수 있다.
 */