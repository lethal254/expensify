//SET FILTER TEXT
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});
//SORT BY AMOUNT
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});
//SORT BY DATE

export const sortByDate = () => ({
  type: "SORT_BY_DATE",
});
//SET_START_DATE
export const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});
//SET_END_DATE
export const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});
