import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: {
    label: "아이디",
    placeholder: "아이디를 입력하세요",
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

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
      <Textarea
        label="XS"
        labelSize="xs"
        textareaSize="xs"
        placeholder="extra small"
      />
      <Textarea
        label="SM"
        labelSize="sm"
        textareaSize="sm"
        placeholder="small"
      />
      <Textarea
        label="MD"
        labelSize="md"
        textareaSize="md"
        placeholder="medium"
      />
      <Textarea
        label="LG"
        labelSize="lg"
        textareaSize="lg"
        placeholder="large"
      />
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
