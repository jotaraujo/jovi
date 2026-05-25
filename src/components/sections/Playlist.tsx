import { motion } from 'framer-motion'
import VinylRecord from '../ui/VinylRecord'
import { playlist } from '../../constants/content'
import { useDaysSince } from '../../hooks/useDaysSince'
import { useAudio } from '../../contexts/AudioContext'

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function Playlist() {
  // Hook para calcular os dias
  const days = useDaysSince()

  // Consome o estado global de áudio
  const { currentTrack, isPlaying, togglePlay } = useAudio()

  return (
    <section
      id="playlist"
      className="grain-section relative py-24 px-6 md:px-8"
      style={{ backgroundColor: '#1A0A00' }}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-gold text-4xl md:text-5xl"
        >
          Lado B
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body italic text-cream text-lg mt-3"
        >
          As músicas que já fazem parte dessa história.
        </motion.p>
      </div>

      {/* Content: vinyl + tracklist */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Vinyl */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="shrink-0"
        >
          <VinylRecord isPlaying={isPlaying} />
        </motion.div>

        {/* Tracklist */}
        <motion.div
          className="flex-1 p-7 md:p-8 rounded-sm"
          style={{
            backgroundColor: '#FAF3E0',
            boxShadow: '6px 6px 24px rgba(44,26,14,0.3)',
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='pt'%3E%3CfeTurbulence baseFrequency='0.05' numOctaves='3'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23pt)' opacity='0.07'/%3E%3C/svg%3E\")",
          }}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {playlist.map((track, i) => {
            const isThisTrackPlaying = currentTrack.id === track.id && isPlaying

            return (
              <motion.div
                key={track.id}
                variants={fadeInUp}
                className={`flex items-start gap-4 py-4 ${i < playlist.length - 1 ? 'border-b border-gold/40' : ''}`}
              >
                {/* Botão de Play/Pause */}
                <button 
                  onClick={() => togglePlay(track.id)}
                  disabled={!track.audioSrc}
                  className={`mt-1 flex items-center justify-center w-8 h-8 rounded-full border 
                    ${track.audioSrc ? 'border-gold text-gold hover:bg-gold hover:text-[#FAF3E0] cursor-pointer' : 'border-gold/30 text-gold/30 cursor-not-allowed'} 
                    transition-colors shrink-0`}
                  aria-label={isThisTrackPlaying ? "Pausar" : "Tocar"}
                >
                  {isThisTrackPlaying ? (
                    <span className="text-xs">❚❚</span>
                  ) : (
                    <span className="text-xs ml-0.5">▶</span>
                  )}
                </button>

                <div className="flex-1 overflow-hidden">
                  <p className={`font-body text-base truncate transition-colors ${currentTrack.id === track.id ? 'text-drama font-bold' : 'text-text'}`}>
                    {track.track}
                  </p>
                  <p className="font-mono text-text text-xs opacity-70 mt-0.5">
                    {track.artist}
                  </p>
                  {track.note && (
                    <p className="font-handwrite text-drama text-sm mt-1">
                      ★ {track.note}
                    </p>
                  )}
                </div>
                {track.featured && (
                  <span className="text-gold text-xl mt-0.5" aria-label="Favorita">★</span>
                )}
              </motion.div>
            )
          })}

          {/* Footer note */}
          <motion.div
            variants={fadeInUp}
            className="mt-6 pt-4 border-t border-gold/40"
          >
            <p className="font-handwrite text-gold text-base">
              Duração total: {days} dias e contando.
            </p>
            <p className="font-handwrite text-gold text-base">
              Produzido com: muito café e pouco sono.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
