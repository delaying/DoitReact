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

//인터셉터
//then또는 catch로 처리되기 전에 요청과 응답을 가로챌 수 있음.

//요청 인터셉터 추가하기
Axios.interceptors.request.uese(function(config){
    //요청이 전달되기 전에 작업 수행
    return config;
},function(error){
    //요청 오류가 있는 작업 수행
        return Promise.reject(error);
});

//응답 인터셉터 추가하기
Axios.interceptors.response.use(function (response){
    //2xx 범위에 있는 상태 코드는 이 함수를 트리거함.
    //응답 데이터가 있는 작업 수행
    return response;
},function(error){
    //2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거함.
    //응답 오류가 있는 작업 수행
    return Promise.reject(error);
});

//에러핸들링
Axios.get('/user/12345')
.catch(function (error){
    if(error.response){
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    }else if(error.request){
        console.log(error.request);
    }else{
        console.log('Error', error.message);
    }
    console.log(error.config);
})