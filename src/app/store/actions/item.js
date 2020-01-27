import { flatten } from 'lodash';
export const buildRequest = data => {
  return {};
};

export const getItems = items => {
  const listItems = items.reduce(
    (obj, item) => ({
      ...obj,
      ...item
    }),
    {}
  );
  const list = flatten(
    Object.keys(listItems).map(item => {
      return listItems[item];
    })
  );
  return { ...listItems, list };
};

export const getUrls = state => {
  const urls = [];

  if (state.files.length <= 0 || state.refresh) {
    urls.push('files');
  }

  if (state.folders.length <= 0 || state.refresh) {
    urls.push('folders');
  }
  return urls;
};
