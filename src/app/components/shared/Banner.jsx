import React from 'react';
import { useStyles } from 'app/styles/components/Banner';

export const Logo = props => {
  const classes = useStyles();

  return (
    <div className={props.className ? props.className : classes.logo}>
      <span className={classes.text1}>CMS.</span>
      <span className={classes.text2}>gov</span>
      &nbsp;
      <span className={classes.text3}>|</span>
      &nbsp;
      <span className={classes.text4}>Enterprise Portal</span>
    </div>
  );
};

export const Banner = props => {
  const classes = useStyles();
  return (
    <div className={classes.cmsNavbar}>
      <div className={classes.left}>
        <Logo />
      </div>
      {props.isAuth && (
        <React.Fragment>
          <div className={classes.center}>
            <div className={classes.btn}>
              <i aria-hidden={true} className="fas fa-list" />
              &nbsp;My Apps
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.btn}>
              <i aria-hidden={true} className="fas fa-user-circle" />
              &nbsp;Eight AppDataViewer&nbsp;
              <i aria-hidden={true} className="fas fa-caret-down" />
            </div>
            <div className={classes.btn}>
              <i aria-hidden={true} className="fas fa-question-circle" />
              &nbsp;Help
            </div>
            <div className={classes.btn} onClick={props.logout}>
              <i aria-hidden={true} className="fas fa-sign-out-alt" />
              &nbsp;Log Out
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
