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

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <span className={classes.close} onClick={props.onClose}>
        <CloseIcon color="inherit" fontSize="inherit" />
      </span>
      <div className={classes.content}>{props.children}</div>
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
