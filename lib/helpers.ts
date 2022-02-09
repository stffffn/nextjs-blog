export const replaceSpacesWithDashes = (str: string) => {
  return str.replace(/\s+/g, '-');
};

export const replaceDashesWithSpaces = (str: string) => {
  return str.replace(/-/g, ' ');
};
