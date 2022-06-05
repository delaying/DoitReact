import Axios from "axios"

//응답 스키마
{
    //'data'는 서버가 제공하는 응답.
    data:{}
    //'status'는 HTTP 상태코드
    status:200,
    //'statusText'는 HTTP 상태 메시지
    statusText'OK',
    //'headers'는 HTTP 헤더.
    // 모든 헤더 이름은 소문자이며, 괄호 표기법을 사용하여 접근할 수 있음.
    //예시: 'respponse.headers['content-type']
    headers{}
    //'config'는 요청을 위해 'Axios'가 제공하는 구성.
    config:{}
    //'request'는 이번 응답으로 생성된 요청
    //이것은 node.js에서 마지막 ClientRequest 인스턴스임.
    //브라우저에서는 XMLHttpRequest임.
    request:{}
}

//then을 사용하면, 아래와 같은 응답을 받음.
Axios.get('/user/12345')
.then(function (response){
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
})

//전역 Axios 기본값
Axios.defaults.baseURL='http://api.example.com';
