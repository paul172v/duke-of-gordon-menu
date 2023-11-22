type MenuItem = {
  name: string;
  dietary: string[] | null;
  description: string | null;
};

// Function to initialize menu items
const createMenuItems = (items: MenuItem[]): MenuItem[] => {
  return items.map((item) => ({
    name: item.name,
    dietary: item.dietary ?? null,
    description: item.description ?? null,
  }));
};

const startersArr = createMenuItems([
  {
    name: "Brussels Pate",
    dietary: ["gf available"],
    description: "With crostini and tomato chutney",
  },
  {
    name: "Whitebait",
    dietary: ["gf"],
    description: "With lemon and tartar",
  },
  {
    name: "Greek Salad",
    dietary: ["gf", "v"],
    description: "With olives",
  },
  {
    name: "Leek and Potato soup",
    dietary: ["gf", "v"],
    description: null,
  },
]);

const intermediateArr = createMenuItems([
  {
    name: "Roast Tomato and Basil Soup",
    dietary: ["gf", "v"],
    description: null,
  },
  {
    name: "Refreshing Sorbet",
    dietary: ["gf", "v"],
    description: null,
  },
]);

const mainsArr = createMenuItems([
  {
    name: "Beef Brisket",
    dietary: ["gf"],
    description: "Served with creamy mashed potato and roasted vegetables",
  },
  {
    name: "Chicken Curry",
    dietary: ["gf available"],
    description: "Served with fragrant rice and Chota naan",
  },
  {
    name: "Scottish Cod Fillet",
    dietary: ["gf"],
    description: "Served with Napoli sauce and new potatoes",
  },
  {
    name: "Mushroom Stroganoff",
    dietary: ["gf", "v"],
    description: "Served with fragrant rice",
  },
]);

const dessertsArr = createMenuItems([
  {
    name: "Sticky Toffee Terrine",
    dietary: ["v"],
    description: null,
  },
  {
    name: "Lemon Tart",
    dietary: ["v"],
    description: "Served with raspberry coulis",
  },
  {
    name: "Selection of Ice Creams",
    dietary: ["gf"],
    description: null,
  },
  {
    name: "Trio of Cheeses",
    dietary: ["gf available"],
    description: "Served with biscuits, homemade chutney and fresh grapes",
  },
]);

export default { startersArr, intermediateArr, mainsArr, dessertsArr };
