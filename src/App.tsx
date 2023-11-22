import classes from "./App.module.scss";

import DateString from "./components/date/Date";

function App() {
  return (
    <div className={classes.background}>
      <div className={classes.page}>
        <div className={classes["title-wrapper-desktop"]}>
          <h1 className={classes.title}>Duke of Gordon Hotel</h1>
        </div>
        <div className={classes["page-wrapper"]}>
          <h1 className={classes["title-mobile"]}>Duke of Gordon Hotel</h1>
          <DateString />
        </div>
      </div>
    </div>
  );
}

export default App;
