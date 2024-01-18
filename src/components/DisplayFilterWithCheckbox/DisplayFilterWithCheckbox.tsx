import React from "react";
import { Checkbox } from "primereact/checkbox";
import { InputText } from "primereact/inputtext";
import { Divider } from "primereact/divider";
import { ScrollPanel } from "primereact/scrollpanel";
import { DisplayFilterWithCheckboxProps } from "../../types/FilterWithCheckbox";
import styles from "./DisplayFilterWithCheckbox.module.scss";
export default function DisplayFilterWithCheckbox({
  searchText,
  setSearchText,
  handlerSearchInputChange,
  filteredCategories,
  selectedCategories,
}: DisplayFilterWithCheckboxProps) {
  return (
    <div className={styles.cardAll}>
      <div className={styles.cardInput}>
        <div className={styles.inputIcon}>          
          <span className="p-input-icon-left">
            <i className={`pi pi-search ${styles.iconSearch}`}/>
            <InputText 
            className={styles.input}
            placeholder="Найти"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}/>
          </span>
        </div>
      </div>
      <Divider className={styles.divider} />
      <div className={styles.cardBox}>
        <ScrollPanel className={styles.scrollPanel}>
          <div classNamep-scrollpanel-wrapper>
            <div p-scrollpanel-content>
              <div className={styles.list}>
                <div className={styles.listCard}>
                  {filteredCategories.map((category) => {
                    return (
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
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </ScrollPanel>
      </div>
    </div>
  );
}
