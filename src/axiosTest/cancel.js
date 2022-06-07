import Axios from 'axios';

//요청 취소
const CancelToken = Axios.CancelToken;
const source = CancelToken.source();

Axios.get('/user/12345', {
  cancelToken: source.token,
}).catch(function (thrown) {
  if (Axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    //에러 핸들링
  }
});

Axios.post(
  '/user/12345',
  {
    name: 'new name',
  },
  {
    cancelToken: source.token,
  },
);
//요청 취소하기(메시지 파라미터는 옵션)
source.cancel('Operation canceled by the user');

//실행자 함수를 cancelToken 생성자에 전달하여, 취소 토큰을 만들 수 있음.
let cancel;

Axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    //실행자 함수는 취소 함수를 파라미터로 받음.
    cancel = c;
  }),
});

//요청 취소하기.
cancel();
