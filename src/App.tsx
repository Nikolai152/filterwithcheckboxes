import React, { useState } from "react";
import FilterWithCheckbox from "./components/FilterWithCheckbox/FilterWithCheckbox";

const App = () => {
  const [filterValue, setFilterValue] = useState<string[]>([]);

  const handleFilterChange = (value: string[]) => {
    setFilterValue(value);
  };

  const CATEGORIES_DATA = [
    { name: "Атрибут 1", key: "atr_1", checked: false },
    { name: "Атрибут 2", key: "atr_2", checked: false },
    { name: "Атрибут 3", key: "atr_3", checked: false },
    { name: "Атрибут 4", key: "atr_4", checked: false },
    { name: "Атрибут 5", key: "atr_5", checked: false },
    { name: "Атрибут 6", key: "atr_6", checked: false },
    { name: "Атрибут 7", key: "atr_7", checked: false },
    { name: "Атрибут 8", key: "atr_8", checked: false },
    { name: "Атрибут 9", key: "atr_9", checked: false },
    { name: "Атрибут 10", key: "atr_10", checked: false },
    { name: "Атрибут 11", key: "atr_11", checked: false },
    { name: "Атрибут 12", key: "atr_12", checked: false },
    { name: "Атрибут 13", key: "atr_13", checked: false },
    { name: "Атрибут 14", key: "atr_14", checked: false },
    { name: "Атрибут 15", key: "atr_15", checked: false },
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
