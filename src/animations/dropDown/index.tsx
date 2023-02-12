import { motion } from 'framer-motion';

const DropDown = ({ children, delay }) => (
  <motion.div
    initial={{ opacity: 1, transform: 'translateY(-80px)' }}
    animate={{ opacity: 1, transform: 'translateY(0px)' }}
    viewport={{ once: true }}
    transition={{ duration: delay }}
  >
    {children}
  </motion.div>
);

export default DropDown;
