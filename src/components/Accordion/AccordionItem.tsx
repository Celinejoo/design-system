// 하나의 아코디언 아이템
// Context를 생성해서 공유
import { useId, useMemo, useState } from "react";
import styles from "./Accordion.module.scss";
import { AccordionItemPops } from "./Accordion.types";
import { AccordionItemContext } from "./context";
import { cx } from "../../utils/cx";

export const AccordionItem = ({ children }: AccordionItemPops) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  const headerId = `accordion-header-${id}`;
  const panelId = `accordion-panel-${id}`;

  const value = useMemo(
    () => ({ isOpen, toggle, headerId, panelId }),
    [isOpen, headerId, panelId],
  );
  return (
    <AccordionItemContext.Provider value={value}>
      <div className={cx(styles.item)}> {children}</div>
    </AccordionItemContext.Provider>
  );
};
