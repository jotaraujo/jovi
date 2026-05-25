import { motion } from 'framer-motion'
import DayCounter from '../ui/DayCounter'
import OrnamentDivider from '../ui/OrnamentDivider'
import { useAudio } from '../../contexts/AudioContext'

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

/* Straw hat SVG — simple illustration */
function StrawHat() {
  return (
    <div
      className="hat-float absolute top-4 right-3 sm:top-8 sm:right-8 md:top-12 md:right-16 pointer-events-none"
      aria-hidden="true"
    >
      <svg
        width="80"
        height="60"
        className="sm:w-[120px] sm:h-[90px]"
        viewBox="0 0 120 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Brim */}
        <ellipse cx="60" cy="54" rx="58" ry="18" fill="#C8591A" />
        {/* Crown */}
        <ellipse cx="60" cy="36" rx="34" ry="26" fill="#C8591A" />
        {/* Highlight on crown */}
        <ellipse cx="52" cy="28" rx="10" ry="8" fill="#D96F30" opacity="0.5" />
        {/* Black band */}
        <rect x="26" y="46" width="68" height="10" rx="3" fill="#1A0A00" />
        {/* Band highlight */}
        <rect x="26" y="46" width="68" height="3" rx="3" fill="#333" opacity="0.4" />
        {/* Brim underside shadow */}
        <ellipse cx="60" cy="55" rx="57" ry="14" fill="#A04515" opacity="0.35" />
        {/* Brim edge detail */}
        <ellipse
          cx="60"
          cy="54"
          rx="58"
          ry="18"
          fill="none"
          stroke="#8B3210"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  )
}

export default function Hero() {
  const { currentTrack, isPlaying, togglePlay } = useAudio()

  const scrollDown = () => {
    document.querySelector('#rota')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="grain-section relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#F2E8D5' }}
    >
      {/* Paper texture overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='5' seed='2'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paper)' opacity='0.3'/%3E%3C/svg%3E\")",
        }}
      />

      <StrawHat />

      <motion.div
        className="text-center flex flex-col items-center gap-5 px-6 max-w-2xl mx-auto"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          variants={fadeInUp}
          className="font-mono text-gold text-sm uppercase tracking-[0.3em]"
        >
          Episódio 01 · 1 Mês
        </motion.span>

        <motion.h1
          variants={fadeInUp}
          className="font-display font-bold italic text-drama leading-tight"
          style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}
        >
          A Grande Rota
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="font-body italic text-text text-lg md:text-xl max-w-md"
        >
          Uma aventura que começou num fliperama e ainda não tem fim à vista.
        </motion.p>

        <motion.div variants={fadeInUp} className="w-full">
          <OrnamentDivider className="my-2" />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <DayCounter />
        </motion.div>

        {/* Custom Audio Player */}
        <div 
          className="w-full p-3 sm:p-4 border-[2px] border-gold rounded-sm flex items-center gap-3 sm:gap-4 shadow-[6px_6px_0px_rgba(184,136,42,0.15)] relative overflow-hidden" 
          style={{ backgroundColor: '#FAF3E0' }}
        >
          <button 
            onClick={() => togglePlay()}
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-drama text-drama hover:bg-drama hover:text-[#FAF3E0] transition-colors shrink-0 relative z-10"
            aria-label={isPlaying ? "Pausar" : "Tocar"}
          >
            {isPlaying ? (
              <span className="text-sm font-bold">❚❚</span>
            ) : (
              <span className="text-sm font-bold ml-1">▶</span>
            )}
          </button>

          <div className="flex-1 text-left relative z-10 overflow-hidden">
            <p className="font-body text-drama font-bold text-base leading-tight truncate">
              {currentTrack.track}
            </p>
            <p className="font-mono text-text text-xs opacity-80 mt-1 truncate">
              {currentTrack.artist}
            </p>
          </div>

          <div 
            className={`shrink-0 text-gold text-2xl relative z-10 transition-all duration-700 ${isPlaying ? 'animate-bounce' : ''}`} 
            aria-hidden="true"
          >
            ♪
          </div>

          {/* Efeito de progresso/fundo muito sutil quando tocando */}
          <div 
            className={`absolute inset-0 bg-gold/5 transition-opacity duration-700 pointer-events-none ${isPlaying ? 'opacity-100' : 'opacity-0'}`} 
            aria-hidden="true"
          />
        </div>

        <motion.button
          variants={fadeInUp}
          onClick={scrollDown}
          className="mt-2 px-5 sm:px-8 py-2.5 sm:py-3 border-2 border-drama text-drama font-serif text-base sm:text-lg rounded-sm
            hover:bg-drama hover:text-cream transition-all duration-300
            shadow-[0_2px_8px_rgba(44,26,14,0.1)] hover:shadow-[0_4px_16px_rgba(125,26,46,0.25)]"
          aria-label="Descer para ver a jornada"
        >
          ↓ Ver a jornada
        </motion.button>
      </motion.div>
    </section>
  )
}
