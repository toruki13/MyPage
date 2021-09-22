import { motion } from 'framer-motion';
import Backdrop from '../Backdrop';
/* 
const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 0.8,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 23,
      stiffness: 450,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
}; */

const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className='modal orange-gradient'
      ></motion.div>
    </Backdrop>
  );
};

export default Modal;
