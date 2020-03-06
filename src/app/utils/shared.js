import { capitalize } from 'lodash';

/**
 * Method to set the current Drawer component and open state
 * @param {component} component -- Drawer Component
 * @param {object} list -- List of available components
 */
export const setDrawer = (component, list) => {
  return { drawer: component.drawer, NewComponent: list[capitalize(component.type)] };
};
