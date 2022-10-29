export const isNumeric = (str: string) => {
  const regex = /^[0-9]+$/;
  return (regex.test(str));
};
