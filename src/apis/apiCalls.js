import axios from "axios";

const API_URL = "https://services.worke.io/";

const baseApi = axios.create({
  baseURL: API_URL,
});


function tokenSetter() {

  let jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY4MjQ5NDY4NSwiaWF0IjoxNjc5OTAyNjg1LCJqdGkiOiI5NDg2MjkxY2Q4NDg0OWUxYmY2NDk5MjNiODM0NzI5MSIsImlkIjoiZjE3NTM1MGYtOWZjYS00MjlkLTkxODItOWFjZmMyZGI4ZWVjIiwib3JnYW5pc2F0aW9uIjoiNjczNzhiMzItOWFhZi00ZTViLTk4ODItZDMxNWE1YzcyNmJkIiwidXR5cGUiOiJBRE1JTiIsImRlcHQiOiI2NzM3OGIzMi05YWFmLTRlNWItOTg4Mi1kMzE1YTVjNzI2YmQiLCJyb2xlIjoiIiwicGVybWlzc2lvbnMiOnt9fQ.Jf6vIzN1Nap3xxb2AOaXvFdSPYEKIjcXyB265XXwq1s'
  return jwtToken;
}

export default async function callApi(
  url,
  data = {},
  method = "GET",
) {
  let myUrl = url;

  return await baseApi({
    method: method,
    url: myUrl,
    data,
    headers: {
      Authorization: "Bearer " + tokenSetter(),
    },
  })
    .then(res => {
      // if (res.status === 200) {
      // }
      return { data: res.data, status: res.status };
    })

    .catch(error => {
      if (error.response) {
        if (error?.response.status === 0) {
          return;
        }
       
        return { status: error?.response.status, data: error?.response?.data };
      } else if (error.request) {
      } else {
      }
    });

}
