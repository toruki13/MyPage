import { motion } from 'framer-motion';
import history from '../../utils/history';
const Button = ({ path, children, sx }) => {
  return (
    <motion.button
      className='button'
      style={{ ...sx }}
      whileHover={{ scale: 1.1 }}
      onClick={() => {
        if (path === '/portfolio' || path === '/') history.push(path);
        else window.open(path, '_blank');
      }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
