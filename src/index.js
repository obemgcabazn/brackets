module.exports = function check(str, bracketsConfig) {
  if (str.length % 2) {
    return false;
  } else {
    let line = str;
    let index = 0;
    const mask = bracketsConfig.map((elm) => elm.join(''));
    recicle();

    function recicle() {
      for (let val of mask) {
        for (let i = 0; i < str.length; i += 2) {
          if (line.includes(val)) {
            line = line.replace(val, '');
          } else {
            break;
          };
        };
      };
      index++;
      if (index <= (mask.length) && line.length > 0) {
        recicle();
      };
    };

    return line.length === 0;
  };
}
