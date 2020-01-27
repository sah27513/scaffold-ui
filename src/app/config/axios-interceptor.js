import axios from 'axios';

const setupAxiosInterceptors = onUnauthenticated => {
  const TIMEOUT = 30 * 60 * 1000;
  axios.defaults.timeout = TIMEOUT;
  axios.defaults.baseURL = 'api/v1/';

  const onRequestSuccess = config => {
    const oauth = document.getElementById('oauth').textContent;

    // EUAID
    const element = document.getElementById('uid');
    const uid = element.value ? element.value : element.innerHTML;

    // IC Profile
    const profile = document.getElementById('token').textContent;
    console.log(uid);

    // Ensure that OAUTH Has been injected
    // config.headers.Authorization = `JWT ${token}`;
    config.headers.Authorization = `Bearer ${oauth}`;
    config.headers['X-IC-PROFILE'] = profile;
    config.headers.uid = uid;
    config.headers.Pragma = 'no-cache';
    return config;
  };
  const onResponseSuccess = response => response;
  const onResponseError = err => {
    // if (status === 403 || status === 401) {
    //   onUnauthenticated();
    // }
    return Promise.reject(err);
  };
  axios.interceptors.request.use(onRequestSuccess);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;
