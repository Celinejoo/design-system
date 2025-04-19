import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    label: "아이디",
    placeholder: "아이디를 입력하세요",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "300px",
      }}
    >
      <Input
        label="XS"
        labelSize="xs"
        inputSize="xs"
        placeholder="extra small"
      />
      <Input label="SM" labelSize="sm" inputSize="sm" placeholder="small" />
      <Input label="MD" labelSize="md" inputSize="md" placeholder="medium" />
      <Input label="LG" labelSize="lg" inputSize="lg" placeholder="large" />
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    iconLeft: "🔍",
    placeholder: "검색어를 입력하세요",
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

export const FullWidth: Story = {
  args: {
    label: "이름",
    placeholder: "이름을 입력하세요",
    fullWidth: true,
  },
};
