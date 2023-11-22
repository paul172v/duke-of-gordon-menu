import React from "react";
import classes from "./Section.module.scss";
import MenuItem from "../menu-item/MenuItem";

// Define a type for individual menu items
type MenuItemType = {
  name: string;
  dietary: string[] | null;
  description: string | null;
};

// Define a type for the component props
type SectionProps = {
  sectionName: string;
  sectionPrice: number | null;
  menu: MenuItemType[];
};

const Section: React.FC<SectionProps> = ({
  sectionName,
  sectionPrice,
  menu,
}) => {
  return (
    <section className={classes.section}>
      <h2 className={classes.heading}>
        {sectionName}
        {sectionPrice && ` - £${sectionPrice.toFixed(2)}`}
      </h2>
      <div>
        {menu.map((item) => (
          <MenuItem
            key={item.name}
            name={item.name}
            dietary={item.dietary}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Section;
