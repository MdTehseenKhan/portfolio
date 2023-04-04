import { motion } from "framer-motion"

export default function FadeUp({ children, className }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring", ease: "linear" }}
      className={className ? className : ""}
    >
      {children}
    </motion.div>
  )
}
