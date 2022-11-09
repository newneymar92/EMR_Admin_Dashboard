export const validateSpace = () => {};

export const handleOnKeyPress = (e) => {
  const specialCharRegex = /[0-9]/;
  const pressedKey = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  if (!specialCharRegex.test(pressedKey)) {
    e.preventDefault();
    return false;
  }
  return true;
};
