import { motion } from 'framer-motion'
import IslandMarker from '../ui/IslandMarker'
import { timeline } from '../../constants/content'

/* Decorative compass SVG */
function Compass() {
  return (
    <div
      className="compass-pulse absolute top-12 right-8 md:right-16 pointer-events-none"
      aria-hidden="true"
    >
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
        <circle cx="36" cy="36" r="34" stroke="#B8882A" strokeWidth="2" fill="none" opacity="0.6" />
        <circle cx="36" cy="36" r="28" stroke="#B8882A" strokeWidth="0.5" fill="none" opacity="0.4" />
        <circle cx="36" cy="36" r="4" fill="#B8882A" opacity="0.7" />
        {/* N */}
        <polygon points="36,8 32,28 36,24 40,28" fill="#C8591A" opacity="0.85" />
        {/* S */}
        <polygon points="36,64 32,44 36,48 40,44" fill="#2C1A0E" opacity="0.7" />
        {/* E */}
        <polygon points="64,36 44,32 48,36 44,40" fill="#2C1A0E" opacity="0.5" />
        {/* W */}
        <polygon points="8,36 28,32 24,36 28,40" fill="#2C1A0E" opacity="0.5" />
        <text x="36" y="7" textAnchor="middle" fill="#C8591A" fontSize="8" fontFamily="Space Mono" opacity="0.9">N</text>
      </svg>
    </div>
  )
}

export default function Timeline() {
  return (
    <section
      id="rota"
      className="grain-section relative py-24 px-6 md:px-8"
      style={{ backgroundColor: '#FAF3E0' }}
    >
      {/* Nautical grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#B8882A 1px, transparent 1px), linear-gradient(90deg, #B8882A 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <Compass />

      {/* Section header */}
      <div className="text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-drama text-4xl md:text-5xl"
        >
          O Log Pose
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body italic text-text text-lg mt-3"
        >
          Cada ilha visitada. Cada memória registrada.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Central line — hidden on mobile */}
        <div
          aria-hidden="true"
          className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
          style={{ backgroundColor: '#B8882A' }}
        />

        {timeline.map((island, i) => (
          <IslandMarker
            key={island.id}
            title={island.title}
            subtitle={island.subtitle}
            date={island.date}
            description={island.description}
            icon={island.icon}
            side={i % 2 === 0 ? 'left' : 'right'}
            placeholder={island.placeholder}
            index={i}
          />
        ))}

        {/* Future island — dashed, faded */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex mb-8"
        >
          <div className="hidden md:block w-1/2" />
          <div className="w-full md:w-1/2 md:pl-12 pl-8">
            <div
              className="p-6 rounded-sm"
              style={{
                backgroundColor: '#F2E8D5',
                border: '2px dashed #B8882A',
                boxShadow: '4px 4px 12px rgba(44,26,14,0.1)',
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="compass-pulse inline-block">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="8" stroke="#B8882A" strokeWidth="1.5" fill="none"/>
                    <circle cx="9" cy="9" r="2" fill="#B8882A"/>
                    <polygon points="9,2 7.5,7 9,6 10.5,7" fill="#C8591A"/>
                    <polygon points="9,16 7.5,11 9,12 10.5,11" fill="#2C1A0E" opacity="0.5"/>
                  </svg>
                </span>
                <span className="font-mono text-text text-xs">???</span>
              </div>
              <h3 className="font-serif text-text text-xl mb-2">
                · · · — &ldquo;A ser descoberta&rdquo;
              </h3>
              <p className="font-handwrite text-text text-lg">
                Próxima ilha: desconhecida.
              </p>
            </div>
          </div>
          <div
            className="absolute left-0 md:left-1/2 top-8 w-4 h-4 rounded-full -translate-x-1/2 border-2 border-dashed z-10"
            style={{ backgroundColor: 'transparent', borderColor: '#B8882A' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
