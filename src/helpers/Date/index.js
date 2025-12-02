export const MONTHS = {
  1: "janvier",
  2: "février",
  3: "mars",
  4: "avril",
  5: "mai",
  6: "juin",
  7: "juillet",
  8: "août",
  9: "septembre",
  10: "octobre",
  11: "novembre",
  12: "décembre",
};

// +1 because getMonth() returns month from 0 to 11 and our month is 1 to 12 
// const MONTH -1 because getMonth() returns month from 0 to 11
export const getMonth = (date) => MONTHS[date.getMonth()+1];
