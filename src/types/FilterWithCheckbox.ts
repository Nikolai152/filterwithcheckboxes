export type Category = {
  name: string;
  key: string;
  checked: boolean;
};

// export type FilterWithCheckboxProps = {
//   isselectAll: boolean;
// };

export type DisplayFilterWithCheckboxProps = {
  categoriesData: Category[];
  searchText: string;
  setSearchText: (text: string) => void;
  handlerSearchInputChange: (e: {
    value: { key: string };
    checked: boolean;
  }) => void;
  filteredCategories: Category[];
  selectedCategories: Category[];
};
