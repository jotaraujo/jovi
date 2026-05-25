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
  // No mobile, o alinhamento sempre é à esquerda (sem inversão)
  // No desktop (md+), alterna esquerda/direita via grid
  const cardContent = (
    <motion.div
      variants={fadeInUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`p-4 sm:p-6 rounded-sm relative ${placeholder ? 'opacity-60' : ''}`}
      style={{
        backgroundColor: '#F2E8D5',
        border: placeholder ? '1px dashed #B8882A' : '1px solid #B8882A',
        boxShadow: '4px 4px 12px rgba(44,26,14,0.15)',
      }}
    >
      {/* Header: ícone + subtítulo + data — no mobile sempre à esquerda */}
      <div className={`flex items-center gap-2 mb-2 md:${side === 'left' ? 'justify-end' : 'justify-start'}`}>
        <span className="text-warm text-xl">{icon}</span>
        <span className="font-mono text-text text-xs">{subtitle}</span>
        <span className="font-mono text-text text-xs opacity-60">·</span>
        <span className="font-mono text-text text-xs opacity-60">{date}</span>
      </div>

      {/* Título — no mobile sempre à esquerda, no desktop inverte se for 'left' */}
      <h3 className={`font-serif text-text text-lg sm:text-xl mb-2 md:${side === 'left' ? 'text-right' : 'text-left'}`}>
        {title}
      </h3>

      {/* Descrição — no mobile sempre à esquerda, no desktop inverte se for 'left' */}
      <p className={`font-body text-text text-sm leading-relaxed md:${side === 'left' ? 'text-right' : 'text-left'} ${placeholder ? 'italic opacity-70' : ''}`}>
        {description}
      </p>
    </motion.div>
  )

  return (
    <div className="relative flex mb-10 md:mb-16">
      {/* Mobile: card sempre à direita da linha da timeline */}
      <div className="md:hidden w-full pl-8">
        {cardContent}
      </div>

      {/* Desktop: slot esquerdo */}
      <div className={`hidden md:block w-1/2 ${side === 'left' ? 'pr-12' : ''}`}>
        {side === 'left' && cardContent}
      </div>

      {/* Desktop: slot direito */}
      <div className={`hidden md:block w-1/2 ${side === 'right' ? 'pl-12' : ''}`}>
        {side === 'right' && cardContent}
      </div>

      {/* Ponto da timeline */}
      <div
        className={`absolute left-0 md:left-1/2 top-6 sm:top-8 w-3 h-3 sm:w-4 sm:h-4 rounded-full -translate-x-1/2 border-2 z-10 ${
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
