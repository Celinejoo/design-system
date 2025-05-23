import { useState } from "react";
import { ModalHeader } from "./ModalHeader";
import { ModalBody } from "./ModalBody";
import { ModalFooter } from "./ModalFooter";
import styles from "./Modal.module.scss";
import { cx } from "../../utils/cx";
import { CloseButton } from "../CloseButton/CloseButton";
import { Button } from "../Button";

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>모달오픈</Button>
      <div
        className={cx(styles.modalWrap)}
        hidden={!isOpen}
        aria-hidden={!isOpen}
      >
        <div
          className={cx(styles.modal)}
          role="dialog"
          aria-modal
          aria-labelledby="dialog_label"
          aria-describedby="dialog_desc"
        >
          <ModalHeader title="모달헤더" />
          <ModalBody content="모달컨텐트" />
          <ModalFooter button onClose={onClose} />
          <div className={cx(styles.close)}>
            <CloseButton size="sm" onClick={onClose} />
          </div>
        </div>
      </div>
    </>
  );
};
