export const getDateString = (dateObject: Date): string => {
  // eslint-disable-next-line max-len
  return `${dateObject.getUTCFullYear()}-${dateObject.getUTCMonth()+1}-${dateObject.getUTCDate()}`;
  // ^ The one is added because the month is 0 indexed
};
