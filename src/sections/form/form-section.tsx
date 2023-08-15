import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode
}

const formVariants: Variants = {
  offscreen: {
    y: 200
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 1
    }
  }
}

export default function Section({ children }: Props) {
  return (
    <motion.div
      className="form-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
    >
      <motion.div className='form-item' variants={formVariants}>
        {children}
      </motion.div>
    </motion.div>
  );
}