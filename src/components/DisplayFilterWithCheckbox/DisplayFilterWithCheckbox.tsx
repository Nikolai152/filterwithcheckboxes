import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { ScrollPanel } from "primereact/scrollpanel";
import { ChangeEvent, FC } from "react";

import styles from "./DisplayFilterWithCheckbox.module.scss";

export interface Category {
  name: string;
  key: string;
  checked: boolean;
}

export interface IDisplayFilterWithCheckboxProps {
  categoriesData: Category[];
  searchText: string;
  setSearchText: (text: string) => void;
  handlerSearchInputChange: (e: {
    value: { key: string };
    checked: boolean;
  }) => void;
  filteredCategories: Category[];
  selectedCategoryIds: string[];
  handleSelectAllChange: (e: { checked: boolean }) => void;
}

const DisplayFilterWithCheckbox: FC<IDisplayFilterWithCheckboxProps> = (
  props
) => {
  const {
    searchText,
    setSearchText,
    handlerSearchInputChange,
    filteredCategories,
    selectedCategoryIds,
    handleSelectAllChange,
  } = props;

  return (
    <div className={styles.cardAll}>
      <div className={styles.cardInput}>
        <div className={styles.inputIcon}>
          <span className="p-input-icon-left">
            <i className={`pi pi-search ${styles.iconSearch}`} />
            <InputText
              className={styles.input}
              placeholder="Найти"
              onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                setSearchText(e.target.value);
              }}
              value={searchText}
            />
          </span>
        </div>
      </div>
      <div className={styles.cardBox}>
        <ScrollPanel className={styles.scrollPanel}>
          <div className={styles.list}>
            {!searchText && ( //
              <div className={styles.selectAll}>
                <Checkbox
                  inputId="selectAll"
                  className={styles.selectAllCheckbox}
                  name="selectAll"
                  value="selectAll"
                  onChange={(e: CheckboxChangeEvent) =>
                    handleSelectAllChange({
                      checked: !!e.checked,
                    })
                  }
                  checked={
                    selectedCategoryIds.length === props.categoriesData.length
                  }
                />
                <label
                  className={styles.labelTitleSelectAll}
                  htmlFor="selectAll"
                >
                  Выбрать все
                </label>
              </div>
            )}

            <div className={styles.listCard}>
              {filteredCategories.map((category) => {
                return (
                  <div key={category.key} className={styles.cardCheckboxLabel}>
                    <Checkbox
                      className={styles.checkbox}
                      inputId={category.key}
                      name="category"
                      value={category}
                      onChange={(e: CheckboxChangeEvent): void =>
                        handlerSearchInputChange({
                          value: { key: category.key },
                          checked: !!e.checked,
                        })
                      }
                      checked={selectedCategoryIds.includes(category.key)}
                    />
                    <label htmlFor={category.key} className={styles.labelTitle}>
                      {category.name}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollPanel>
      </div>
    </div>
  );
};

export default DisplayFilterWithCheckbox;
