import { ModalHeaerProps } from "./Modal.types";
import styles from "./Modal.module.scss";
import { cx } from "../../utils/cx";

export const ModalHeader = ({ title }: ModalHeaerProps) => {
  return (
    <div className={cx(styles.modalheader)}>
      <h2 id="dialog_label">{title}</h2>
    </div>
  );
};
