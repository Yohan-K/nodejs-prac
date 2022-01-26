/**
 * require('./dep1') -> require('./dep2') -> require('./dep1')
 * 이러한 현상을 순환참조(circular dependency)라고 부른다.
 * dep1의 module.exports는 함수가 아닌 빈 객체로 표시된다. 
 */
const dep1 = require('./dep1');
const dep2 = require('./dep2');
dep1();
dep2();


