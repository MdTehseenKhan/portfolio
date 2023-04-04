import { motion } from "framer-motion"

export default function ScaleUp({ children, className }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring", ease: "linear" }}
      className={!className ? "" : className}
    >
      {children}
    </motion.div>
  )
}
