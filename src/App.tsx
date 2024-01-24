import { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";

import classes from "./App.module.scss";

import Section from "./components/section/Section";

interface IMenuSettings {
  _id: string;
  menuActive: boolean;
  date: string;
  showStarters: boolean;
  showIntermediate: boolean;
  showMains: boolean;
  showDesserts: boolean;
  showPrices: boolean;
  startersPrice: number;
  intermediatePrice: number;
  mainsPrice: number;
  dessertsPrice: number;
}

interface IMenuItem {
  name: string;
  dietary: string[];
  description: string | null;
}

function App() {
  const [dataLoading, setDataLoading] = useState(true);
  const [menuSettings, setMenuSettings] = useState<IMenuSettings | null>(null);
  const [menuStarters, setMenuStarters] = useState<IMenuItem[]>([]);
  const [menuIntermediate, setMenuIntermediate] = useState<IMenuItem[]>([]);
  const [menuMains, setMenuMains] = useState<IMenuItem[]>([]);
  const [menuDesserts, setMenuDesserts] = useState<IMenuItem[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      "https://duke-of-gordon-menu-interface-d83c02c0eebd.herokuapp.com/api/v1/main-menu/get-all-main-menu-data"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          console.log(data);
          setMenuSettings(data.payload.mainMenuSettings[0]);
          setMenuStarters(data.payload.mainMenuStarters);
          setMenuIntermediate(data.payload.mainMenuIntermediate);
          setMenuMains(data.payload.mainMenuMains);
          setMenuDesserts(data.payload.mainMenuDesserts);
          setDataLoading(false);
        }

        if (data.status === "fail") {
          setShowAlert(true);
          setAlertMessage(
            "A connection could not be made to the database. Please try again later."
          );
        }
      });
  }, []);

  return (
    <div className={classes.background}>
      {dataLoading && (
        <div className={classes["alert-window"]}>
          <PulseLoader color="#000000" />
        </div>
      )}

      {!dataLoading && showAlert && (
        <div className={classes["alert-window"]}>
          <p>{alertMessage}</p>
        </div>
      )}

      {!dataLoading && menuSettings?.menuActive === false && (
        <div className={classes["alert-window"]}>
          <p>
            The online menu is currently unavailable, please try again later.
          </p>
        </div>
      )}

      {!dataLoading && menuSettings?.menuActive && (
        <div className={classes.page}>
          <div className={classes["title-wrapper-desktop"]}>
            <h1 className={classes.title}>Duke of Gordon Hotel</h1>
          </div>
          <div className={classes["page-wrapper"]}>
            <h1 className={classes["title-mobile"]}>Duke of Gordon Hotel</h1>
            <p className={classes.date}>{menuSettings.date}</p>
            {menuSettings.showStarters && (
              <Section
                sectionName="Starters"
                showPrice={menuSettings.showPrices}
                sectionPrice={menuSettings.startersPrice}
                menu={menuStarters}
              />
            )}
            {menuSettings.showIntermediate && (
              <Section
                sectionName="Intermediate"
                showPrice={menuSettings.showPrices}
                sectionPrice={menuSettings.intermediatePrice}
                menu={menuIntermediate}
              />
            )}
            {menuSettings.showMains && (
              <Section
                sectionName="Mains"
                showPrice={menuSettings.showPrices}
                sectionPrice={menuSettings.mainsPrice}
                menu={menuMains}
              />
            )}
            {menuSettings.showDesserts && (
              <Section
                sectionName="Desserts"
                showPrice={menuSettings.showPrices}
                sectionPrice={menuSettings.dessertsPrice}
                menu={menuDesserts}
              />
            )}
            <p className={classes["gluten-announcement"]}>
              **Gluten free desserts available on request**
            </p>
            <p className={classes["allergy-announcement"]}>
              Please be aware that nuts, nut derivatives or nut oil may be
              present in our dishes. If you need allergy advice on any of the
              dishes on our menus the Restaurant Supervisor and Duty Chef will
              be pleased to help. Locally sourced produce is used as much as
              possible in all dishes.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
