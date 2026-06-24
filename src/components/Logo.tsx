type Variant = 'color' | 'white' | 'dark'

interface LogoProps {
  variant?: Variant
  className?: string
  /** API uyumu için tutulur. */
  withOrbit?: boolean
}

/**
 * INSPARION logosu (orijinal PNG'ler).
 * - white: beyaz wordmark + gradient yörünge (koyu zeminler)
 * - dark / color: koyu lacivert wordmark + gradient yörünge (açık zeminler)
 */
export default function Logo({ variant = 'color', className = '' }: LogoProps) {
  const src =
    variant === 'white'
      ? '/insparion-logo.png'
      : '/insparion-logo-siyah.png'
  return (
    <img
      src={src}
      alt="INSPARION"
      draggable={false}
      className={`select-none ${className}`}
    />
  )
}
