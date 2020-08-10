import axios from 'axios';
import qs from 'qs';
import store from '../store';

export const postRequest = (url, params) => axios({
  method: 'post',
  url,
  data: qs.stringify(params),
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: store.getters.token ? `Bearer ${store.getters.token}` : '',
  },
});
export const postJsonRequest = (url, params) => axios({
  method: 'post',
  url,
  data: params,
  headers: {
    'Content-Type': 'application/json',
    Authentication: 'SfDaPingAPI',
  },
});
export const postDeviceRequest = (url, params) => axios({
  method: 'post',
  url,
  data: params,
});
export const postSpliceRequest = (url, params) => axios({
  method: 'post',
  url: `${url}/${params.join('/')}`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: store.getters.token ? `Bearer ${store.getters.token}` : '',
  },
});
export const uploadFileRequest = (url, params) => axios({
  method: 'post',
  url,
  data: params,
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: store.getters.token ? `Bearer ${store.getters.token}` : '',
  },
});
export const putRequest = (url, params) => axios({
  method: 'put',
  url,
  data: qs.stringify(params),
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: store.getters.token ? `Bearer ${store.getters.token}` : '',
  },
});
export const deleteRequest = url => axios({
  method: 'delete',
  url,
});
export const getRequest = (url, params) => axios.get(url, {
  params,
  headers: {
    Authorization: store.getters.token ? `Bearer ${store.getters.token}` : '',
  },
});
export const getImgRequest = (url, param) => axios.get(url, {
  params: param,
  responseType: 'arraybuffer',
  headers: {
    'Content-Type': 'multipart/form-data;charset=UTF-8',
    Authorization: store.getters.token ? `Bearer ${store.getters.token}` : '',
  },
});
export const getShuLanApi1_1 = (url, params) => axios.get(url, {
  params,
  headers: {
    'X-AURORA-APPKEY': '9ed42c868a864e8f9b362ed0a84266a6',
    'X-AURORA-SIGN': '78e761d3940ed93fb3ecd828fb97fec8fd8e67642f02ce0bc5cf02a7cc529681',
    'X-AURORA-TIMESTAMP': '1577776385001',
  },
});
// export const getShuLanApi1_2 = (url, params) => axios.post(url, {
//   data: qs.stringify(params),
//   headers: {
//     'X-AURORA-APPKEY': '66a32014953a473d9c40567e57fe1dcc',
//     'X-AURORA-SIGN': '845b1334a3188a498dfadf39ba105aea95c9b320382ab3a7046a596d6cbb8aa5',
//     'X-AURORA-TIMESTAMP': '1577776807672',
//   },
// });
export const getShuLanApi1_2 = (url, params) => axios({
  method: 'post',
  url,
  data: params,
  headers: {
    'Content-MD5': 'JDEkdjJNTnZ5QzYkTVFta0NNY2ZYWUh6cjBzRHpsdURrLg==',
    'X-AURORA-APPKEY': '13690f5ed2f14ccab048647a60fb585f',
    'X-AURORA-SIGN': 'ZTYzNzAxZWQ4MDE3Y2ZiMTU2ZmFiNjUwZTNlZWEzNjQ0YmUzYmRkOWVjOTU5YzMzMDQ5ODhjZWNiMjY2NzE5Yg==',
    'X-AURORA-TIMESTAMP': '1578731759471',
  },
});
export const getShuLanApi1_3 = (url, params) => axios.get(url, {
  params,
  headers: {
    'X-AURORA-APPKEY': '251bb054063b42128430d27410341d26',
    'X-AURORA-SIGN': '1566c8b1394cff396cf5fd05937c8c6e94eca9c368f4abfaa83960890e48ab05',
    'X-AURORA-TIMESTAMP': '1577776958864',
  },
});
export const getShuLanApi1_4 = (url, params) => axios({
  method: 'post',
  url,
  data: params,
  headers: {
    'Content-MD5': 'JDEka2tLL0lhUDQkdTVrUHlPMGdjcFMwZmlGMWtKTFdRMQ==',
    'X-AURORA-APPKEY': 'aad5a067895f4661b4293bc53c9472a0',
    'X-AURORA-SIGN': 'YzQyMzgzZjFiYWQxYWMwMTE3ZWU1OGNmOGM1ZGVkYjhjMjAzNTIyYmFiYzBlZWJhODlmMzc5ZTUyMDk3NThiMg==',
    'X-AURORA-TIMESTAMP': '1578733909788',
  },
});
export const getShuLanApi1_5 = (url, params) => axios.get(url, {
  params,
  headers: {
    'X-AURORA-APPKEY': 'd28a32303c3543dea33e592344dd234b',
    'X-AURORA-SIGN': '8775eaabbb04ca5c3c1d8f592c245fd16e543b144e893fbb7aa7c7809cc8efd8',
    'X-AURORA-TIMESTAMP': '1577777238727',
  },
});
// export const getShuLanApi1_6 = (url, params) => axios.get(url, {
//   params,
//   headers: {
//     'X-AURORA-APPKEY': 'e026dfe095084891b8b5993c353ce08d',
//     'X-AURORA-SIGN': '0339893300d16a73dc104b68110921c440a069d7421168853264f31c463b30db',
//     'X-AURORA-TIMESTAMP': '1578040615595',
//   },
// });
export const getShuLanApi1_6 = (url, params) => axios({
  method: 'post',
  url,
  data: params,
  headers: {
    'Content-MD5': 'JDEkMk9FcXNqVWQkZktGV2p5Ry5PVnljcy9EdXo4TlBRLw==',
    'X-AURORA-APPKEY': '28921c7167114eaab5972b0468f3ba67',
    'X-AURORA-SIGN': 'ZjAwMjcyMDhkNjBlNmRmMDEzMTY0ZDNjNDE1NjhiYjFlODA3NzgyZTdjOWRjNzg5YjdjYjg3ZWJiYTg4OGU5Yg==',
    'X-AURORA-TIMESTAMP': '1578901691200',
  },
});
export const postReqWithHeaders = (url, params, headers) => axios({
  method: 'post',
  url,
  data: params,
  headers,
});
