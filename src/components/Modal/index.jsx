import ReactDOM from 'react-dom';

import CloseIcon from '@mui/icons-material/Close';

import classes from './Modal.module.css';

const overlayRoot = document.getElementById("modal");

const Backdrop = (props) => {
  return (
    <div
      className={classes.backdrop}
      onClick={props.onClick}></div>
  );
};

const ModalBody = (props) => <div className={classes.body}>{props.children}</div>;

const ModalFooter = (props) => <div className={classes.footer}>{props.children}</div>;

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <span className={classes.close} onClick={props.onClose}>
        <CloseIcon color="inherit" fontSize="inherit" />
      </span>

      {props.children}
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClickBackdrop} />,
        overlayRoot
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onCloseModal}>{props.children}</ModalOverlay>,
        overlayRoot
      )}
    </>
  );
};

export default Modal;
export {
  ModalBody,
  ModalFooter
}
