module.exports = function check(str, bracketsConfig) {
  while (true) {
    const newArrayBrackets = bracketsConfig.map((item) => {
      return item.join("");
    });

    let newLength = str.length;

    for (let i = 0; i < newArrayBrackets.length; i++) {
      str = str.replace(newArrayBrackets[i], "");
    }

    if (str.length === 0 || newLength === str.length) {
      break;
    }
  }
  return str.length === 0;
};
