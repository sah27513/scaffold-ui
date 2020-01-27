import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  cmsNavbar: {
    alignItems: 'center',
    background: '#112e50',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    userSelect: 'none'
  },
  logo: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  left: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '40%'
  },
  text1: {
    color: '#b5bec8',
    fontWeight: 'bolder',
    fontSize: '2.1rem'
  },
  text2: {
    color: 'white',
    fontSize: '2.1rem'
  },
  text3: {
    color: 'white',
    fontSize: '2.1rem'
  },
  text4: {
    color: 'white',
    fontSize: '1.17rem'
  },
  center: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  right: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '40%'
  },
  btn: {
    color: 'white',
    cursor: 'pointer',
    fontSize: '1.17rem',
    paddingLeft: '0.93rem',
    paddingRight: '0.93rem',
    userSelect: 'none',
    i: {
      fontSize: '1.05rem'
    }
  }
}));
