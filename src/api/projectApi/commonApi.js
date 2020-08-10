import { postJson } from '../apiFun';

export const requestLogin = params => postJson('login', params);// 登录
