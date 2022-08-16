import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const Transition = ({ children }) => {
  const { asPath } = useRouter();
  const variants = {
    inactive: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    out: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.2,
      },
    },
    in: {
      x: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <div className="effect-1">
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.div
          key={asPath}
          variants={variants}
          animate="inactive"
          initial="in"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
