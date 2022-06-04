import Axios from 'axios';

//Post 요청
Axios.post('/user', {
  firstName: 'Fred',
  lastName: 'flintstone',
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

//axios에 해당 config을 전송하면 요청이 가능함.
//Post 요청 전송
Axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone',
  },
});
//node.js에서 GET 요청으로 원격 이미지 가져오기
Axios({
  method: 'get',
  url: 'http://bit.ly/2mt',
  responseType: 'stream',
}).then(function (response) {
  response.pipe(fs.createWriteStream('ada_lovelace.jpg'));
});
//GET요청 전송(기본값)
Axios('user/1234');

//인스턴스 만들기
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: { 'x-custome-header': 'foobar' },
});
