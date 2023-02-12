import { motion } from 'framer-motion';

const FadeIn = ({ children, delay, repeat }) => (
  <motion.div
    initial={{ opacity: -0.3, transform: 'translateY(40px)' }}
    whileInView={!repeat ? { opacity: 1, transform: 'translateY(0px)' } : ''}
    animate={repeat ? { opacity: 1, transform: 'translateY(0px)' } : ''}
    viewport={{ once: true }}
    transition={{ duration: delay }}
  >
    {children}
  </motion.div>
);

export default FadeIn;
