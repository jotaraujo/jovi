import { motion } from 'framer-motion'

interface IslandMarkerProps {
  title: string
  subtitle: string
  date: string
  description: string
  icon: string
  side: 'left' | 'right'
  placeholder?: boolean
  index: number
}

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.1 },
  }),
}

export default function IslandMarker({
  title,
  subtitle,
  date,
  description,
  icon,
  side,
  placeholder = false,
  index,
}: IslandMarkerProps) {
  const cardContent = (
    <motion.div
      variants={fadeInUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`p-6 rounded-sm relative ${placeholder ? 'opacity-60' : ''}`}
      style={{
        backgroundColor: '#F2E8D5',
        border: placeholder ? '1px dashed #B8882A' : '1px solid #B8882A',
        boxShadow: '4px 4px 12px rgba(44,26,14,0.15)',
      }}
    >
      <div
        className={`flex items-center gap-2 mb-2 ${side === 'left' ? 'justify-end' : ''}`}
      >
        {side === 'right' && (
          <span className="text-warm text-xl">{icon}</span>
        )}
        <span className="font-mono text-text text-xs">{subtitle}</span>
        <span className="font-mono text-text text-xs opacity-60">·</span>
        <span className="font-mono text-text text-xs opacity-60">{date}</span>
        {side === 'left' && (
          <span className="text-warm text-xl">{icon}</span>
        )}
      </div>
      <h3
        className={`font-serif text-text text-xl mb-2 ${side === 'left' ? 'text-right' : ''}`}
      >
        {title}
      </h3>
      <p
        className={`font-body text-text text-sm leading-relaxed ${side === 'left' ? 'text-right' : ''} ${placeholder ? 'italic opacity-70' : ''}`}
      >
        {description}
      </p>
    </motion.div>
  )

  return (
    <div className="relative flex mb-14 md:mb-16">
      {/* Left slot */}
      <div className={`w-full md:w-1/2 ${side === 'left' ? 'md:pr-12' : 'hidden md:block'}`}>
        {side === 'left' && cardContent}
      </div>

      {/* Right slot */}
      <div className={`w-full md:w-1/2 ${side === 'right' ? 'md:pl-12' : 'hidden md:block'}`}>
        {side === 'right' && cardContent}
      </div>

      {/* Mobile: always show */}
      <div className="md:hidden absolute inset-0 pl-8">
        {cardContent}
      </div>

      {/* Timeline dot */}
      <div
        className={`absolute left-0 md:left-1/2 top-8 w-4 h-4 rounded-full -translate-x-1/2 border-2 z-10 ${
          placeholder ? 'border-dashed' : ''
        }`}
        style={{
          backgroundColor: placeholder ? 'transparent' : '#C8591A',
          borderColor: '#B8882A',
        }}
      />
    </div>
  )
}
