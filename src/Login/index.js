import axios from 'axios';
import FormData from 'form-data';

// 끝에 반점 찍는것은 관례..? 수정할때 뒤에 반점찍으면 수정줄로 인식되기때문..
export const instance = axios.create({
  baseURL: 'http://localhost:8080/api',
});

//비동기함수 async
//호ㅣ원가입 정보를 내내 기다릴수없기때문.
async function signup(account) {
  const formData = new FormData();
  formData.append('name', account.name);
  formData.append('email', account.email);
  formData.append('password', account.password);
  formData.append('profileImage', account.profileImage);
  const response = await instance.post('/auth/signup', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
}

export { signup };
