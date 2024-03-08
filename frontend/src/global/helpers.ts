export const formatDate = (date: Date): string => {
  const formattedDate = new Date(date);
  const options: object = {
    dateStyle: 'short',
  };

  return formattedDate.toLocaleString('en-GB', options);
};
