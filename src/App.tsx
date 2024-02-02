import React, { useState } from "react";
import FilterWithCheckbox from "./components/FilterWithCheckbox/FilterWithCheckbox";

const App = () => {
  const [filterValue, setFilterValue] = useState<string[]>([]);

  const handleFilterChange = (value: string[]) => {
    setFilterValue(value);
  };

  const CATEGORIES_DATA = [
    { name: "Атрибут 1", id: "atr_1", checked: false },
    { name: "Атрибут 2", id: "atr_2", checked: false },
    { name: "Атрибут 3", id: "atr_3", checked: false },
    { name: "Атрибут 4", id: "atr_4", checked: false },
    { name: "Атрибут 5", id: "atr_5", checked: false },
    { name: "Атрибут 6", id: "atr_6", checked: false },
    { name: "Атрибут 7", id: "atr_7", checked: false },
    { name: "Атрибут 8", id: "atr_8", checked: false },
    { name: "Атрибут 9", id: "atr_9", checked: false },
    { name: "Атрибут 10", id: "atr_10", checked: false },
    { name: "Атрибут 11", id: "atr_11", checked: false },
    { name: "Атрибут 12", id: "atr_12", checked: false },
    { name: "Атрибут 13", id: "atr_13", checked: false },
    { name: "Атрибут 14", id: "atr_14", checked: false },
    { name: "Атрибут 1577777777777777777777777777777777777777777777777666666666", id: "atr_15", checked: false },
  ];

  return (
    <FilterWithCheckbox
      value={filterValue}
      onValueChange={handleFilterChange}
      categoriesData={CATEGORIES_DATA}
    />
  );
};

export default App;
