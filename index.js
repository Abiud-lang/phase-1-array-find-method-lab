// code your solution here

const records = [
  { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    ]

function superbowlWin(records) {
  const win = records.find(record => record.result === "W");
  return win ? win.year : undefined;
}
