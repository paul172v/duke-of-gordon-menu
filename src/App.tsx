import classes from "./App.module.scss";

import DateString from "./components/date/Date";
import menus from "../dev/menus";

import Section from "./components/section/Section";

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
          <Section
            sectionName="Starters"
            sectionPrice={4.25}
            menu={menus.startersArr}
          />
          <Section
            sectionName="Intermediate"
            sectionPrice={4.25}
            menu={menus.intermediateArr}
          />
          <Section
            sectionName="Main"
            sectionPrice={4.25}
            menu={menus.mainsArr}
          />
          <Section
            sectionName="Intermediate"
            sectionPrice={4.25}
            menu={menus.dessertsArr}
          />
          <p className={classes["gluten-announcement"]}>
            **Gluten free desserts available on request**
          </p>
          <p className={classes["allergy-announcement"]}>
            Please be aware that nuts, nut derivatives or nut oil may be present
            in our dishes. If you need allergy advice on any of the dishes on
            our menus the Restaurant Supervisor and Duty Chef will be pleased to
            help. Locally sourced produce is used as much as possible in all
            dishes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
