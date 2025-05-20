// 상태 공유를 위한 Context

import { createContext, useContext } from "react";
import { AccordionItemContextValue } from "./Accordion.types";

export const AccordionItemContext =
  createContext<AccordionItemContextValue | null>(null);

export const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error(
      "AccordionHeader and AccordionPanel must be used within AccordionItem",
    );
  }
  return context;
};
