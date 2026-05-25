import { footer } from '../../constants/content'
import { useDaysSince } from '../../hooks/useDaysSince'
import OrnamentDivider from '../ui/OrnamentDivider'

export default function Footer() {
  const days = useDaysSince()

  return (
    <footer
      className="grain-section relative py-16 px-8 text-center"
      style={{ backgroundColor: '#1A0A00' }}
    >
      <OrnamentDivider className="mb-8" />

      <p className="font-handwrite text-cream text-xl mb-2">
        <span className="text-gold">{footer.quote}</span>
      </p>
      <p className="font-mono text-gold text-xs uppercase tracking-widest mb-8">
        {footer.quoteAuthor}
      </p>

      <p className="font-handwrite text-gold text-lg mb-6">{footer.tagline}</p>

      <p className="font-mono text-cream text-xs opacity-50">
        Índice de grudência do desenvolvedor: 10/10 · Dias sem ser bloqueado:{' '}
        {days}
      </p>
    </footer>
  )
}
