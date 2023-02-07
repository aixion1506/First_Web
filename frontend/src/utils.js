export const timeFormat = (time) => {
  const changed = time.replaceAll(". ", "-");
  const changedTime = changed.replace(".", "");
  return changedTime;
};
