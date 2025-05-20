import { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";
import { AccordionItem } from "./AccordionItem";
import { AccordionHeader } from "./AccordionHeader";
import { AccordionPanel } from "./AccordionPanel";

const meta: Meta = {
  title: "Components/Accordion",
  component: Accordion,
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion>
      <AccordionItem>
        <AccordionHeader align="start">질문</AccordionHeader>
        <AccordionPanel>답변</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader align="start">질문</AccordionHeader>
        <AccordionPanel>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          distinctio nesciunt hic soluta voluptatum fugiat eligendi omnis,
          molestiae molestias! Beatae, ex assumenda! Obcaecati minima iste
          pariatur neque. Dolorem, iusto libero!
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader align="start">질문</AccordionHeader>
        <AccordionPanel>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          distinctio nesciunt hic soluta voluptatum fugiat eligendi omnis,
          molestiae molestias! Beatae, ex assumenda! Obcaecati minima iste
          pariatur neque. Dolorem, iusto libero!
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};
