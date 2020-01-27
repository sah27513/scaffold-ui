import { ajax } from 'rxjs/ajax';

export const get = uid => {
  return url => {
    return ajax.getJSON(`http://127.0.0.1:9000/api/v1/${url}`, {
      uid
    });
  };
};
