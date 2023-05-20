export const validateRequire = (imputValue, inputRef) => {
  let result;
  let arr = [];

  if(!imputValue) {
    inputRef.current.classList.add(`${inputRef.current.className}--warning`);
    result = true;
  } else {
    arr = inputRef.current.className.split(' ')
    inputRef.current.classList.remove(`${arr[1]}`);
    result = false
  }
  return result
}