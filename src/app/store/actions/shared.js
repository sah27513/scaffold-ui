import { validateAuth } from 'app/store/actions';

export const search = data => {
  return {};
};

export const getDrive = () => {
  // Get The name of the Current Drive
  const [name] = window.location.hash.split('/').filter(part => part !== '#');

  // Get the list of Drives
  const { drives } = validateAuth();
  const driveName = name.replace('%20', ' ');
  console.log(driveName);

  // Reduce the list to the current drive
  const currentDrive = drives
    ? drives
        .filter(drive => drive.folderName === driveName)
        .reduce(
          (drive, item) => ({
            ...drive,
            current: item,
            expanded: item
          }),
          {}
        )
    : {};

  // Return the current Drive
  return currentDrive;
};

export const setExpanded = drive => {
  return { expanded: { folderName: drive }, current: { folderName: drive } };
};
