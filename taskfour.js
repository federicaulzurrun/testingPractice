const capitalizeFirstLetter = (string) => {
  if (string === '') {
    return '';
  } else {
    return string[0].toUpperCase() + string.slice(1);
  }
};


export default capitalizeFirstLetter;
