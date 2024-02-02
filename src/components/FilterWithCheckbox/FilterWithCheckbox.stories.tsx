import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";

import { Category } from "../DisplayFilterWithCheckbox/DisplayFilterWithCheckbox"; //
import FilterWithCheckbox from "./FilterWithCheckbox";

const CATEGORIES_DATA: Category[] = [
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
  { name: "Атрибут 15", id: "atr_15", checked: false },
];

const meta = {
  title: "Example/FilterWithCheckbox",
  component: FilterWithCheckbox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FilterWithCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {
  args: {
    value: [],
    categoriesData: CATEGORIES_DATA,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [, updateArgs] = useArgs();
    const onValueChange = (newValue: string[]): void => {
      updateArgs({ value: newValue });
    };

    return <FilterWithCheckbox {...args} onValueChange={onValueChange} />;
  },
};
