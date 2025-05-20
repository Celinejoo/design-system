// 컨텐츠, 열림 닫힘에 따라 숨김처리
// 열고 다는 버튼

import { cx } from "../../utils/cx";
import styles from "./Accordion.module.scss";
import { AccordionPanelPops } from "./Accordion.types";
import { useAccordionItemContext } from "./context";

export const AccordionPanel = ({ children }: AccordionPanelPops) => {
  const { isOpen, headerId, panelId } = useAccordionItemContext();
  return (
    <div
      id={panelId}
      className={cx(styles.panel)}
      role="region"
      aria-labelledby={headerId}
      // 어떤 제목과 연결되어 있는지
      hidden={!isOpen}
    >
      {children}
    </div>
  );
};
