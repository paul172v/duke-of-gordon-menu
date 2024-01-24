import React from "react";

import classes from "./Date.module.scss";

const DateString: React.FC = () => {
  const getDate = new Date();

  // Day Map
  const dayMap: { [key: string]: string } = {
    Mon: "Monday",
    Tue: "Tuesday",
    Wed: "Wednesday",
    Thu: "Thursday",
    Fri: "Friday",
    Sat: "Saturday",
    Sun: "Sunday",
  };

  const dayAbbrev: string = getDate.toDateString().substring(0, 3);
  const day: string = dayMap[dayAbbrev];

  /*
Date Logic:
The function then checks the value of j and k to determine the correct ordinal suffix:
- If j is 1 and k is not 11, the suffix should be "st" (as in 1st, 21st, 31st). The check for k != 11 is necessary to handle the special case for numbers like 11, 111, 211, where the suffix is not "st".
- If j is 2 and k is not 12, the suffix should be "nd" (as in 2nd, 22nd). The check for k != 12 handles the special case for numbers like 12, 112, 212, and so on.
- If j is 3 and k is not 13, the suffix should be "rd" (as in 3rd, 23rd). The check for k != 13 handles the special case for numbers like 13, 113, 213, etc.
- In all other cases, the suffix should be "th". This includes numbers where j is 0, 4, 5, 6, 7, 8, 9, or any number where k is 11, 12, or 13.
*/

  const getDateSuffix = (date: number): string => {
    const j = date % 10,
      k = date % 100;
    if (j == 1 && k != 11) {
      return date + "st";
    }
    if (j == 2 && k != 12) {
      return date + "nd";
    }
    if (j == 3 && k != 13) {
      return date + "rd";
    }
    return date + "th";
  };

  const date: string = getDateSuffix(getDate.getDate());

  // Month map
  interface MonthMap {
    [key: string]: string;
  }

  const monthMap: MonthMap = {
    Jan: "January",
    Feb: "February",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "July",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December",
  };

  const monthAbbrev: string = getDate.toDateString().substring(4, 7);
  const month: string = monthMap[monthAbbrev] || "";

  return (
    <h2
      className={classes.date}
    >{`${day} ${date} ${month} ${getDate.getFullYear()}`}</h2>
  );
};

export default DateString;
