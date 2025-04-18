// src/components/Button/Button.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "outline", "ghost", "danger"],
    },
    size: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg"],
    },
    fullWidth: { control: "boolean" },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
    size: "md",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
    size: "md",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    variant: "ghost",
    size: "md",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger Button",
    variant: "danger",
    size: "md",
  },
};
