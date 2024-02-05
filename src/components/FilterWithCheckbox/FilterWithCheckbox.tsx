import { FC, useState } from 'react';

import DisplayFilterWithCheckbox, {
  Category,
} from '../DisplayFilterWithCheckbox/DisplayFilterWithCheckbox';

interface IFilterWithCheckboxProps {
  value: string[];
  onValueChange: (value: string[]) => void;
  categoriesData: Category[];
}

const FilterWithCheckbox: FC<IFilterWithCheckboxProps> = props => {
  const { value, onValueChange, categoriesData } = props;
  const [searchText, setSearchText] = useState<string>('');

  const handlerSearchInputChange = (e: {
    value: string;
    checked: boolean;
  }): void => {
    let selectedCategories: string[] = [];

    if (e.checked) {
      const selectedCategory = categoriesData.find(el => el.id === e.value);

      if (selectedCategory) {
        selectedCategories = [...value, selectedCategory.id];
      }
    } else {
      selectedCategories = value.filter(key => key !== e.value);
    }
    onValueChange(selectedCategories);
  };

  const filteredCategories = categoriesData.filter(category =>
    category.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const handleSelectAllChange = (e: { checked: boolean }) => {
    const selectedCategories = e.checked
      ? filteredCategories.map(it => it.id)
      : [];

    onValueChange(selectedCategories);
  };

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
