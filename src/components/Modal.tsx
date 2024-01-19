import React, { PropsWithChildren, useCallback, useEffect } from "react";
import styles from "rb3198/styles/scss/modal.scss";
import { RxCross1 } from "react-icons/rx";

export interface ModalProps {
  title?: string;
  onClose: () => void;
}

export const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
  title,
  children,
  onClose,
}) => {
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.setAttribute("data-modal-open", "true");

    return () => {
      body.setAttribute("data-modal-open", "false");
    };
  }, []);

  const closeModal = useCallback(() => {
    const body = document.getElementsByTagName("body")[0];
    body.setAttribute("data-modal-open", "false");
    onClose();
  }, [onClose]);

  const renderModalHeader = useCallback(() => {
    return (
      <div className={styles.modalHeader}>
        <h3>{title}</h3>
        <RxCross1 onClick={closeModal} />
      </div>
    );
  }, [title]);
  return (
    <div className={styles.modal}>
      <div onClick={closeModal} className={styles.modalBg}></div>
      <div className={styles.modalContentContainer}>
        {renderModalHeader()}
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
};
