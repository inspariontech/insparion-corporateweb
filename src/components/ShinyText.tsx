import { motion } from 'framer-motion'

interface ShinyTextProps {
  text: string
  className?: string
  /** seconds for a full sweep */
  speed?: number
}

/**
 * Continuously sweeps a white shine across a light-blue (#64CEFB) base,
 * driven by framer-motion animating the background position.
 */
export default function ShinyText({
  text,
  className = '',
  speed = 3,
}: ShinyTextProps) {
  return (
    <motion.span
      className={className}
      style={{
        backgroundImage:
          'linear-gradient(100deg, #64CEFB 0%, #64CEFB 38%, #ffffff 50%, #64CEFB 62%, #64CEFB 100%)',
        backgroundSize: '220% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
      }}
      initial={{ backgroundPosition: '200% 50%' }}
      animate={{ backgroundPosition: '-20% 50%' }}
      transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
    >
      {text}
    </motion.span>
  )
}
