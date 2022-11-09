const averageInArray = (arr = [], specified = 0) => {
  return (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(specified);
};

export default averageInArray;
