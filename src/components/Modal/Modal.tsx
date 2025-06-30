import { FC, ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';

import * as styles from './Modal.module.scss';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ open, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal_wrapper} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()} role="presentation">
        <button className={styles.closeButton} onClick={onClose} aria-label="Close">
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
};
