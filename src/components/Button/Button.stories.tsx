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
      options: ["solid", "outline"],
    },
    size: {
      control: { type: "radio" },
      options: ["xs", "sm", "md", "lg"],
    },
    fullWidth: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const isIconOnly: Story = {
  args: {
    size: "md",
    iconLeft: "🔍",
    ariaLabel: "Search",
  },
};

export const Solid: Story = {
  args: {
    children: "Primary Button",
    variant: "solid",
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

export const WithLeftIcon: Story = {
  args: {
    children: "Outline Button",
    iconLeft: "🔍",
  },
};

export const WithRightIcon: Story = {
  args: {
    children: "Outline Button",
    iconRight: "🔍",
  },
};

export const WithLeftRightIcon: Story = {
  args: {
    children: "Outline Button",
    iconLeft: "🔍",
    iconRight: "🔍",
  },
};

export const Disabled: Story = {
  args: {
    children: "disabled Button",
    disabled: true,
  },
};
