// 기존 노드 url 방식
// search 부분을 사용하기 쉽게 객체로 만드는 모듈
const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const query = querystring.parse(parsedUrl.query); // query 부분을 자바스크립트 객체로 분해
console.log('querystring.parse():', query); 
console.log('querystring.stringify()', querystring.stringify(query)); // 분해된 query 객체를 다시 문자열로 조립