import { POST, PUT, DELETE, GET } from "./methods";
import callApi from "./apiCalls";



import "react-toastify/dist/ReactToastify.css";

function tokenGetter() {
  let jwtToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY0Njg3Mzk1LCJqdGkiOiI3YmE2ZDUxZjZkZGU0ZjU4OGVlODBhYmIzZDJkNTEyZiIsImlkIjoiZDhmZDYyNTEtOTIwNC00ODljLWIwMDctNWY3N2E2MGYxYjlhIn0.xjRJ7--IVfTcag2An0FvZR7fLucfJWVrzaifNJUrwRM'
  return jwtToken;
}
// https://services.worke.io/crm_service/Contacts

export const getTableData = async () => {
  return await callApi('crm_service/Contacts',{}, GET);
};
export const getTableDataById = async (id) => {
  return await callApi(`/crm_service/Contacts?id=${id}`,{}, GET);
};
export const postTableData = async (data) => {
  return await callApi('/crm_service/Contacts', data, POST);
};
export const updateTableData = async (data) => {
  return await callApi('crm_service/Contacts', data, PUT);
};

export const DeleteTableData = async (id) => {
  return await callApi(`/crm_service/Contacts?id=${id}`, {}, DELETE);
};
















