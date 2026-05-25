import { motion } from 'framer-motion'
import WantedCard from '../ui/WantedCard'
import { wanted } from '../../constants/content'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function WantedPosters() {
  return (
    <section
      id="procurados"
      className="grain-section relative py-24 px-6 md:px-8"
      style={{ backgroundColor: '#FAF3E0' }}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold italic text-drama text-4xl md:text-5xl"
        >
          Procurados
        </motion.h2>
      </div>

      {/* Posters */}
      <motion.div
        className="flex flex-col sm:flex-row gap-10 md:gap-12 justify-center items-center max-w-5xl mx-auto"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeInUp} className="w-full flex justify-center">
          <WantedCard
            alias={wanted.him.alias}
            name={wanted.him.name}
            bounty={wanted.him.bounty}
            crime={wanted.him.crime}
            photo={wanted.him.photo}
          />
        </motion.div>

        <motion.div variants={fadeInUp} className="w-full flex justify-center">
          <WantedCard
            alias={wanted.her.alias}
            name={wanted.her.name}
            bounty={wanted.her.bounty}
            crime={wanted.her.crime}
            photo={wanted.her.photo}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
