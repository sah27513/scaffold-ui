import { validateAuth } from 'app/store/actions';

export const search = data => {
  return {};
};

export const getDrive = driveName => {
  // Get The name of the Current Drive
  const [name] = window.location.hash.split('/').filter(part => part !== '#');

  // Get the list of Drives
  const { drives } = validateAuth();
  console.log(drives);
  console.log(name);

  // Reduce the list to the current drive
  const currentDrive = drives
    .filter(drive => drive.folderName === name)
    .reduce(
      (drive, item) => ({
        ...drive,
        current: item,
        expanded: item
      }),
      {}
    );

  // Return the current Drive
  return currentDrive;
};

export const setExpanded = drive => {
  return { expanded: { folderName: drive }, current: { folderName: drive } };
};
