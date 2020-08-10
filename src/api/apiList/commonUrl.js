import { commonIp } from '@/assets/js/baseIp';

const base = `http://${commonIp}/unicom-iot`;

export default {
  login: `${base}/auth/token/platform `, // 登陆
};
