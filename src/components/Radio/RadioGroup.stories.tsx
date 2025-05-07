import type { Meta } from "@storybook/react";
import { useState } from "react";
import { RadioGroup } from "./RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
};

export default meta;

const OPTIONS = [
  { label: "이메일 수신 동의", value: "email" },
  { label: "문자 수신 동의", value: "sms" },
  { label: "마케팅 수신 동의", value: "marketing" },
];

export const Default = () => {
  const [selected, setSelected] = useState("email");

  return (
    <RadioGroup
      name="agree"
      label="항목 선택"
      options={OPTIONS}
      value={selected}
      onChange={setSelected}
    />
  );
};
