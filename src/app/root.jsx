import { hot } from 'react-hot-loader/root';
import { setConfig } from 'react-hot-loader';
import AppRouter from 'app/components/routes/Router';

setConfig({
  showReactDomPatchNotification: false
});

export default hot(AppRouter);
