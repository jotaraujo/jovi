interface WantedCardProps {
  alias: string
  name: string
  bounty: string
  crime: string
  photo: string
}

export default function WantedCard({
  alias,
  name,
  bounty,
  crime,
  photo,
}: WantedCardProps) {
  return (
    <div
      className="w-full max-w-[340px] sm:max-w-[380px] md:max-w-[400px] p-2 sm:p-3 rounded-sm shadow-[8px_8px_24px_rgba(44,26,14,0.3)]"
      style={{
        background: 'linear-gradient(135deg, #8B6914 0%, #6B4E12 50%, #8B6914 100%)',
      }}
    >
      <div
        className="p-6 relative"
        style={{
          backgroundColor: '#F2E8D5',
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='parch'%3E%3CfeTurbulence baseFrequency='0.03' numOctaves='4' seed='8'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23parch)' opacity='0.15'/%3E%3C/svg%3E\")",
        }}
      >
        {/* Header */}
        <div
          className="text-center py-3 mb-4 -mx-6 -mt-6 px-6"
          style={{ backgroundColor: '#7D1A2E' }}
        >
          <span className="font-serif text-white text-lg uppercase tracking-[0.15em]">
            Se Procura
          </span>
        </div>

        {/* Photo area */}
        <div
          className="mx-auto mb-4 flex items-center justify-center overflow-hidden"
          style={{
            width: 'clamp(140px, 45vw, 180px)',
            height: 'clamp(156px, 50vw, 200px)',
            border: '3px double #B8882A',
            backgroundColor: '#E8DCC8',
          }}
        >
          <img
            src={photo}
            alt={`Foto de ${name}`}
            className="w-full h-full object-cover"
            onError={e => {
              const target = e.currentTarget
              target.style.display = 'none'
              const parent = target.parentElement
              if (parent) {
                parent.innerHTML = `<span style="font-family:'Caveat',cursive;color:#2C1A0E;opacity:0.4;font-size:1rem">[FOTO]</span>`
              }
            }}
          />
        </div>

        {/* Name */}
        <div className="text-center mb-2">
          <p className="font-body italic text-text text-sm">&ldquo;{alias}&rdquo;</p>
          <h3 className="font-display font-bold text-text text-2xl">{name}</h3>
        </div>

        {/* Bounty */}
        <div
          className="text-center mb-4 py-2"
          style={{ borderTop: '1px solid #B8882A', borderBottom: '1px solid #B8882A' }}
        >
          <p className="font-mono text-text text-xs uppercase tracking-widest">
            Recompensa
          </p>
          <p className="font-serif text-warm text-3xl">{bounty}</p>
          <p className="font-mono text-text text-xs">BERRIES</p>
        </div>

        {/* Crime */}
        <div>
          <p className="font-mono text-text text-xs uppercase tracking-wide mb-1">
            Crime:
          </p>
          <p className="font-body text-text text-sm leading-relaxed">{crime}</p>
        </div>
      </div>
    </div>
  )
}
