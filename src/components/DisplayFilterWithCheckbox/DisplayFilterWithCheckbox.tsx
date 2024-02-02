import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { ScrollPanel } from "primereact/scrollpanel";
import { ChangeEvent, FC } from "react";

import styles from "./DisplayFilterWithCheckbox.module.scss";

export interface Category {
  name: string;
  id: string;
  checked: boolean;
}

export interface IDisplayFilterWithCheckboxProps {
  categoriesData: Category[];
  searchText: string;
  setSearchText: (text: string) => void;
  handlerSearchInputChange: (e: { value: string; checked: boolean }) => void;
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
                  <div key={category.id} className={styles.cardCheckboxLabel}>
                    <Checkbox
                      className={styles.checkbox}
                      inputId={category.id}
                      name="category"
                      value={category}
                      onChange={(e: CheckboxChangeEvent): void =>
                        handlerSearchInputChange({
                          value: category.id,
                          checked: !!e.checked,
                        })
                      }
                      checked={selectedCategoryIds.includes(category.id)}
                    />
                    <label htmlFor={category.id} className={styles.labelTitle}>
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
