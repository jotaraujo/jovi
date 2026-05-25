import { motion } from 'framer-motion'
import PostcardCard from '../ui/PostcardCard'
import { postcards } from '../../constants/content'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Postcards() {
  return (
    <section
      id="postais"
      className="grain-section relative py-24 px-6 md:px-8"
      style={{ backgroundColor: '#F2E8D5' }}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-drama text-4xl md:text-5xl"
        >
          Os Postais
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body italic text-text text-lg mt-3"
        >
          Lugares que já existem na nossa história. E os que ainda vão existir.
        </motion.p>
      </div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {postcards.map(card => (
          <motion.div key={card.id} variants={fadeInUp}>
            <PostcardCard
              place={card.place}
              visited={card.visited}
              note={card.note}
              placeholder={!card.visited && card.place.startsWith('[')}
              imageSrc={card.imageSrc}
              imagePosition={card.imagePosition}
            />
          </motion.div>
        ))}
      </motion.div>

      <p className="text-center font-mono text-gold text-xs mt-10 opacity-70">
        * Passe o mouse sobre os postais para virar · Toque para virar no mobile
      </p>
    </section>
  )
}
