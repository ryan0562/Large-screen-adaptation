

export const unitFil = function (val, fiexdNum, unit) {
  let res = null;
  !!Number(val) && (res = Number(val).toFixed(fiexdNum));
  return res + unit;
}

export default {
  unitFil
}