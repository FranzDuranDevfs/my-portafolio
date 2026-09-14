import styles from "../styles/Modal.module.scss";

export default function Modal({ handleCloseModal, description}) {
  return (
    <div className={styles.modal} onClick={handleCloseModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={styles.closeButton} onClick={handleCloseModal}>
          &times;
        </span>
        <p>{description}</p>
      </div>
    </div>
  );
}
