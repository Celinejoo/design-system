import { ModalBodyProps } from "./Modal.types";
import styles from "./Modal.module.scss";
import { cx } from "../../utils/cx";

export const ModalBody = ({ content }: ModalBodyProps) => {
  return (
    <div className={cx(styles.modalBody)}>
      <p id="dialog_label">{content}</p>
    </div>
  );
};
