import { FC, useState } from "react";
import DisplayFilterWithCheckbox, {
  Category,
} from "../DisplayFilterWithCheckbox/DisplayFilterWithCheckbox";

interface IFilterWithCheckboxProps {
  value: string[];
  onValueChange: (value: string[]) => void;
  categoriesData: Category[];
}

const FilterWithCheckbox: FC<IFilterWithCheckboxProps> = (props) => {
  const { value, onValueChange, categoriesData } = props;
  const [searchText, setSearchText] = useState<string>("");

  const handlerSearchInputChange = (e: {
    value: { key: string };
    checked: boolean;
  }): void => {
    let selectedCategories: string[] = [];

    if (e.checked) {
      const selectedCategory = categoriesData.find(
        (el) => el.key === e.value.key
      );
      if (selectedCategory) {
        selectedCategories = [...value, selectedCategory.key];
      }
    } else {
      selectedCategories = value.filter((key) => key !== e.value.key);
    }
    onValueChange(selectedCategories);
  };

  const handleSelectAllChange = (e: { checked: boolean }) => {
    const selectedCategories = e.checked
      ? filteredCategories.map((it) => it.key)
      : [];
    onValueChange(selectedCategories);
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
      selectedCategoryIds={value}
      handleSelectAllChange={handleSelectAllChange}
    />
  );
};

export default FilterWithCheckbox;
