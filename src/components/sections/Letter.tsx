import { motion } from 'framer-motion'
import { letter } from '../../constants/content'

export default function Letter() {
  const paragraphs = letter.body.split('\n\n')

  return (
    <section
      id="carta"
      className="grain-section relative py-24 px-6 md:px-8"
      style={{ backgroundColor: '#F2E8D5' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-3xl mx-auto"
      >
        <div
          className="relative p-10 md:p-12 rounded-sm"
          style={{
            backgroundColor: '#FAF3E0',
            border: '3px double #B8882A',
            boxShadow: '8px 8px 32px rgba(44,26,14,0.2)',
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='aged'%3E%3CfeTurbulence baseFrequency='0.04' numOctaves='4' seed='5'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23aged)' opacity='0.1'/%3E%3C/svg%3E\")",
          }}
        >
          {/* Coffee stain decoration */}
          <div
            aria-hidden="true"
            className="absolute bottom-8 right-8 w-24 h-20 rounded-full opacity-[0.12]"
            style={{
              background: 'radial-gradient(ellipse at center, #8B5A2B 0%, transparent 70%)',
              transform: 'rotate(15deg) scale(1.2, 0.8)',
            }}
          />
          <div
            aria-hidden="true"
            className="absolute bottom-12 right-12 w-16 h-14 rounded-full opacity-[0.08]"
            style={{
              background: 'radial-gradient(ellipse at center, #8B5A2B 0%, transparent 60%)',
              transform: 'rotate(-20deg) scale(0.9, 1.1)',
            }}
          />

          {/* Letter header */}
          <div className="mb-8 font-mono text-text text-sm leading-loose">
            <p>
              {letter.city}, {letter.date}
            </p>
            <p>Para: {letter.to}</p>
            <p>De: {letter.from}</p>
          </div>

          {/* Letter body */}
          <div className="font-handwrite text-text leading-relaxed text-xl md:text-2xl space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="mt-8">— {letter.from}</p>
          </div>

          {/* Signature divider */}
          <div className="flex items-center gap-3 mt-8">
            <span className="text-gold text-2xl">⚓</span>
            <div className="flex-1 h-px bg-gold" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
