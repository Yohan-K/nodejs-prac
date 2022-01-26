/**
 * 주소 구분 방법
 * WHATWG(웹 표준을 정하는 단체의 이름)과 예전부터 노드에서 사용하던 방식의 url
 * Node.js 교과서 p119 참고
 */
const url = require('url');

const { URL } = url; // 이 방식이 WHATWG의 url이다. WHATWG에만 있는 username, password, origin, searchParams 속성이 존재한다.
const myURL = new URL('http://gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));
console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
const parsedUrl = url.parse('http://gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('url.parse():', parsedUrl); // WHATWG 방식과 비교하면 username, password 대신 auth 속성이 있고, searchParams 대신 query가 있다.
console.log('url.format():', url.format(parsedUrl));

/**
 * 노드의 url 형식을 사용해야 할 경우 -  host 부분 없이 pathname 부분만 오는 주소인 경우(e.g. /book/bookList.apsx)에는 WHATWG 방식이 처리할 수 없다.
 * WHATWG 방식 - search 부분을 searchParams라는 특수한 객체로 반환하므로 유용하다. (e.g. searchParams.js 참고)
 */