import { useRef, useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import GrainOverlay from '../../components/ui/GrainOverlay'
import OrnamentDivider from '../../components/ui/OrnamentDivider'

type Position = { x: number; y: number }

export default function TheChoicePage() {
  const navigate = useNavigate()
  const noButtonRef = useRef<HTMLButtonElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const btnContainerRef = useRef<HTMLDivElement>(null)

  const [noPosition, setNoPosition] = useState<Position>({ x: 0, y: 0 })
  const [positioned, setPositioned] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const [leaving, setLeaving] = useState(false)

  const feedback =
    attempts >= 10
      ? 'Ok, desisto. Mas você sabe a resposta.'
      : attempts >= 5
      ? 'Continua tentando... admiro a teimosia.'
      : null

  const lastJumpTime = useRef<number>(0)

  /* Set initial position of "Não" button relative to buttons container */
  useEffect(() => {
    const btn = noButtonRef.current
    const container = btnContainerRef.current
    if (!btn || !container) return
    const btnW = btn.offsetWidth || 200
    const btnH = btn.offsetHeight || 48
    const cW = container.offsetWidth
    const cH = container.offsetHeight
    setNoPosition({
      x: cW - btnW - 8,
      y: cH / 2 - btnH / 2,
    })
    setPositioned(true)
  }, [])

  /* Desktop: flee from cursor */
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const btn = noButtonRef.current
    const container = btnContainerRef.current
    if (!btn || !container) return

    const btnRect = btn.getBoundingClientRect()
    const cRect = container.getBoundingClientRect()

    const btnCenterX = btnRect.left + btnRect.width / 2
    const btnCenterY = btnRect.top + btnRect.height / 2
    const distance = Math.hypot(e.clientX - btnCenterX, e.clientY - btnCenterY)

    if (distance < 80) {
      const dx = btnCenterX - e.clientX
      const dy = btnCenterY - e.clientY
      const angle = Math.atan2(dy, dx)

      const newX = Math.min(
        Math.max(8, btnCenterX - cRect.left + Math.cos(angle) * 100),
        cRect.width - btn.offsetWidth - 8,
      )
      const newY = Math.min(
        Math.max(8, btnCenterY - cRect.top + Math.sin(angle) * 100),
        cRect.height - btn.offsetHeight - 8,
      )
      setNoPosition({ x: newX, y: newY })

      const now = Date.now()
      if (now - lastJumpTime.current > 400) {
        setAttempts(a => a + 1)
        lastJumpTime.current = now
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  /* Mobile: random jump on touch */
  const handleNoTouch = useCallback(
    (e: TouchEvent) => {
      e.preventDefault()
      const container = btnContainerRef.current
      const btn = noButtonRef.current
      if (!container || !btn) return
      const btnW = btn.offsetWidth
      const btnH = btn.offsetHeight
      setNoPosition({
        x: Math.random() * (container.offsetWidth - btnW - 16) + 8,
        y: Math.random() * (container.offsetHeight - btnH - 16) + 8,
      })
      setAttempts(a => a + 1)
    },
    [],
  )

  useEffect(() => {
    const btn = noButtonRef.current
    if (!btn) return
    btn.addEventListener('touchstart', handleNoTouch, { passive: false })
    return () => btn.removeEventListener('touchstart', handleNoTouch)
  }, [handleNoTouch])

  /* "Sim" click → animate out → navigate */
  const handleYes = useCallback(async () => {
    setLeaving(true)
    await new Promise(r => setTimeout(r, 500))
    navigate('/grande-rota')
  }, [navigate])

  /* Auto-redirect after 10 attempts */
  useEffect(() => {
    if (attempts >= 10) {
      const timer = setTimeout(() => {
        handleYes()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [attempts, handleYes])

  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden"
      style={{ backgroundColor: '#1A0A00', fontFamily: 'Lora, serif' }}
      initial={{ opacity: 1, scale: 1 }}
      animate={leaving ? { opacity: 0, scale: 0.96 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: 'easeIn' }}
    >
      <GrainOverlay />

      {/* Outer ornate frame */}
      <div
        ref={cardRef}
        className="relative z-10 w-full max-w-[580px] px-2 sm:px-0"
        style={{
          filter: 'drop-shadow(0 20px 60px rgba(44, 26, 14, 0.65))',
          minHeight: '420px',
        }}
      >
        <div
          className="relative border-[3px] border-gold p-3"
          style={{ boxShadow: 'inset 0 0 0 1px #B8882A' }}
        >
          {/* Corner decorations */}
          {['top-[-6px] left-[-6px] border-t-[3px] border-l-[3px]',
            'top-[-6px] right-[-6px] border-t-[3px] border-r-[3px]',
            'bottom-[-6px] left-[-6px] border-b-[3px] border-l-[3px]',
            'bottom-[-6px] right-[-6px] border-b-[3px] border-r-[3px]',
          ].map((cls, i) => (
            <div
              key={i}
              aria-hidden="true"
              className={`absolute w-5 h-5 border-gold ${cls}`}
            />
          ))}

          {/* Inner card */}
          <div
            className="border-[2px] border-gold overflow-hidden relative"
            style={{ backgroundColor: '#F2E8D5' }}
          >
            {/* Paper texture */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.08] pointer-events-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paper)'/%3E%3C/svg%3E\")",
              }}
            />

            <div className="relative z-10 px-4 sm:px-8 md:px-10 py-7 sm:py-10 md:py-12 text-center">
              {/* Tag */}
              <p className="font-mono text-gold uppercase tracking-[0.3em] text-sm mb-6">
                // AVISO OFICIAL
              </p>

              {/* Title */}
              <h1 className="font-display font-bold italic text-drama text-3xl md:text-5xl leading-tight mb-5">
                Aquela noite no fliperama valeu a pena?
              </h1>

              {/* Subtitle */}
              <p className="font-body italic text-text text-lg mb-8">
                Pense bem antes de responder.
              </p>

              <OrnamentDivider className="mb-8" />

              {/* Buttons area — needs fixed height so "Não" can be absolute */}
              <div
                ref={btnContainerRef}
                className="relative mx-auto mb-8 overflow-hidden w-full"
                style={{ height: '120px', maxWidth: '460px' }}
              >
                {/* Sim */}
                <button
                  onClick={handleYes}
                  className="absolute left-0 top-1/2 -translate-y-1/2 px-4 sm:px-8 py-3 sm:py-3.5 bg-warm text-white
                    font-serif text-base sm:text-lg rounded-sm transition-all duration-300
                    hover:bg-[#a04715] shadow-[0_4px_12px_rgba(139,90,43,0.3)]
                    hover:shadow-[0_6px_18px_rgba(139,90,43,0.45)]"
                  style={{ width: 'clamp(130px, 40vw, 200px)' }}
                >
                  Sim, claro 🎮
                </button>

                {/* Não — absolutely positioned, flees cursor */}
                <button
                  ref={noButtonRef}
                  aria-label="Não (este botão foge do cursor)"
                  aria-disabled="true"
                  className="absolute px-4 sm:px-8 py-3 sm:py-3.5 border-2 border-text text-text bg-transparent
                    font-serif text-base sm:text-lg rounded-sm"
                  style={{
                    width: 'clamp(130px, 40vw, 200px)',
                    left: `${noPosition.x}px`,
                    top: `${noPosition.y}px`,
                    transition: 'left 0.15s ease-out, top 0.15s ease-out',
                    opacity: positioned ? 1 : 0,
                  }}
                  tabIndex={-1}
                >
                  Não
                </button>
              </div>

              {/* Progressive feedback */}
              <AnimatePresence mode="wait">
                {feedback && (
                  <motion.p
                    key={feedback}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="font-handwrite text-drama text-xl mb-4"
                  >
                    {feedback}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Footer note */}
              <p className="font-handwrite text-text/60 text-sm mt-2">
                * O desenvolvedor desta página não é parcial. Totalmente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
