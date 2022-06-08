import Axios from 'axios';

//Get : 서버에서 어떤 데이터를 가져와서 보여주는 용도
Axios.get('url주소', [, config]);

//Post : data객체는 본문으로 보낼 데이터, 주소창에 쿼리가 남지 않으므로 get 보다 안전함.
Axios.post('url주소', { data객체 }, [, config]);
