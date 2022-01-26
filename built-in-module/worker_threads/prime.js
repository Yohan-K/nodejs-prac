/**
 * 워커 스레드를 사용하지 않고 2부터 1,000만까지의 숫자 중에 소수가 모두 몇 개 인지 구하는 작업
 * 소수를 구하는 작업은 연산이 많이 들어가는 대표적인 작업이다.
 */
const min = 2;
const max = 10000000;
const primes = [];

function generatePrimes(start, range) {
    let isPrime = true;
    const end = start + range;
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

console.time('prime');
generatePrimes(min, max);
console.timeEnd('prime');
console.log(primes.length);

/**
 * 상당한 시간이 소요된다.
 */