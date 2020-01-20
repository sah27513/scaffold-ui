import { toast } from 'react-toastify';

const addErrorAlert = (message, key, data) => {
  key = key ? key : message;
  toast.error(data);
};

export default () => next => action => {
  /* The notification middleware serves to dispatch the initial pending promise to
   * the promise middleware, but adds a `then` and `catch. */
  return next(action)
    .then(response => {
      if (action.meta && action.meta.successMessage) {
        toast.success(action.meta.successMessage);
      } else if (response && response.action && response.action.payload && response.action.payload.headers) {
        const headers = response.action.payload.headers;
        let alert = null;
        let alertParams = null;

        // Map over the headers to determine an alert
        Object.entries(headers).forEach((k, v) => {
          if (k.endsWith('app-alert')) {
            alert = v;
          } else if (k.endsWith('app-params')) {
            alertParams = v;
          }
        });

        // If there is an alert, show the alert
        if (alert) {
          const alertParam = alertParams;
          toast.success(alertParam);
        }
      }
      return Promise.resolve(response);
    })
    .catch(error => {
      if (action.meta && action.meta.errorMessage) {
        toast.error(action.meta.errorMessage);
      } else if (error && error.response) {
        // Get the Response and data
        const response = error.response;
        const data = response.data;

        if (!(response.status === 401 && (error.message === '' || (data && data.path && data.path.includes('/api/account'))))) {
          switch (response.status) {
            // connection refused, server not reachable
            case 0:
              addErrorAlert('Server not reachable', 'error.server.not.reachable');
              break;

            case 400:
              break;

            case 404:
              addErrorAlert('Not found', 'error.url.not.found');
              break;

            default:
              if (data !== '' && data.message) {
                addErrorAlert(data.message);
              } else {
                addErrorAlert(data);
              }
          }
        }
      } else if (error && error.message) {
        toast.error(error.message);
      } else {
        toast.error('Unknown error!');
      }
      return Promise.reject(error);
    });
};
