import React from 'react';
import { connect } from 'react-redux';
import { useStyles } from 'app/styles/screens/Dashboard';

// Dispatchers

// Menus

export const HomeScreen = props => {
  const { menus } = props;
  const classes = useStyles();
  const menuRef = React.useRef(null);

  const handleClick = () => {
    console.info(`You clicked me`);
  };

  const handleToggle = () => {
    if (menus.createProject.open) {
      return props.toggleMenu('', { open: false });
    }
    return props.toggleMenu('', { open: true });
  };

  return <div className={classes.dashboard}></div>;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
