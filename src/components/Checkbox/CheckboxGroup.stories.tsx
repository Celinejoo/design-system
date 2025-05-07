import type { Meta } from "@storybook/react";
import { useState } from "react";
import { CheckboxGroup } from "./CheckboxGroup";

const meta: Meta<typeof CheckboxGroup> = {
  title: "Components/CheckboxGroup",
  component: CheckboxGroup,
};

export default meta;

const OPTIONS = [
  { label: "이메일 수신 동의", value: "email" },
  { label: "문자 수신 동의", value: "sms" },
  { label: "마케팅 수신 동의", value: "marketing" },
];

export const Default = () => {
  const [selected, setSelected] = useState<string[]>(["email"]);
  return (
    <CheckboxGroup
      name=""
      label="항목 선택"
      options={OPTIONS}
      values={selected}
      onChange={setSelected}
    />
  );
};
