import { useState } from 'react'

interface PostcardCardProps {
  place: string
  visited: boolean
  note: string
  placeholder?: boolean
  imageSrc?: string
  imagePosition?: string
}

export default function PostcardCard({
  place,
  visited,
  note,
  placeholder = false,
  imageSrc,
  imagePosition = 'center',
}: PostcardCardProps) {
  const [flipped, setFlipped] = useState(false)

  const stamp = visited ? 'VISITADO' : 'EM BREVE'
  const stampColor = visited ? 'border-drama text-drama' : 'border-gold text-gold'

  return (
    <div
      className={`postcard-flip cursor-pointer ${flipped ? 'flipped' : ''}`}
      style={{ height: '280px' }}
      onClick={() => setFlipped(f => !f)}
      onKeyDown={e => e.key === 'Enter' && setFlipped(f => !f)}
      tabIndex={0}
      role="button"
      aria-label={`Postal ${place} — clique para virar`}
      aria-pressed={flipped}
    >
      <div className="postcard-inner">
        {/* Front */}
        <div
          className="postcard-front rounded-sm shadow-[5px_5px_20px_rgba(44,26,14,0.2)] bg-white p-3 md:p-4"
        >
          <div
            className={`w-full h-full rounded-sm flex items-end p-5 md:p-6 relative overflow-hidden ${imageSrc ? 'bg-cover' : ''}`}
            style={{ 
              backgroundColor: '#FAF3E0',
              backgroundImage: imageSrc ? `url(${imageSrc})` : undefined,
              backgroundPosition: imageSrc ? imagePosition : undefined
            }}
          >
            {/* Dark gradient overlay for text readability if image exists */}
            {imageSrc && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            )}

            {/* Paper texture */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.12] pointer-events-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='p'%3E%3CfeTurbulence baseFrequency='0.06' numOctaves='3'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p)' opacity='0.15'/%3E%3C/svg%3E\")",
              }}
            />
            {placeholder && (
              <span className="absolute top-4 right-4 font-mono text-gold text-xs opacity-40">
                ???
              </span>
            )}
            <h3
              className={`font-display font-bold text-3xl relative z-10 ${placeholder ? 'opacity-50' : ''} ${imageSrc ? 'text-[#FAF3E0] drop-shadow-md' : 'text-drama'}`}
            >
              {place}
            </h3>
          </div>
        </div>

        {/* Back */}
        <div
          className="postcard-back rounded-sm shadow-[5px_5px_20px_rgba(44,26,14,0.2)] p-5 flex"
          style={{ backgroundColor: '#FEFCF8' }}
        >
          <div className="flex-1 pr-4 flex items-center">
            <p className={`font-body text-text text-sm leading-relaxed ${placeholder ? 'opacity-50' : ''}`}>
              {note}
            </p>
          </div>
          <div className="w-px self-stretch bg-gold" />
          <div className="flex-1 pl-4 flex flex-col items-center justify-center">
            <div
              className={`px-4 py-2 rounded-full border-2 -rotate-[8deg] ${stampColor}`}
            >
              <span className="font-serif text-xs uppercase tracking-widest">
                {stamp}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
