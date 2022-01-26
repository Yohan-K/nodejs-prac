/**
 * 이벤트 루프가 다른 콜백 함수들보다 microtask를 우선적으로 처리함.
 * 주의! microtask를 재귀 호출하게 되면 이벤트 루프는 다른 콜백 함수보다 microtask를 우선하여 처리하므로 콜백 함수들이 실행되지 않을 수도 있습니다.
 */
setImmediate(() => {
    console.log('immediate');
});
// microtask
process.nextTick(() => {
    console.log('nextTick');
})
setTimeout(() => {
    console.log('timeout');
}, 0);
// microtask
Promise.resolve().then(() => console.log('promise'));

/**
 * 결과
 * nextTick -> promise -> timeout -> immediate
 */