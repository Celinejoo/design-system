export interface AccordionItemContextValue {
  isOpen: boolean;
  toggle: () => void;
  headerId: string;
  panelId: string;
}

export interface AccordionItemPops {
  children: React.ReactNode;
}

export interface AccordionHeaderPops {
  children: React.ReactNode;
  align: "start" | "end";
}

export interface AccordionPanelPops {
  children: React.ReactNode;
}
export interface AccordionProps {
  children: React.ReactNode;
}
