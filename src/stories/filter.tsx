import React, { useEffect, useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { Divider } from "primereact/divider";
import { ScrollPanel } from "primereact/scrollpanel";
import "./filter.css";
import styles from "./filter.module.css";

export type Category = {
  name: string;
  key: string;
  checked: boolean;
};

type FilterWithCheckboxProps = {
  isselectAll: boolean;
};

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

export default function FilterWithCheckbox({
  isselectAll,
}: FilterWithCheckboxProps) {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([
    categoriesData[1],
  ]);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    handlerSearchInputChange({ value: { key: "all" }, checked: isselectAll });
  });

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
    <div className="parent-component">
      <div className={`card-all ${styles.cardAll}`}>
        <div className={`card-input ${styles.cardInput}`}>
          <div className={`p-input-icon ${styles.inputIcon}`}>
            <i className={`pi pi-search piSearch ${styles.piSearch}`} />
            <InputText
              className={styles.input}
              placeholder="Найти"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            />
          </div>
        </div>
        <Divider className={styles.divider} />

        <div className={`card-box ${styles.cardBox}`}>
          <ScrollPanel className={`scroll-panel ${styles.scrollPanel}`}>
            <div className="p-scrollpanel-wrapper">
              <div className="p-scrollpanel-content">
                <div className={styles.list}>
                  <div className={styles.listCard}>
                    {filteredCategories.map((category) => (
                      <div
                        key={category.key}
                        className={styles.cardCheckboxLabel}
                      >
                        <Checkbox
                          className={styles.checkbox}
                          inputId={category.key}
                          name="category"
                          value={category}
                          onChange={(e) =>
                            handlerSearchInputChange({
                              value: { key: category.key },
                              checked: !!e.checked,
                            })
                          }
                          checked={selectedCategories.some(
                            (item) => item.key === category.key
                          )}
                        />
                        <label
                          htmlFor={category.key}
                          className={`label-title ${styles.labelTitle}`}
                        >
                          {category.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollPanel>
        </div>
      </div>
    </div>
  );
}
