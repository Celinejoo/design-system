import { ModalFooterProps } from "./Modal.types";
import styles from "./Modal.module.scss";
import { cx } from "../../utils/cx";
import { Button } from "../Button";

export const ModalFooter = ({ button, onClose }: ModalFooterProps) => {
  return (
    <div className={cx(styles.modalfooter)}>
      {button && (
        <div className={cx(styles.align)}>
          <Button
            size="md"
            variant="outline"
            className={cx(styles.cancelBtn)}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button size="md" variant="solid">
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};
