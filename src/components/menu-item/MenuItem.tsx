import React from "react";

import classes from "./MenuItem.module.scss";

interface IMenuItem {
  name: string;
  dietary: string[];
  description: string | null;
}

const MenuItem: React.FC<IMenuItem> = (props) => {
  let dietaryString: string | null;
  dietaryString = null;
  props.dietary !== null
    ? (dietaryString = props.dietary.toString().replace(",", ", "))
    : null;

  return (
    <div className={classes["item-wrapper"]} key={props.name}>
      <p className={classes["item-name"]}>
        {props.name.toLocaleUpperCase()}
        {dietaryString !== null && ` (${dietaryString})`}
      </p>
      {props.description && (
        <p className={classes["item-description"]}>{props.description}</p>
      )}
    </div>
  );
};

export default MenuItem;
