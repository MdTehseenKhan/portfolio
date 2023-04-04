import { motion } from "framer-motion"
export default function Press({ children }) {
  return (
    <motion.div whileTap={{ scale: 0.95 }} whileHover={{ y: -10 }} transition={{ type: "spring", duration: 0.1 }}>
      {children}
    </motion.div>
  )
}
