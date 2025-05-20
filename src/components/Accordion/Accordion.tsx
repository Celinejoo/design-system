// 전체 아코디언을 감싸는 부모

import { cx } from "../../utils/cx";
import { AccordionProps } from "./Accordion.types";
import styles from "./Accordion.module.scss";

export const Accordion = ({ children }: AccordionProps) => {
  return <div className={cx(styles.accordion)}>{children}</div>;
};
