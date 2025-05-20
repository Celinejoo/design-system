// 열고 다는 버튼

import { cx } from "../../utils/cx";
import styles from "./Accordion.module.scss";
import { AccordionHeaderPops } from "./Accordion.types";
import { useAccordionItemContext } from "./context";

export const AccordionHeader = ({ children, align }: AccordionHeaderPops) => {
  const { isOpen, toggle, headerId, panelId } = useAccordionItemContext();
  return (
    <button
      id={headerId}
      className={cx(styles.header, styles[align])}
      aria-expanded={isOpen}
      aria-controls={panelId}
      onClick={toggle}
    >
      <span>{children}</span>
      <span
        className={cx(styles.arrow, isOpen ? styles.open : "")}
        aria-hidden="true"
      >
        ▼
      </span>
    </button>
  );
};
