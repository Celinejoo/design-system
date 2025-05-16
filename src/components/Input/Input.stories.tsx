import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "placeholder",
  },
  argTypes: {
    inputSize: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Outline: Story = {
  args: {
    varient: "outline",
  },
};

export const Filled: Story = {
  args: {
    varient: "filled",
  },
};

export const Fullished: Story = {
  args: {
    varient: "fullished",
  },
};

export const Error: Story = {
  args: {
    label: "이메일",
    placeholder: "이메일을 입력하세요",
    error: "이메일 형식이 올바르지 않습니다",
  },
};

export const Disabled: Story = {
  args: {
    label: "비밀번호",
    placeholder: "비밀번호를 입력하세요",
    disabled: true,
  },
};
