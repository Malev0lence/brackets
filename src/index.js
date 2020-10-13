module.exports = function check(str, bracketsConfig) {
  let arr = [];
  let subStr = str;
  bracketsConfig = bracketsConfig.flat().join('');
  for (let j = 0; j < bracketsConfig.length; j+=2) {
    arr.push(bracketsConfig.slice(j, j+2));
  }
  
  for (let i = 0; i <= str.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      subStr = subStr.replace(arr[j], '');
    }
  }
  
  return (subStr === "") ? true : false;
}
