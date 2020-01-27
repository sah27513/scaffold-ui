import React from 'react';
import { CircularProgress } from '@material-ui/core';

/**
 * Loading Component
 * @param {object} props -- Loading Props
 */
export const Loading = props => {
  return <CircularProgress size={175} />;
};
