import React, { useState } from "react";
import { Category } from "../../types/FilterWithCheckbox";
import DisplayFilterWithCheckbox from "../DisplayFilterWithCheckbox/DisplayFilterWithCheckbox";

const categoriesData: Category[] = [
  { name: "Все", key: "all", checked: false },
  { name: "Атрибут 1", key: "A", checked: false },
  
  { name: "Атрибут 2", key: "B", checked: false },
  { name: "Атрибут 3", key: "C", checked: false },
  { name: "Атрибут 4", key: "D", checked: false },
  { name: "Атрибут 5", key: "E", checked: false },
  { name: "Атрибут 6", key: "F", checked: false },
  { name: "Атрибут 7", key: "G", checked: false },
  { name: "Атрибут 8", key: "H", checked: false },
  { name: "Атрибут 9", key: "I", checked: false },
  { name: "Атрибут 10", key: "J", checked: false },
  { name: "Атрибут 11", key: "K", checked: false },
  { name: "Атрибут 12", key: "L", checked: false },
  { name: "Атрибут 13", key: "M", checked: false },
  { name: "Атрибут 14", key: "N", checked: false },
  { name: "Атрибут 15", key: "O", checked: false },
];

// export default function FilterWithCheckbox({ isselectAll }: FilterWithCheckboxProps) {
export default function FilterWithCheckbox() {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([
    categoriesData[1],
  ]);
  const [searchText, setSearchText] = useState<string>("");

  // useEffect(() => {
  //   handlerSearchInputChange({ value: { key: 'all' }, checked: isselectAll });
  // });

  const handlerSearchInputChange = (e: {
    value: { key: string };
    checked: boolean;
  }) => {
    let _selectedCategories = [...selectedCategories];

    if (e.value.key === "all") {
      _selectedCategories = e.checked ? categoriesData : [];
    } else {
      if (e.checked) {
        const selectedCategory = categoriesData.find(
          (el) => el.key === e.value.key
        );
        if (selectedCategory) {
          _selectedCategories.push(selectedCategory);
        }
      } else {
        _selectedCategories = _selectedCategories.filter(
          (category) => category.key !== e.value.key
        );
      }
    }
    setSelectedCategories(_selectedCategories);
  };

  const filteredCategories = categoriesData.filter((category) =>
    category.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <DisplayFilterWithCheckbox
      categoriesData={categoriesData}
      searchText={searchText}
      setSearchText={setSearchText}
      handlerSearchInputChange={handlerSearchInputChange}
      filteredCategories={filteredCategories}
      selectedCategories={selectedCategories}
    />
  );
}
