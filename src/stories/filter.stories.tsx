import type { Meta, StoryObj } from "@storybook/react";
import FilterWithCheckbox from "./filter";

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
    isselectAll: true,
  },
};
