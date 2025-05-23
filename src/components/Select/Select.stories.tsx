import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Select } from "./Select";
import { SelectProps } from "./Select.types";

const OPTIONS = [{ value: "email" }, { value: "sms" }, { value: "marketing" }];

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

const SelectHooks = (args: SelectProps) => {
  const [selected, setSelected] = useState("email");
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };
  return (
    <Select
      {...args}
      name="agree"
      label="항목 선택"
      options={OPTIONS}
      value={selected}
      onChange={onChange}
    />
  );
};

export const Default: Story = {
  args: {
    size: "md",
    disabled: false,
  },
  render: (args) => <SelectHooks {...args} />,
};
