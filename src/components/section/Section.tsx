import React from "react";
import classes from "./Section.module.scss";
import MenuItem from "../menu-item/MenuItem";

interface IMenuItem {
  name: string;
  dietary: string[];
  description: string | null;
}

// Define a type for the component props
type SectionProps = {
  sectionName: string;
  showPrice: boolean;
  sectionPrice: number | null;
  menu: IMenuItem[];
};

const Section: React.FC<SectionProps> = ({
  sectionName,
  showPrice,
  sectionPrice,
  menu,
}) => {
  return (
    <section className={classes.section}>
      <h2 className={classes.heading}>
        {sectionName}
        {showPrice === true &&
          sectionPrice !== null &&
          ` - £${sectionPrice.toFixed(2)}`}
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
